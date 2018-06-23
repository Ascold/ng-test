import {AuthComponent} from './auth.component';

import {RouterModule, Routes} from '@angular/router';

export const AuthRoutes: Routes = [
  {
    path: '', component: AuthComponent
  }
];

export const authRouting = RouterModule.forChild(AuthRoutes);
