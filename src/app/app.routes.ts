
import { Routes } from '@angular/router';

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
  // {
  //   path: 'auth-guard',
  //   loadComponent: () =>
  //     import('./features/auth-guard/auth-guard-demo.component').then(m => m.AuthGuardDemoComponent),
  // },
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
