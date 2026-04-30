import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "../auth.service";

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // The user is authenticated, they can proceed
  if (authService.currentUser) {
    return true;
  }

  /* If they're not authenticated, we send them to the login page.
  But we save the current URL in a queryparam to return to it later. */

  return router.createUrlTree(['/auth-guard-demo/login'], {
    queryParams: { returnUrl: state.url }
  });
};
