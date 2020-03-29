import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import * as fromServicesShared from '@shared/services';
import * as fromProfile from '@profile/store';

import * as fromStore from '../store';

import * as fromStoreShared from '@shared/store';
import * as fromActionsShared from '@shared/store/actions/shared.actions';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(
    private _router: Router,
    private _utils: fromServicesShared.UtilsService,
    private _store: Store<fromStore.CoreState>,
    private _storeUser: Store<fromProfile.ProfileState>,
    private _storeShared: Store<fromStoreShared.SharedState>
  ) { }

  canActivate(): Observable<boolean> {
    return this._storeUser.pipe(
      select(fromProfile.getUser),
      map((user: any) => {
        if (user.role !== 'Admin') {
          this._utils.showDialog();

          return false;
        }

        return true;
      }),
      take(1)
    );
  }
}
