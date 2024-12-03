import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {map, Observable} from 'rxjs'

import {RegisterRequestInterface} from '../types/registerRequest.interface'
import {CurrentUserInterface} from '../../shared/types/currentUser.interface'
import {AuthResponseInterface} from '../types/authResponse.interface'

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = 'http://localhost:3000/api/users'

    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map((response: AuthResponseInterface) => response.user))
  }
}
