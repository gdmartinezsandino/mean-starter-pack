import * as fromModels from '@app/models';

export interface ChangePasswordState {
  isLoading: boolean;
  loggedIn: boolean;
  user?: fromModels.User;
  token?: string;
  initialized?: boolean;
  error?: string;
}

export const initialState: ChangePasswordState = {
  isLoading: false,
  loggedIn: false,
};
