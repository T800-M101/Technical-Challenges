import { inject, Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private router = inject(Router);
  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  get currentUser(): User | null {
    return this.userSubject.value;
  }

  login(email: string, pass: string): boolean {
    if (email === 'memo@example.com' && pass === 'pass123') {
      const mockUser: User = {
        id: '123',
        name: 'Guillermo Moran',
        email: 'memo@example.com',
        role: 'admin',
        token: 'jwt-fake-token'
      };
      this.userSubject.next(mockUser);
      return true;
    }
    return false;
  }

  logout() {
    this.userSubject.next(null);
    this.router.navigate(['/']);
  }
}
