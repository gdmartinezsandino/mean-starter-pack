import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import * as fromStoreLogin from '@login/store';

import * as fromStore from '../store';

@Injectable()
export class AuthenticatedGuard implements CanActivate {
  constructor(
    private _store: Store<fromStore.CoreState>,
    private _storeLogin: Store<fromStoreLogin.LoginState>
  ) { }

  canActivate(): Observable<boolean> {
    return this._storeLogin.pipe(
      select(fromStoreLogin.getLoggedIn),
      map(loggedIn => {
        if (!loggedIn && !window.location.href.includes('report-to-export')) {
          this._store.dispatch(new fromStore.Go({
            path: ['login']
          }));

          return false;
        }

        return true;
      }),
      take(1)
    );
  }
}


@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(
    private _router: Router,
    private _store: Store<fromStore.CoreState>,
    private _storeLogin: Store<fromStoreLogin.LoginState>
  ) { }

  canActivate(): Observable<boolean> {
    return this._storeLogin.pipe(
      select(fromStoreLogin.getLoggedIn),
      map(loggedIn => {
        if (loggedIn) {
          this._store.dispatch(new fromStore.Go({
            path: ['dashboard']
          }));

          return false;
        }

        return true;
      }),
      take(1)
    );
  }
}
