import {DashboardComponent} from './dashboard.component';
import {RouterModule, Routes} from '@angular/router';

export const DashboardRoutes: Routes = [
  {
    path: '', component: DashboardComponent, loadChildren: 'app/features/home/home.module#HomeModule'
  },
];

export const dashboardRouting = RouterModule.forChild(DashboardRoutes);
