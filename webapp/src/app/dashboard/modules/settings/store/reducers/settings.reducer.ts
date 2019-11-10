import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromStore from '../settings.store';
import * as fromActions from '../actions/settings.actions';

export function SettingsReducer(state = fromStore.initialState, action: fromActions.ActionsSettings): fromStore.SettingsState {
  switch (action.type) {
    case fromActions.SettingsActionTypes.LanguageSelected: {
      return { ...state, ...{
          language: action.payload,
        }};
    }

    case fromActions.SettingsActionTypes.ModuleSelected: {
      return { ...state, ...{
          module: action.payload,
        }};
    }

    default: {
      return state;
    }
  }
}

const exportLoading = (state: fromStore.SettingsState) => state.isLoading;
const exportLanguage = (state: fromStore.SettingsState) => state.language;
const exportModule = (state: fromStore.SettingsState) => state.module;

export const selectSettingsState = createFeatureSelector<fromStore.SettingsState>('settings');

export const getLoading = createSelector(selectSettingsState, exportLoading);
export const getLanguage = createSelector(selectSettingsState, exportLanguage);
export const getModule = createSelector(selectSettingsState, exportModule);
