import { Action } from '@ngrx/store';

import { User, Authenticate } from '@app/models/user';

export enum ActionTypes {
  Register = '[Register] Register',
  Logout = '[Register] Logout',
  RegisterSuccess = '[Register] Register Success',
  RegisterFailure = '[Register] Register Failure',
  RegisterRedirect = '[Register] Register Redirect',
  SetToken = '[Register] Get Token',
}

export class Register implements Action {
  readonly type = ActionTypes.Register;

  constructor(public payload: Authenticate) {}
}

export class SetToken implements Action {
  readonly type = ActionTypes.SetToken;

  constructor(public payload: string) {}
}

export class RegisterSuccess implements Action {
  readonly type = ActionTypes.RegisterSuccess;

  constructor(public payload: any) {}
}

export class RegisterFailure implements Action {
  readonly type = ActionTypes.RegisterFailure;

  constructor(public payload: string) {}
}

export class RegisterRedirect implements Action {
  readonly type = ActionTypes.RegisterRedirect;

  constructor(public payload: string) {}
}

export class Logout implements Action {
  readonly type = ActionTypes.Logout;
}

export type RegisterActions =
  | Register
  | RegisterSuccess
  | SetToken
  | RegisterFailure
  | RegisterRedirect
  | Logout;
