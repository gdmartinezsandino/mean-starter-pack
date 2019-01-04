import { Injectable } from '@angular/core';

import { Action, Store } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { tap, map, mergeMap, exhaustMap, catchError } from 'rxjs/operators';

import { User } from '@app/models/user';

import * as fromServicesShared from '@shared/services';
import * as fromStoreShared from '@shared/store';
import * as fromActionsCore from '@core/store/actions/router.actions';

import * as fromServices from '../../services';
import * as fromStore from '../../store/profile.store';
import * as fromActions from '../../store/actions/profile.actions';

@Injectable()
export class ProfileEffects {
  @Effect()
  userUpdating$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.ProfileActionTypes.UserUpdating),
    map((action: fromActions.UserUpdating) => action.payload),
    exhaustMap((userToUpdate: User) =>
      this._service.updateUser(userToUpdate).pipe(
        map(response => new fromActions.UserUpdated(response.user)),
        catchError(error => of(new fromStoreShared.ErrorAlert(JSON.parse(error._body).message)))
      )
    )
  );

  @Effect({ dispatch: false })
  userUpdated$ = this.actions$.pipe(
    ofType(fromActions.ProfileActionTypes.UserUpdated),
    map((action: fromActions.UserUpdated) => action.payload),
    tap(() => {
      this._utils.showDialog({
        width: '350px',
        data: {
          title: 'Atención',
          message: 'El usuario se ha actualizado correctamente.'
        },
      });
    })
  );

  @Effect()
  activingUser$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.ProfileActionTypes.ActivingUser),
    map((action: fromActions.ActivingUser) => action.payload),
    exhaustMap((user: any) =>
      this._service.activeUser(user).pipe(
        map(response => new fromActions.ActivatedUser(response)),
        catchError(error => of(new fromStoreShared.ErrorAlert(JSON.parse(error._body).message)))
      )
    )
  );

  @Effect({ dispatch: false })
  activatedUser$ = this.actions$.pipe(
    ofType(fromActions.ProfileActionTypes.ActivatedUser),
    map((action: fromActions.ActivatedUser) => action),
    tap((response) => {
      this._utils.showDialog({
        width: '350px',
        data: {
          title: 'Atención',
          message: response.payload.message
        },
        onClose: () => {
          this._store.dispatch(new fromActionsCore.Go({
            path: ['/login'],
          }));
        }
      });
    })
  );

  @Effect()
  updatingPassword$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.ProfileActionTypes.UpdatingPassword),
    map((action: fromActions.UpdatingPassword) => action.payload),
    exhaustMap((userToUpdate: any) =>
      this._service.updatePassword(userToUpdate).pipe(
        map(response => new fromActions.UpdatedPassword(response)),
        catchError(error => of(new fromStoreShared.ErrorAlert(JSON.parse(error._body).message)))
      )
    )
  );

  @Effect({ dispatch: false })
  updatedPassowrd$ = this.actions$.pipe(
    ofType(fromActions.ProfileActionTypes.UpdatedPassword),
    map((action: fromActions.UpdatedPassword) => action),
    tap((response) => {
      this._utils.showDialog({
        width: '350px',
        data: {
          title: 'Atención',
          message: response.payload.message
        },
        onClose: () => {
          this._store.dispatch(new fromActionsCore.Go({
            path: ['/login'],
          }));
        }
      });
    })
  );

  @Effect()
  recoveryPasswordSendingEmail$$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.ProfileActionTypes.RecoveryPasswordSendingEmail),
    map((action: fromActions.RecoveryPasswordSendingEmail) => action.payload),
    exhaustMap((email: any) =>
      this._service.recoveryPassword(email).pipe(
        map(response => new fromActions.RecoveryPasswordSendedEmail(response)),
        catchError(error => of(new fromStoreShared.ErrorAlert(JSON.parse(error._body).message)))
      )
    )
  );

  @Effect({ dispatch: false })
  recoveryPasswordSendedEmail$ = this.actions$.pipe(
    ofType(fromActions.ProfileActionTypes.RecoveryPasswordSendedEmail),
    map((action: fromActions.RecoveryPasswordSendedEmail) => action),
    tap((response) => {
      this._utils.showDialog({
        width: '350px',
        data: {
          title: 'Atención',
          message: response.payload.message
        },
      });
    })
  );

  constructor(
    private actions$: Actions,
    private _service: fromServices.ProfileService,
    private _utils: fromServicesShared.UtilsService,
    private _store: Store<fromStore.ProfileState>
  ) { }
}
