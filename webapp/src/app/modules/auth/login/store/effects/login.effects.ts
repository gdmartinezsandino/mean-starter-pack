import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Action, Store } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { Observable,  of } from 'rxjs';
import { tap, map, mergeMap, exhaustMap, catchError } from 'rxjs/operators';

import * as fromModels from '@app/models';

import * as fromServicesShared from '@shared/services';
import * as fromStoreShared from '@shared/store';
import * as fromActionsShared from '@shared/store/actions/shared.actions';
import * as fromStoreCore from '@core/store/store';
import * as fromActionsCore from '@app/core/store/actions/router.actions';
import * as fromStoreProfile from '@profile/store';

import * as fromServices from '@login/services';
import * as fromStore from '../store';
import * as fromActions from '../actions/login.actions';

declare var componentHandler: any;

@Injectable()
export class LoginEffects {
  @Effect()
  login$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.ActionTypes.Login),
    map((action: fromActions.Login) => action.payload),
    exhaustMap((auth: fromModels.Authenticate) =>
      this._service.login(auth).pipe(
        map(response => new fromActions.LoginSuccess(response)),
        catchError(error => of(new fromActions.LoginFailure(error)))
      )
    )
  );

  @Effect({ dispatch: false })
  loginSuccess$ = this.actions$.pipe(
    ofType(fromActions.ActionTypes.LoginSuccess),
    map((action: fromActions.LoginSuccess) => action.payload),
    tap((response) => {
      this._storeProfile.dispatch(new fromStoreProfile.UserLogged(response));

      this._storeCore.dispatch(new fromActionsCore.Go({
        path: ['']
      }));
    })
  );

  @Effect({ dispatch: false })
  loginFailure$ = this.actions$.pipe(
    ofType(fromActions.ActionTypes.LoginFailure),
    map((action: fromActions.LoginFailure) => action.payload),
    tap((message) => {
      const content = {
        title: 'Atención',
        message: 'El usuario y/o la contraseña son invalidos.',
        modal: {
          alert: true
        }
      }
      
      this._utils.showDialog();
    })
  );

  @Effect({ dispatch: false })
  logout$ = this.actions$.pipe(
    ofType(fromActions.ActionTypes.Logout),
    tap(authed => {
      this._storeCore.dispatch(new fromActionsCore.Go({
        path: ['']
      }));
    })
  );

  constructor(
    private actions$: Actions,
    private _service: fromServices.LoginService,
    private _utils: fromServicesShared.UtilsService,
    private _store: Store<fromStore.LoginState>,
    private _storeProfile: Store<fromStoreProfile.ProfileState>,
    private _storeCore: Store<fromStoreCore.CoreState>,
    private _storeShared: Store<fromStoreShared.SharedState>
  ) {}
}
