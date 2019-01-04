import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { map, take } from 'rxjs/operators';

import * as fromServicesShared from '@shared/services';
import * as fromProfile from '@profile/store';

import * as fromStore from '../store';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(
    private _router: Router,
    private _utils: fromServicesShared.UtilsService,
    private _store: Store<fromStore.CoreState>,
    private _storeUser: Store<fromProfile.ProfileState>
  ) { }

  canActivate(): Observable<boolean> {
    return this._storeUser.pipe(
      select(fromProfile.getUser),
      map(user => {
        if (user.role !== 'Admin') {
          this._utils.showDialog({
            width: '250px',
            data: {
              title: 'Atención',
              message: 'No tienes permisos suficientes para realizar esta acción'
            }
          });

          this._store.dispatch(new fromStore.Go({
            path: ['dashboard/home']
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
export class CompanyGuard implements CanActivate {
  constructor(
    private _router: Router,
    private _utils: fromServicesShared.UtilsService,
    private _store: Store<fromStore.CoreState>,
    private _storeUser: Store<fromProfile.ProfileState>
  ) { }

  canActivate(): Observable<boolean> {
    return this._storeUser.pipe(
      select(fromProfile.getUser),
      map(user => {
        if (user.role !== 'Company') {
          this._utils.showDialog({
            width: '250px',
            data: {
              title: 'Atención',
              message: 'No tienes permisos suficientes para realizar esta acción'
            }
          });

          this._store.dispatch(new fromStore.Go({
            path: ['dashboard/home']
          }));

          return false;
        }

        return true;
      }),
      take(1)
    );
  }
}
