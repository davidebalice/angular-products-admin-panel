import { Routes } from '@angular/router';

export const Full_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('../products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: 'components',
    loadChildren: () =>
      import('../components/components.module').then((m) => m.ComponentsModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('../profile/profile.module').then((m) => m.ProfileModule),
  },
];
