import { Action } from '@ngrx/store';

import { User, Authenticate } from '@app/models/user';

export enum ActionTypes {
  RecoveryPassword = '[RecoveryPassword] RecoveryPassword',
  Logout = '[RecoveryPassword] Logout',
  RecoveryPasswordSuccess = '[RecoveryPassword] RecoveryPassword Success',
  RecoveryPasswordFailure = '[RecoveryPassword] RecoveryPassword Failure',
  RecoveryPasswordRedirect = '[RecoveryPassword] RecoveryPassword Redirect',
}

export class RecoveryPassword implements Action {
  readonly type = ActionTypes.RecoveryPassword;

  constructor(public payload: Authenticate) {}
}

export class RecoveryPasswordSuccess implements Action {
  readonly type = ActionTypes.RecoveryPasswordSuccess;

  constructor(public payload: any) {}
}

export class RecoveryPasswordFailure implements Action {
  readonly type = ActionTypes.RecoveryPasswordFailure;

  constructor(public payload: string) {}
}

export class RecoveryPasswordRedirect implements Action {
  readonly type = ActionTypes.RecoveryPasswordRedirect;

  constructor(public payload: string) {}
}

export class Logout implements Action {
  readonly type = ActionTypes.Logout;
}

export type RecoveryPasswordActions =
  | RecoveryPassword
  | RecoveryPasswordSuccess
  | RecoveryPasswordFailure
  | RecoveryPasswordRedirect
  | Logout;
