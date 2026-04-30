import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  private authService = inject(AuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  hasReturnUrl = false;
  errorMessage: string | null = null;
  isLoading = false; // We added a charging state for greater realism.

  credentials = {
    email: '',
    password: ''
  };

  ngOnInit() {
    this.hasReturnUrl = this.route.snapshot.queryParamMap.has('returnUrl');
  }

  login() {
    this.errorMessage = null;
    this.isLoading = true;

    // We simulated a small network delay to improve the UX
    setTimeout(() => {
      const success = this.authService.login(
        this.credentials.email,
        this.credentials.password
      );

      if (success) {
        const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/auth-guard-demo';
        this.router.navigateByUrl(returnUrl);
      } else {
        this.errorMessage = 'Invalid email or password. Please try again.';
        this.isLoading = false;
      }
    }, 800);
  }

}
