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
import * as fromActions from '../actions/recovery-password.actions';

import * as fromStoreShared from '@shared/store';
import * as fromActionsShared from '@shared/store/actions/shared.actions';

@Injectable()
export class RecoveryPasswordEffects {
  @Effect()
  recoveryPassword$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.ActionTypes.RecoveryPassword),
    map((action: fromActions.RecoveryPassword) => action.payload),
    exhaustMap((auth: fromModels.Authenticate) =>
      this._service.recoveryPassword(auth).pipe(
        map(response => new fromActions.RecoveryPasswordSuccess(response)),
        catchError(error => of(new fromActions.RecoveryPasswordFailure(error)))
      )
    )
  );

  @Effect({ dispatch: false })
  recoveryPasswordSuccess$ = this.actions$.pipe(
    ofType(fromActions.ActionTypes.RecoveryPasswordSuccess),
    map((action: fromActions.RecoveryPasswordSuccess) => action.payload),
    tap((response) => {
      this._utils.showDialog();
    })
  );

  @Effect({ dispatch: false })
  recoveryPasswordFailure$ = this.actions$.pipe(
    ofType(fromActions.ActionTypes.RecoveryPasswordFailure),
    map((action: fromActions.RecoveryPasswordFailure) => action.payload),
    tap((message) => {
      this._utils.showDialog();
    })
  );

  constructor(
    private actions$: Actions,
    private _service: fromServices.RecoveryPasswordService,
    private _utils: fromServicesShared.UtilsService,
    private _store: Store<fromStore.RecoveryPasswordState>,
    private _storeShared: Store<fromStoreShared.SharedState>
  ) {}
}
