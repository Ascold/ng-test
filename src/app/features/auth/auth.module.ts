import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AuthComponent} from './auth.component';
import {authRouting} from './auth.routes';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    authRouting
  ],
  declarations: [
    AuthComponent
  ]
})
export class AuthModule { }
