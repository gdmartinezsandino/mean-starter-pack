import { Injectable } from '@angular/core';

import { Action, Store } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { Observable, of } from 'rxjs';
import { tap, map, mergeMap, exhaustMap, catchError } from 'rxjs/operators';

import { User } from '@app/models/user';

import * as fromServicesShared from '@shared/services';
import * as fromActionsCore from '@core/store/actions/router.actions';

import * as fromServices from '../../services';
import * as fromStore from '../../store/profile.store';
import * as fromActions from '../../store/actions/profile.actions';

import * as fromStoreShared from '@shared/store';
import * as fromActionsShared from '@shared/store/actions/shared.actions';

@Injectable()
export class ProfileEffects {
  @Effect()
  userUpdating$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.ProfileActionTypes.UserUpdating),
    map((action: fromActions.UserUpdating) => action.payload),
    exhaustMap((userToUpdate: User) =>
      this._service.updateUser(userToUpdate).pipe(
        map((response: any) => new fromActions.UserUpdated(response.data)),
        catchError(error => of(new fromStoreShared.ErrorAlert(`
          ${this.renderErrors(error.errors)}
          <p class="mt-10">${error.message}</p>
        `)))
      )
    )
  );

  @Effect({ dispatch: false })
  userUpdated$ = this.actions$.pipe(
    ofType(fromActions.ProfileActionTypes.UserUpdated),
    map((action: fromActions.UserUpdated) => action.payload),
    tap(() => {
      this._utils.showDialog();
    })
  );

  constructor(
    private actions$: Actions,
    private _service: fromServices.ProfileService,
    private _utils: fromServicesShared.UtilsService,
    private _store: Store<fromStore.ProfileState>,
    private _storeShared: Store<fromStoreShared.SharedState>
  ) { }

  renderErrors(errors) {
    let template = `<p class="mt-10"><strong>Errores:</strong>`;
    template += `<ul class="mt-10">`;
    errors.forEach(error => {
      template += `<li><p>${error[0]}</p></li>`;
    });
    template += `</ul>`;
    return template;
  }
}
