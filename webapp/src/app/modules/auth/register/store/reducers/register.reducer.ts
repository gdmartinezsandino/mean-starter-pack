import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromStore from '../store';
import * as fromActions from '../actions/register.actions';

export function RegisterReducer(state = fromStore.initialState, action: fromActions.RegisterActions): fromStore.RegisterState {
    switch (action.type) {
    case fromActions.ActionTypes.Register: {
      return { ...state, ...{
        isLoading: true,
      }};
    }

    case fromActions.ActionTypes.RegisterSuccess: {
      return { ...state, ...{
        loggedIn: true,
        isLoading: false,
        user: action.payload.user,
      }};
    }

    case fromActions.ActionTypes.RegisterFailure: {
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

const exportLoading = (state: fromStore.RegisterState) => state.isLoading;
const exportToken = (state: fromStore.RegisterState) => state.token;
const exportLoggedIn = (state: fromStore.RegisterState) => state.loggedIn;
const exportInitialized = (state: fromStore.RegisterState) => state.initialized;
const exportError = (state: fromStore.RegisterState) => state.error;
const selectRegisterState = createFeatureSelector<fromStore.RegisterState>('register');

export const getLoading = createSelector(selectRegisterState, exportLoading);
export const getLoggedIn = createSelector(selectRegisterState, exportLoggedIn);
export const getToken = createSelector(selectRegisterState, exportToken);
export const getInitialized = createSelector(selectRegisterState, exportInitialized);
export const getError = createSelector(selectRegisterState, exportError);
