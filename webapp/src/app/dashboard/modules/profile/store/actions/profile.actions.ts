import { Action } from '@ngrx/store';

import { User} from '@app/models';

export enum ProfileActionTypes {
  UserLogged = '[Profile] UserLogged',
  UserUpdating = '[Profile] UserUpdating',
  UserUpdated = '[Profile] UserUpdated',
  UpdatingPassword = '[Profile] UpdatingPassword',
  UpdatedPassword = '[Profile] UpdatedPassword',
  ActivingUser = '[Profile] ActivingUser',
  ActivatedUser = '[Profile] ActivatedUser',
  UserLogout = '[Profile] UserLogout',
  RecoveryPasswordSendingEmail = '[Profile] RecoveryPasswordSendingEmail',
  RecoveryPasswordSendedEmail = '[Profile] RecoveryPasswordSendedEmail',
}

export class UserLogged implements Action {
  readonly type = ProfileActionTypes.UserLogged;

  constructor(public payload: any) {}
}

export class UserUpdating implements Action {
  readonly type = ProfileActionTypes.UserUpdating;

  constructor(public payload: User) {}
}

export class UserUpdated implements Action {
  readonly type = ProfileActionTypes.UserUpdated;

  constructor(public payload: User) {}
}

export class ActivingUser implements Action {
  readonly type = ProfileActionTypes.ActivingUser;

  constructor(public payload: any) {}
}

export class ActivatedUser implements Action {
  readonly type = ProfileActionTypes.ActivatedUser;

  constructor(public payload: any) {}
}

export class UpdatingPassword implements Action {
  readonly type = ProfileActionTypes.UpdatingPassword;

  constructor(public payload: any) {}
}

export class UpdatedPassword implements Action {
  readonly type = ProfileActionTypes.UpdatedPassword;

  constructor(public payload: any) {}
}

export class RecoveryPasswordSendingEmail implements Action {
  readonly type = ProfileActionTypes.RecoveryPasswordSendingEmail;

  constructor(public payload: any) {}
}

export class RecoveryPasswordSendedEmail implements Action {
  readonly type = ProfileActionTypes.RecoveryPasswordSendedEmail;

  constructor(public payload: any) {}
}

export class UserLogout implements Action {
  readonly type = ProfileActionTypes.UserLogout;
}

export type ActionsProfile =
  | UserLogged
  | UserUpdating
  | UserUpdated
  | ActivingUser
  | ActivatedUser
  | RecoveryPasswordSendingEmail
  | RecoveryPasswordSendedEmail
  | UpdatingPassword
  | UpdatedPassword
  | UserLogout;
