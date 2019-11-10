import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { tap, map, exhaustMap, catchError } from 'rxjs/operators';
import { Observable ,  of } from 'rxjs';
import { Action, Store } from '@ngrx/store';

import * as RouterActions from '@core/store/actions/router.actions';
import * as fromStore from '@core/store/store';
import * as fromServices from '@core/services';
import * as fromStoreShared from '@shared/store';
import * as fromServicesShared from '@shared/services';

@Injectable()
export class RouterEffects {
  @Effect({ dispatch: false })
  navigate$ = this.actions$.pipe(
    ofType(RouterActions.GO),
    map((action: RouterActions.Go) => action.payload),
    tap(({ path, query: queryParams, extras}) => this.router.navigate(path, { queryParams, ...extras }))
  );

  @Effect({ dispatch: false })
  navigateForward$ = this.actions$.pipe(
    ofType(RouterActions.FORWARD),
    map((action: RouterActions.Forward) => action),
    tap(() => this.location.forward())
  );

  @Effect({ dispatch: false })
  navigateBack$ = this.actions$.pipe(
    ofType(RouterActions.BACK),
    map((action: RouterActions.Back) => action),
    tap(() => this.location.forward())
  );

  @Effect()
  unsuscribe$: Observable<Action> = this.actions$.pipe(
    ofType(RouterActions.UNSUSCRIBE),
    map((action: RouterActions.Unsuscribe) => action.payload),
    exhaustMap((value: any) =>
      this._service.unsuscribe(value).pipe(
        map((response: any) => new RouterActions.Unsuscribed(response)),
        catchError(error => of(new fromStoreShared.ErrorAlert(error)))
      )
    )
  );

  @Effect({ dispatch: false })
  unsuscribed$ = this.actions$.pipe(
    ofType(RouterActions.UNSUSCRIBED),
    map((action: RouterActions.Unsuscribed) => action.payload),
    tap((response: any) => {
      this._utils.showDialog({
        width: '450px',
        data: {
          title: 'Atención',
          message: 'Te has desuscrito correctamente'
        },
        onClose: () => {
          this._store.dispatch(new RouterActions.Go({
            path: [`login`]
          }));
        }
      });
    })
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private location: Location,
    private _service: fromServices.CoreService,
    private _store: Store<fromStore.CoreState>,
    private _utils: fromServicesShared.UtilsService,
  ) { }
}
