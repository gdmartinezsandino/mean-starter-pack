import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromStore from '../store';
import * as fromActions from '../actions/change-password.actions';

export function ChangePasswordReducer(state = fromStore.initialState, action: fromActions.ChangePasswordActions): fromStore.ChangePasswordState {
    switch (action.type) {
    case fromActions.ActionTypes.ChangePassword: {
      return { ...state, ...{
        isLoading: true,
      }};
    }

    case fromActions.ActionTypes.ChangePasswordSuccess: {
      return { ...state, ...{
        loggedIn: true,
        isLoading: false,
        user: action.payload.user,
      }};
    }

    case fromActions.ActionTypes.ChangePasswordFailure: {
      return { ...state, ...{
        isLoading: false,
        error: action.payload,
      }};
    }

    case fromActions.ActionTypes.SetToken: {
      return { ...state, ...{
        token: action.payload,
      }};
    }

    case fromActions.ActionTypes.Logout: {
      return fromStore.initialState;
    }

    default: {
      return state;
    }
  }
}

const exportLoading = (state: fromStore.ChangePasswordState) => state.isLoading;
const exportToken = (state: fromStore.ChangePasswordState) => state.token;
const exportLoggedIn = (state: fromStore.ChangePasswordState) => state.loggedIn;
const exportInitialized = (state: fromStore.ChangePasswordState) => state.initialized;
const exportError = (state: fromStore.ChangePasswordState) => state.error;
const selectChangePasswordState = createFeatureSelector<fromStore.ChangePasswordState>('change-password');

export const getLoading = createSelector(selectChangePasswordState, exportLoading);
export const getLoggedIn = createSelector(selectChangePasswordState, exportLoggedIn);
export const getToken = createSelector(selectChangePasswordState, exportToken);
export const getInitialized = createSelector(selectChangePasswordState, exportInitialized);
export const getError = createSelector(selectChangePasswordState, exportError);
