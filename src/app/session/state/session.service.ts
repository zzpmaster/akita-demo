import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionStore } from './session.store';
import { tap, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { SessionQuery } from './session.query';

@Injectable({ providedIn: 'root' })
export class SessionService {

  constructor(
    private sessionStore: SessionStore,
    private http: HttpClient) {
  }

  login() {
    return of({
      userName: 'Zhang'
    }).pipe(
      map(user => {
        return { name: user.userName };
      }),
      tap(user => this.sessionStore.update(user)
      ));
  }

}
