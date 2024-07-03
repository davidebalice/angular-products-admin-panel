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
    path: 'tables',
    loadChildren: () =>
      import('../tables/tables.module').then((m) => m.TablesModule),
  },

  {
    path: 'widgets',
    loadChildren: () =>
      import('../widgets/widgets.module').then((m) => m.WidgetsModule),
  },

  {
    path: 'faq',
    loadChildren: () => import('../faq/faq.module').then((m) => m.FaqModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('../profile/profile.module').then((m) => m.ProfileModule),
  },

  {
    path: 'downloads',
    loadChildren: () =>
      import('../downloads/downloads.module').then((m) => m.DownloadsModule),
  },
];
