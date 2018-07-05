import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {UserService} from '../../core/core/services/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  public form: FormGroup;

  constructor(private _formBuilder: FormBuilder,
              private _userService: UserService) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm(): void {
    this.form = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    this.form.updateValueAndValidity();
  }

  public submit(): void {
    if (this.form.invalid) {
      console.log('form invalid');
      return;
    }
    const formData = this.form.value;
    console.log('formData', formData);
    this._userService.login(formData).subscribe(success => {
      console.log('success', success);
    }, error => {
      console.log('error', error);
    });
  }
}
