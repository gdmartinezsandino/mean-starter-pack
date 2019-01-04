import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromStore from '../general.store';
import * as fromActions from '../actions/general.actions';

export function GeneralReducer(state = fromStore.initialState, action: fromActions.ActionsGeneral): fromStore.GeneralState {
  switch (action.type) {
    case fromActions.GeneralActionTypes.GetPosts: {
      return { ...state, ...{
          isLoading: true
        }};
    }

    case fromActions.GeneralActionTypes.SetPosts: {
      return { ...state, ...{
          isLoading: false,
          posts: action.payload,
        }};
    }

    case fromActions.GeneralActionTypes.AddingPost ||
         fromActions.GeneralActionTypes.UpdatingPost ||
         fromActions.GeneralActionTypes.DeletingPost : {
      return { ...state, ...{
          isLoading: true,
        }};
    }

    case fromActions.GeneralActionTypes.AddedPostSuccess ||
         fromActions.GeneralActionTypes.AddedPostFailure ||
         fromActions.GeneralActionTypes.UpdatedPostSuccess ||
         fromActions.GeneralActionTypes.UpdatedPostFailure ||
         fromActions.GeneralActionTypes.DeletedPostSuccess ||
         fromActions.GeneralActionTypes.DeletedPostFailure : {
      return { ...state, ...{
          isLoading: false,
        }};
    }

    default: {
      return state;
    }
  }
}

const exportLoading = (state: fromStore.GeneralState) => state.isLoading;
const exportPosts = (state: fromStore.GeneralState) => state.posts;

export const selectGeneralState = createFeatureSelector<fromStore.GeneralState>('general');

export const getLoading = createSelector(selectGeneralState, exportLoading);
export const getPosts = createSelector(selectGeneralState, exportPosts);
