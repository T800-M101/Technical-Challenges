import { Challenge } from "../models/challenge.model";

export const CHALLENGES: Challenge[] = [
  {
    id: 'reactive-form',
    title: 'Reactive Form with Custom Validations',
    description:
      'Registration form with synchronous validations, asynchronous validations, and cross-field validators. Error state management and visual feedback.',
    difficulty: 'intermediate',
    tags: ['Forms', 'Validation', 'RxJS'],
    route: '/reactive-form',
    completedAt: '2026-04',
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
    route: '/http-api',
    completedAt: '2026-04',
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
      'Authentication system with functional guards, post-login redirection, nested route protection, and token management in localStorage. (Fake login data: memo@example.com | pass123)',
    difficulty: 'advanced',
    tags: ['Router', 'Guards', 'Auth'],
    route: '/auth-guard-demo',
    completedAt: '2026-04',
    highlights: [
      'Functional canActivate (Angular 15+)',
      'Redirect with preserved returnUrl',
      'AuthService with BehaviorSubject',
    ],
  },
 {
  id: 'signals-store',
  title: 'State Management with Signals',
  description:
    'Global store implementation using Angular Signals. Features a shopping cart with real-time price calculations, item persistence, and granular reactivity.',
  difficulty: 'advanced',
  tags: ['Signals', 'State', 'Reactive'],
  route: '/signals-store',
  completedAt: '2026-04',
  highlights: [
    'Signal-based Store (Store Pattern)',
    'computed() for derived state (Tax, Totals, Discounts)',
    'effect() to sync state with localStorage',
  ],
},
];
