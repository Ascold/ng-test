import { RouterModule, Routes } from '@angular/router';

export const AppRoutes: Routes = [
  {
    path: 'auth',
    loadChildren: 'app/features/auth/auth.module#AuthModule'
  },
  {
    path: 'dashboard',
    loadChildren: 'app/features/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: '**',
    redirectTo: 'auth',
    pathMatch: 'full'
  }
];

export const appRouting = RouterModule.forRoot(AppRoutes);
