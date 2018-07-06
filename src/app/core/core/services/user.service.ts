import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';

import {CookieService} from 'ngx-cookie-service';

export const host = 'http://localhost:3000/api/v1';

@Injectable()
export class UserService {

  constructor(private http: HttpClient,
              private cookieService: CookieService) {
  }

  public createUser(data): Observable<any> {
    const url = host + '/users/create';
    return this.http.post(url, data);
  }

  public login(data): Observable<any> {
    const url = host + '/users/login';
    const response = this.http.post(url, data, { withCredentials: true });
    console.log(response);
    // this.cookieService.set('a_t', response.responsePayload);
    return response;
  }

  public getAll(): Observable<any> {
    const url = host + '/users';
    return this.http.get(url);
  }
}
