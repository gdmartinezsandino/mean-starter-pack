import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { Observable ,  of } from 'rxjs';
import { tap, map, mergeMap, exhaustMap, catchError } from 'rxjs/operators';

import * as fromServices from '@shared/services';
import * as fromActions from '../actions/shared.actions';

@Injectable()
export class SharedEffects {
  @Effect()
  errorAlert$ = this.actions$.pipe(
    ofType(fromActions.SharedActionTypes.ErrorAlert),
    map((action: fromActions.ErrorAlert) => action.payload),
    tap((message) => {
      this._utils.showDialog({
        width: '250px',
        data: {
          title: 'Atención',
          message: message
        }
      });
    })
  );

  constructor(
    private actions$: Actions,
    private _utils: fromServices.UtilsService
  ) { }
}
