import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Challenge } from '../../core/models/challenge.model';
import {
  emailTakenValidator,
  passwordMatchValidator,
  strongPasswordValidator,
  usernameFormatValidator,
} from '../../helpers/form.validators';
import { ChallengeShellComponent } from '../../shared/components/challenge-shell/challenge-shell.component';
import { CHALLENGES } from '../../core/data/challenges.data';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ChallengeShellComponent],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent {
  challenge: Challenge = CHALLENGES.find((c) => c.id === 'reactive-form')!;

  form!: FormGroup;
  loading = false;
  submitted = false;
  submittedData: unknown = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          usernameFormatValidator(),
        ],
      ],
      email: [
        '',
        [Validators.required, Validators.email],
        [emailTakenValidator()],
      ],
      passwords: this.fb.group(
        {
          password: [
            '',
            [
              Validators.required,
              Validators.minLength(8),
              strongPasswordValidator(),
            ],
          ],
          confirmPassword: ['', Validators.required],
        },
        { validators: passwordMatchValidator() },
      ),
      role: ['', Validators.required],
      terms: [false, Validators.requiredTrue],
    });
  }

  // ─── Helpers de template ──────────────────────────────────────────────────

  ctrl(name: string, groupName?: string): AbstractControl {
    return groupName
      ? this.form.get(groupName)!.get(name)!
      : this.form.get(name)!;
  }

  showErrors(name: string, groupName?: string): boolean {
    const c = this.ctrl(name, groupName);
    return c.invalid && (c.dirty || c.touched);
  }

  hasError(name: string, error: string, groupName?: string): boolean {
    return this.ctrl(name, groupName).hasError(error);
  }

  isValidating(name: string): boolean {
    return this.ctrl(name).pending;
  }

  get passwordGroupError(): boolean {
    return this.form.get('passwords')?.hasError('passwordMismatch') ?? false;
  }

  get passwordChecks() {
    const value: string = this.ctrl('password', 'passwords').value ?? '';
    return {
      hasUpper: /[A-Z]/.test(value),
      hasLower: /[a-z]/.test(value),
      hasNumber: /[0-9]/.test(value),
    };
  }

  inputClass(name: string, groupName?: string): string {
    const base = `w-full bg-neutral-900 border rounded-lg px-4 py-2.5 text-white text-sm
                  font-mono placeholder-neutral-600 outline-none transition-all duration-200
                  focus:ring-1 `;
    const ctrl = this.ctrl(name, groupName);
    const hasErr = ctrl.invalid && (ctrl.dirty || ctrl.touched);

    return (
      base +
      (hasErr
        ? 'border-red-500/70 focus:border-red-500 focus:ring-red-500/30'
        : 'border-neutral-700 focus:border-cyan-400 focus:ring-cyan-400/20')
    );
  }

  strengthDot(active: boolean): string {
    return active ? 'text-green-400' : 'text-neutral-600';
  }

  // ─── Submit ───────────────────────────────────────────────────────────────

  onSubmit(): void {
    if (this.form.invalid || this.form.pending) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;

    // Simula llamada al backend
    setTimeout(() => {
      const { passwords, ...rest } = this.form.value;
      this.submittedData = { ...rest, password: '••••••••' };
      this.loading = false;
      this.submitted = true;
    }, 1200);
  }

  reset(): void {
    this.form.reset();
    this.submitted = false;
    this.submittedData = null;
  }
}
