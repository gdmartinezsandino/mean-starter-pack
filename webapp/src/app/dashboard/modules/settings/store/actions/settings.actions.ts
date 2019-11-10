import { Action } from '@ngrx/store';

import * as fromModels from '@app/models';

export enum SettingsActionTypes {
  LanguageSelected = '[Settings] LanguageSelected',
  ModuleSelected = '[Settings] ModuleSelected',
}

export class LanguageSelected implements Action {
  readonly type = SettingsActionTypes.LanguageSelected;

  constructor(public payload: any) {}
}

export class ModuleSelected implements Action {
  readonly type = SettingsActionTypes.ModuleSelected;

  constructor(public payload: any) {}
}

export type ActionsSettings =
  | LanguageSelected
  | ModuleSelected;
