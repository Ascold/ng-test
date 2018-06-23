import {HomeComponent} from './home.component'
import {RouterModule, Routes} from '@angular/router';

export const HomeRoutes: Routes = [
  {
    path: '', component: HomeComponent
  }
];

export const homeRouting = RouterModule.forChild(HomeRoutes);
