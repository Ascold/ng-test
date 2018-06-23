import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { SignupComponent } from './signup.component';

import {signupRouting} from './signup.routes';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    signupRouting
  ],
  declarations: [
    SignupComponent
  ]
})
export class SignupModule { }
