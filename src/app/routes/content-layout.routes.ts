import { Routes } from '@angular/router';

export const CONTENT_ROUTES: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('../auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'pages',
    loadChildren: () =>
      import('../pages/pages.module').then((m) => m.PagesModule),
  },
];
