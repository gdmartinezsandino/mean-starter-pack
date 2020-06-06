import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Action, Store } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { Observable,  of } from 'rxjs';
import { tap, map, mergeMap, exhaustMap, catchError } from 'rxjs/operators';

import * as fromModels from '@app/models';
import * as fromServicesShared from '@shared/services';
import * as fromStoreCore from '@core/store/store';
import * as fromActionsCore from '@app/core/store/actions/router.actions';
import * as fromStoreUser from '@profile/store';

import * as fromServices from '../../services';
import * as fromStore from '../store';
import * as fromActions from '../actions/change-password.actions';

import * as fromStoreShared from '@shared/store';
import * as fromActionsShared from '@shared/store/actions/shared.actions';

@Injectable()
export class ChangePasswordEffects {
  @Effect()
  changePassword$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.ActionTypes.ChangePassword),
    map((action: fromActions.ChangePassword) => action.payload),
    exhaustMap((auth: fromModels.Authenticate) =>
      this._service.changePassword(auth).pipe(
        map(response => new fromActions.ChangePasswordSuccess(response)),
        catchError(error => of(new fromActions.ChangePasswordFailure(error)))
      )
    )
  );

  @Effect({ dispatch: false })
  changePasswordSuccess$ = this.actions$.pipe(
    ofType(fromActions.ActionTypes.ChangePasswordSuccess),
    map((action: fromActions.ChangePasswordSuccess) => action.payload),
    tap((response) => {
      this._utils.showDialog();
    })
  );

  @Effect({ dispatch: false })
  changePasswordFailure$ = this.actions$.pipe(
    ofType(fromActions.ActionTypes.ChangePasswordFailure),
    map((action: fromActions.ChangePasswordFailure) => action.payload),
    tap((message) => {
      this._utils.showDialog();
    })
  );

  constructor(
    private actions$: Actions,
    private _service: fromServices.ChangePasswordService,
    private _utils: fromServicesShared.UtilsService,
    private _store: Store<fromStore.ChangePasswordState>,
    private _storeUser: Store<fromStoreUser.ProfileState>,
    private _storeCore: Store<fromStoreCore.CoreState>,
    private _storeShared: Store<fromStoreShared.SharedState>
  ) {}
}
