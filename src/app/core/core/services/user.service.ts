import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

export const host = 'http://localhost:3000/api/v1';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  public createUser(data): Observable<any> {
    const url = host + '/users/create';
    return this.http.post(url, data);
  }

}
