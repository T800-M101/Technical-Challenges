import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AuthService } from '../../core/services/auth-service/auth.service';

@Component({
  selector: 'app-auth-guard-demo',
  imports: [CommonModule],
  templateUrl: './auth-guard-demo.component.html',
  styleUrl: './auth-guard-demo.component.css'
})
export class AuthGuardDemoComponent {
  // We inject the service to access the user's global state
  private authService = inject(AuthService);

  // We expose the observable for use with the async pipe
  user$ = this.authService.user$;

  logout() {
    this.authService.logout();
  }

}
