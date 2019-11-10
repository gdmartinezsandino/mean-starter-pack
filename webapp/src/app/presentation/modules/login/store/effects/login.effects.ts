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

import * as fromServices from '@login/services';
import * as fromStore from '../store';
import * as fromActions from '../actions/login.actions';

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
      this._storeUser.dispatch(new fromStoreUser.UserLogged(response));
      this._store.dispatch(new fromActions.LoginRedirect('dashboard/home'));
    })
  );

  @Effect({ dispatch: false })
  loginFailure$ = this.actions$.pipe(
    ofType(fromActions.ActionTypes.LoginFailure),
    map((action: fromActions.LoginFailure) => action.payload),
    tap((message) => {
      this._utils.showDialog({
        width: '350px',
        data: {
          title: 'Atención',
          message: message
        }
      });
    })
  );

  @Effect({ dispatch: false })
  logout$ = this.actions$.pipe(
    ofType(fromActions.ActionTypes.Logout),
    tap(authed => {
      // dispatch the process on store user
      this._storeUser.dispatch(new fromStoreUser.UserLogout());
      // dispatch the redirect
      this._store.dispatch(new fromActions.LoginRedirect('login'));
    })
  );

  @Effect({ dispatch: false })
  loginRedirect$ = this.actions$.pipe(
    ofType(fromActions.ActionTypes.LoginRedirect),
    map((action: fromActions.LoginRedirect) => action.payload),
    tap((path) => {
      this._storeCore.dispatch(new fromActionsCore.Go({
        path: [path]
      }));
    })
  );

  constructor(
    private actions$: Actions,
    private _service: fromServices.LoginService,
    private _utils: fromServicesShared.UtilsService,
    private _store: Store<fromStore.LoginState>,
    private _storeUser: Store<fromStoreUser.ProfileState>,
    private _storeCore: Store<fromStoreCore.CoreState>,
  ) {}
}
