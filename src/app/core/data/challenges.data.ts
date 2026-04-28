import { Challenge } from "../models/challenge.model";

export const CHALLENGES: Challenge[] = [
  {
    id: 'reactive-form',
    title: 'Reactive Form with Custom Validations',
    description:
      'Registration form with synchronous validations, asynchronous validations, and cross-field validators. Error state management and visual feedback.',
    difficulty: 'intermediate',
    tags: ['Forms', 'Validation', 'RxJS'],
    githubUrl: 'https://github.com/TU_USUARIO/angular-challenges-portfolio/tree/main/src/app/features/reactive-form',
    route: '/reactive-form',
    completedAt: '2024-01',
    highlights: [
      'FormBuilder with typed AbstractControl',
      'Async validator simulating HTTP call',
      'Cross-field validator (password match)',
    ],
  },
  {
    id: 'http-api',
    title: 'API Consumption with RxJS',
    description:
      'Real-time country search with debounce, error handling, loading states, and cancellation of previous requests with switchMap.',
    difficulty: 'intermediate',
    tags: ['HTTP', 'RxJS', 'API'],
    githubUrl: 'https://github.com/TU_USUARIO/angular-challenges-portfolio/tree/main/src/app/features/http-api',
    route: '/http-api',
    completedAt: '2024-02',
    highlights: [
      'debounceTime + switchMap to cancel requests',
      'Typed HTTP responses with generics',
      'Error handling with catchError and retry',
    ],
  },
  {
    id: 'auth-guard',
    title: 'Auth Guard + Route Protection',
    description:
      'Authentication system with functional guards, post-login redirection, nested route protection, and token management in localStorage.',
    difficulty: 'advanced',
    tags: ['Router', 'Guards', 'Auth'],
    githubUrl: 'https://github.com/TU_USUARIO/angular-challenges-portfolio/tree/main/src/app/features/auth-guard',
    route: '/auth-guard',
    completedAt: '2024-03',
    highlights: [
      'Functional canActivate (Angular 15+)',
      'Redirect with preserved returnUrl',
      'AuthService with BehaviorSubject',
    ],
  },
  {
    id: 'component-library',
    title: 'UI Component Library',
    description:
      'Set of reusable components: Button, Input, Modal, Card, and Badge. Each with configurable @Input(), slots with ng-content, and encapsulated styles.',
    difficulty: 'advanced',
    tags: ['Components', 'Library', 'CSS'],
    githubUrl: 'https://github.com/TU_USUARIO/angular-challenges-portfolio/tree/main/src/app/features/component-library',
    route: '/component-library',
    completedAt: '2024-04',
    highlights: [
      'ng-content for flexible composition',
      'ViewEncapsulation.Emulated vs None',
      'ChangeDetectionStrategy.OnPush on all components',
    ],
  },
];
