import { Action } from '@ngrx/store';

import { User, Authenticate } from '@app/models/user';

export enum ActionTypes {
  ChangePassword = '[ChangePassword] ChangePassword',
  Logout = '[ChangePassword] Logout',
  ChangePasswordSuccess = '[ChangePassword] ChangePassword Success',
  ChangePasswordFailure = '[ChangePassword] ChangePassword Failure',
  ChangePasswordRedirect = '[ChangePassword] ChangePassword Redirect',
  SetToken = '[ChangePassword] Get Token',
}

export class ChangePassword implements Action {
  readonly type = ActionTypes.ChangePassword;

  constructor(public payload: Authenticate) {}
}

export class SetToken implements Action {
  readonly type = ActionTypes.SetToken;

  constructor(public payload: string) {}
}

export class ChangePasswordSuccess implements Action {
  readonly type = ActionTypes.ChangePasswordSuccess;

  constructor(public payload: any) {}
}

export class ChangePasswordFailure implements Action {
  readonly type = ActionTypes.ChangePasswordFailure;

  constructor(public payload: string) {}
}

export class ChangePasswordRedirect implements Action {
  readonly type = ActionTypes.ChangePasswordRedirect;

  constructor(public payload: string) {}
}

export class Logout implements Action {
  readonly type = ActionTypes.Logout;
}

export type ChangePasswordActions =
  | ChangePassword
  | ChangePasswordSuccess
  | SetToken
  | ChangePasswordFailure
  | ChangePasswordRedirect
  | Logout;
