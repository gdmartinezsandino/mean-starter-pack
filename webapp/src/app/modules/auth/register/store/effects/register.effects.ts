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
import * as fromActions from '../actions/register.actions';

import * as fromStoreShared from '@shared/store';
import * as fromActionsShared from '@shared/store/actions/shared.actions';

@Injectable()
export class RegisterEffects {
  @Effect()
  register$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.ActionTypes.Register),
    map((action: fromActions.Register) => action.payload),
    exhaustMap((auth: any) => {
      return this._service.register(auth).pipe(
        map(response => new fromActions.RegisterSuccess(response)),
        catchError(error => of(new fromActions.RegisterFailure(error)))
      )
    })
  );

  @Effect({ dispatch: false })
  registerSuccess$ = this.actions$.pipe(
    ofType(fromActions.ActionTypes.RegisterSuccess),
    map((action: fromActions.RegisterSuccess) => action.payload),
    tap((response) => {
      this._utils.showDialog();
    })
  );

  @Effect({ dispatch: false })
  registerFailure$ = this.actions$.pipe(
    ofType(fromActions.ActionTypes.RegisterFailure),
    map((action: fromActions.RegisterFailure) => action.payload),
    tap((message) => {
      this._utils.showDialog();
    })
  );
  
  constructor(
    private actions$: Actions,
    private _service: fromServices.RegisterService,
    private _utils: fromServicesShared.UtilsService,
    private _store: Store<fromStore.RegisterState>,
    private _storeUser: Store<fromStoreUser.ProfileState>,
    private _storeCore: Store<fromStoreCore.CoreState>,
    private _storeShared: Store<fromStoreShared.SharedState>
  ) {}
}
