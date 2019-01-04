import { Action } from '@ngrx/store';

import * as fromModels from '@app/models';

export enum GeneralActionTypes {
  GetPosts = '[General] GetPosts',
  SetPosts = '[General] SetPosts',
  AddingPost = '[General] AddingPost',
  AddingPostResult = '[General] AddingPostResult',
  AddedPostSuccess = '[General] AddedPostSuccess',
  AddedPostFailure = '[General] AddedPostFailure',
  UpdatingPost = '[General] UpdatingPost',
  UpdatingPostResult = '[General] UpdatingPostResult',
  UpdatedPostSuccess = '[General] UpdatedPostSuccess',
  UpdatedPostFailure = '[General] UpdatedPostFailure',
  DeletingPost = '[General] DeletingPost',
  DeletingPostResult = '[General] DeletingPostResult',
  DeletedPostSuccess = '[General] DeletedPostSuccess',
  DeletedPostFailure = '[General] DeletedPostFailure',
}

export class GetPosts implements Action {
  readonly type = GeneralActionTypes.GetPosts;
  constructor(public payload: any) {}
}

export class SetPosts implements Action {
  readonly type = GeneralActionTypes.SetPosts;

  constructor(public payload: Array<fromModels.Post>) {}
}


export class AddingPost implements Action {
  readonly type = GeneralActionTypes.AddingPost;

  constructor(public payload: any) {}
}

export class AddingPostResult implements Action {
  readonly type = GeneralActionTypes.AddingPostResult;

  constructor(public payload: any) {}
}

export class AddedPostSuccess implements Action {
  readonly type = GeneralActionTypes.AddedPostSuccess;

  constructor(public payload: any) {}
}

export class AddedPostFailure implements Action {
  readonly type = GeneralActionTypes.AddedPostFailure;

  constructor(public payload: any) {}
}


export class UpdatingPost implements Action {
  readonly type = GeneralActionTypes.UpdatingPost;

  constructor(public payload: any) {}
}

export class UpdatingPostResult implements Action {
  readonly type = GeneralActionTypes.UpdatingPostResult;

  constructor(public payload: any) {}
}

export class UpdatedPostSuccess implements Action {
  readonly type = GeneralActionTypes.UpdatedPostSuccess;

  constructor(public payload: any) {}
}

export class UpdatedPostFailure implements Action {
  readonly type = GeneralActionTypes.UpdatedPostFailure;

  constructor(public payload: any) {}
}


export class DeletingPost implements Action {
  readonly type = GeneralActionTypes.DeletingPost;

  constructor(public payload: any) {}
}

export class DeletingPostResult implements Action {
  readonly type = GeneralActionTypes.DeletingPostResult;

  constructor(public payload: any) {}
}

export class DeletedPostSuccess implements Action {
  readonly type = GeneralActionTypes.DeletedPostSuccess;

  constructor(public payload: any) {}
}

export class DeletedPostFailure implements Action {
  readonly type = GeneralActionTypes.DeletedPostFailure;

  constructor(public payload: any) {}
}

export type ActionsGeneral =
  | GetPosts
  | SetPosts
  | AddingPost
  | AddingPostResult
  | AddedPostSuccess
  | AddedPostFailure
  | UpdatingPost
  | UpdatingPostResult
  | UpdatedPostSuccess
  | UpdatedPostFailure
  | DeletingPost
  | DeletingPostResult
  | DeletedPostSuccess
  | DeletedPostFailure;
