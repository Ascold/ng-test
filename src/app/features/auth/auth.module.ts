import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AuthComponent} from './auth.component';
import {authRouting} from './auth.routes';

@NgModule({
  imports: [
    CommonModule,
    authRouting
  ],
  declarations: [
    AuthComponent
  ]
})
export class AuthModule { }
