
import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path:'',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'reactive-form',
    loadComponent: () =>
      import('./features/reactive-form/reactive-form.component').then(m => m.ReactiveFormComponent),
  },
  {
    path: 'http-api',
    loadComponent: () =>
      import('./features/http-api/http-api.component').then(m => m.HttpApiComponent),
  },
 {
    path: 'auth-guard-demo',
    children: [
      {
        path: 'login',
        loadComponent: () => import('./features/login/login.component').then(m => m.LoginComponent)
      },
      {
        path: '',
        canActivate: [authGuard],
        loadComponent: () => import('./features/auth-guard-demo/auth-guard-demo.component').then(m => m.AuthGuardDemoComponent)
      }
    ]
  },
  // {
  //   path: 'component-library',
  //   loadComponent: () =>
  //     import('./features/component-library/component-library.component').then(m => m.ComponentLibraryComponent),
  // },
  {
    path: '**',
    redirectTo: '',
  },
];
