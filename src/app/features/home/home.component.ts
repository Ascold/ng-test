import {Component, OnInit} from '@angular/core';
import {UserService} from '../../core/core/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public users: Array<any> = [];

  constructor(private _userService: UserService) {
  }

  ngOnInit() {
  }

  public getUsers() {
    this._userService.getAll().subscribe(success => {
      console.log('success', success);
      this.users = success;
    }, error => {
      console.log('error', error);
    });
  }
}
