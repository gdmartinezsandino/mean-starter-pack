import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromStore from '../profile.store';
import * as fromActions from '../actions/profile.actions';

export function ProfileReducer(state = fromStore.initialState, action: fromActions.ActionsProfile): fromStore.ProfileState {
  switch (action.type) {
    case fromActions.ProfileActionTypes.UserLogged: {
      return { ...state, ...{
        user: action.payload.user,
        token: action.payload.token,
      }};
    }

    case fromActions.ProfileActionTypes.UserUpdating: {
      return { ...state, ...{
          isLoading: true,
        }};
    }

    case fromActions.ProfileActionTypes.UserUpdated: {
      return { ...state, ...{
        user: action.payload,
        isLoading: false,
      }};
    }

    case fromActions.ProfileActionTypes.ActivingUser: {
      return { ...state, ...{
        isLoading: true
      }};
    }

    case fromActions.ProfileActionTypes.ActivatedUser: {
      return { ...state, ...{
          isLoading: false,
        }};
    }

    case fromActions.ProfileActionTypes.RecoveryPasswordSendingEmail: {
      return { ...state, ...{
        isLoading: true
      }};
    }

    case fromActions.ProfileActionTypes.RecoveryPasswordSendedEmail: {
      return { ...state, ...{
          isLoading: false,
        }};
    }

    case fromActions.ProfileActionTypes.UserLogout: {
      return fromStore.initialState;
    }

    default: {
      return state;
    }
  }
}

const exportLoading = (state: fromStore.ProfileState) => state.isLoading;
const exportUser = (state: fromStore.ProfileState) => state.user;
const exportToken = (state: fromStore.ProfileState) => state.token;
const exportProfileState = (state: fromStore.ProfileState) => state.user.state;

export const selectProfileState = createFeatureSelector<fromStore.ProfileState>('user');

export const getLoading = createSelector(selectProfileState, exportLoading);
export const getUser = createSelector(selectProfileState, exportUser);
export const getToken = createSelector(selectProfileState, exportToken);
export const getProfileState = createSelector(selectProfileState, exportProfileState);
