import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';

import { Observable ,  of } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import { tap, map, mergeMap, exhaustMap, catchError } from 'rxjs/operators';

import * as fromServices from '@shared/services';
import * as fromActions from '../actions/shared.actions';

import * as fromStoreShared from '@shared/store';
import * as fromActionsShared from '@shared/store/actions/shared.actions';

@Injectable()
export class SharedEffects {
  @Effect()
  errorAlert$ = this.actions$.pipe(
    ofType(fromActions.SharedActionTypes.ErrorAlert),
    map((action: fromActions.ErrorAlert) => action.payload),
    tap((message) => {
      // CODE
    })
  );

  constructor(
    private actions$: Actions,
    private _utils: fromServices.UtilsService,
    private _storeShared: Store<fromStoreShared.SharedState>
  ) { }
}
