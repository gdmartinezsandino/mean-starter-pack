import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { map, take } from 'rxjs/operators';

import * as fromServicesShared from '@shared/services';
import * as fromStoreUser from '@profile/store';

import * as fromStore from '../store';

@Injectable()
export class ActivatedGuard implements CanActivate {
  constructor(
    private _utils: fromServicesShared.UtilsService,
    private _store: Store<fromStore.CoreState>,
    private _storeUser: Store<fromStoreUser.ProfileState>
  ) { }

  canActivate(): Observable<boolean> {
    return this._storeUser.pipe(
      select(fromStoreUser.getProfileState),
      map(state => {
        if (state !== 'ACTIVE') {
          this._utils.showDialog({
            width: '250px',
            data: {
              title: 'Atención',
              message: 'El usuario no ha sido activado'
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
