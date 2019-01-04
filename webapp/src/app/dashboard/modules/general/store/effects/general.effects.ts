import { Injectable } from '@angular/core';

import { Action, Store } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { tap, map, mergeMap, exhaustMap, catchError } from 'rxjs/operators';

import * as fromModels from '@app/models';

import * as fromServicesShared from '@shared/services';
import * as fromStoreShared from '@shared/store';

import * as fromServices from '@app/dashboard/modules/general/services';
import * as fromStore from '@app/dashboard/modules/general/store/general.store';
import * as fromActions from '@app/dashboard/modules/general/store/actions/general.actions';

@Injectable()
export class GeneralEffects {
  @Effect()
  getPosts$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.GeneralActionTypes.GetPosts),
    map((action: fromActions.GetPosts) => action),
    exhaustMap(() =>
      this._service.getPosts().pipe(
        map(response => new fromActions.SetPosts(response.posts)),
        catchError(error => of(new fromStoreShared.ErrorAlert(JSON.parse(error._body).message)))
      )
    )
  );

  @Effect()
  addingPosts$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.GeneralActionTypes.AddingPost),
    map((action: fromActions.AddingPost) => action.payload),
    exhaustMap((post: fromModels.Post) =>
      this._service.addPost(post).pipe(
        map(response => new fromActions.AddingPostResult(response)),
        catchError(error => of(new fromStoreShared.ErrorAlert(JSON.parse(error._body).message)))
      )
    )
  );

  @Effect({ dispatch: false })
  addingPostResult$ = this.actions$.pipe(
    ofType(fromActions.GeneralActionTypes.AddingPostResult),
    map((action: fromActions.AddingPostResult) => action.payload),
    tap((response: any) => {
      if (response.status === 200) {
        this._store.dispatch(new fromActions.AddedPostSuccess(response.message));
      } else {
        this._store.dispatch(new fromActions.AddedPostFailure(response.message));
      }
    })
  );

  @Effect({ dispatch: false })
  addedPostSuccess$ = this.actions$.pipe(
    ofType(fromActions.GeneralActionTypes.AddedPostSuccess),
    map((action: fromActions.AddedPostSuccess) => action.payload),
    tap((message: any) => {
      this._utils.showDialog({
        width: '350px',
        data: {
          title: 'Información',
          message: message
        }
      });
    })
  );

  @Effect({ dispatch: false })
  addedPostFailure$ = this.actions$.pipe(
    ofType(fromActions.GeneralActionTypes.AddedPostFailure),
    map((action: fromActions.AddedPostFailure) => action.payload),
    tap((message: any) => {
      this._utils.showDialog({
        width: '350px',
        data: {
          title: 'Alerta',
          message: message
        }
      });
    })
  );


  @Effect()
  updatingPosts$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.GeneralActionTypes.UpdatingPost),
    map((action: fromActions.UpdatingPost) => action.payload),
    exhaustMap((post: fromModels.Post) =>
      this._service.updatePost(post).pipe(
        map(response => new fromActions.UpdatingPostResult(response)),
        catchError(error => of(new fromStoreShared.ErrorAlert(JSON.parse(error._body).message)))
      )
    )
  );

  @Effect({ dispatch: false })
  updatingPostResult$ = this.actions$.pipe(
    ofType(fromActions.GeneralActionTypes.UpdatingPostResult),
    map((action: fromActions.UpdatingPostResult) => action.payload),
    tap((response: any) => {
      if (response.status === 200) {
        this._store.dispatch(new fromActions.UpdatedPostSuccess(response.message));
      } else {
        this._store.dispatch(new fromActions.UpdatedPostFailure(response.message));
      }
    })
  );

  @Effect({ dispatch: false })
  updatedPostSuccess$ = this.actions$.pipe(
    ofType(fromActions.GeneralActionTypes.UpdatedPostSuccess),
    map((action: fromActions.UpdatedPostSuccess) => action.payload),
    tap((message: any) => {
      this._utils.showDialog({
        width: '350px',
        data: {
          title: 'Información',
          message: message
        }
      });
    })
  );

  @Effect({ dispatch: false })
  updatedPostFailure$ = this.actions$.pipe(
    ofType(fromActions.GeneralActionTypes.UpdatedPostFailure),
    map((action: fromActions.UpdatedPostFailure) => action.payload),
    tap((message: any) => {
      this._utils.showDialog({
        width: '350px',
        data: {
          title: 'Alerta',
          message: message
        }
      });
    })
  );


  @Effect()
  deletingPosts$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.GeneralActionTypes.DeletingPost),
    map((action: fromActions.DeletingPost) => action.payload),
    exhaustMap((post: fromModels.Post) =>
      this._service.deletePost(post).pipe(
        map(response => new fromActions.DeletingPostResult(response)),
        catchError(error => of(new fromStoreShared.ErrorAlert(JSON.parse(error._body).message)))
      )
    )
  );

  @Effect({ dispatch: false })
  deletingPostResult$ = this.actions$.pipe(
    ofType(fromActions.GeneralActionTypes.DeletingPostResult),
    map((action: fromActions.DeletingPostResult) => action.payload),
    tap((response: any) => {
      if (response.status === 200) {
        this._store.dispatch(new fromActions.DeletedPostSuccess(response.message));
      } else {
        this._store.dispatch(new fromActions.DeletedPostFailure(response.message));
      }
    })
  );

  @Effect({ dispatch: false })
  deletedPostSuccess$ = this.actions$.pipe(
    ofType(fromActions.GeneralActionTypes.DeletedPostSuccess),
    map((action: fromActions.DeletedPostSuccess) => action.payload),
    tap((message: any) => {
      this._utils.showDialog({
        width: '350px',
        data: {
          title: 'Información',
          message: message
        }
      });
    })
  );

  @Effect({ dispatch: false })
  deletedPostFailure$ = this.actions$.pipe(
    ofType(fromActions.GeneralActionTypes.DeletedPostFailure),
    map((action: fromActions.DeletedPostFailure) => action.payload),
    tap((message: any) => {
      this._utils.showDialog({
        width: '350px',
        data: {
          title: 'Alerta',
          message: message
        }
      });
    })
  );

  constructor(
    private actions$: Actions,
    private _service: fromServices.GeneralService,
    private _utils: fromServicesShared.UtilsService,
    private _store: Store<fromStore.GeneralState>,
  ) { }
}
