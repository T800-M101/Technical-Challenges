import { AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Observable, of, delay, map } from 'rxjs';

// ─── Synchronous ────────────────────────────────────────────────────────────────

/** Password must have at least one uppercase letter, one lowercase letter, and one number. */
export function strongPasswordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value: string = control.value ?? '';
    if (!value) return null;

    const hasUpper = /[A-Z]/.test(value);
    const hasLower = /[a-z]/.test(value);
    const hasNumber = /[0-9]/.test(value);

    if (hasUpper && hasLower && hasNumber) return null;

    return {
      strongPassword: {
        hasUpper,
        hasLower,
        hasNumber,
      },
    };
  };
}

/**  The two password fields must match — applies to the FormGroup */
export function passwordMatchValidator(): ValidatorFn {
  return (group: AbstractControl): ValidationErrors | null => {
    const password = group.get('password')?.value;
    const confirm = group.get('confirmPassword')?.value;
    if (!password || !confirm) return null;
    return password === confirm ? null : { passwordMismatch: true };
  };
}

/** Username cannot contain spaces or special characters */
export function usernameFormatValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value: string = control.value ?? '';
    if (!value) return null;
    const valid = /^[a-zA-Z0-9_]+$/.test(value);
    return valid ? null : { usernameFormat: true };
  };
}

// ─── Asynchronous ────────────────────────────────────────────────────────────────

/** Simulates an HTTP call that checks whether the email is already registered */
export function emailTakenValidator(): AsyncValidatorFn {
  const TAKEN_EMAILS = ['test@test.com', 'admin@admin.com', 'memo@akc.com'];

  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    const value: string = control.value ?? '';
    if (!value) return of(null);

    return of(value).pipe(
      delay(800), // Simulates network latency
      map(email =>
        TAKEN_EMAILS.includes(email.toLowerCase())
          ? { emailTaken: true }
          : null
      )
    );
  };
}
