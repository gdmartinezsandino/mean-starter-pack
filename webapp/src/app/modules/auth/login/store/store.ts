import * as fromModels from '@app/models';

export interface LoginState {
  isLoading: boolean;
  loggedIn: boolean;
  user?: fromModels.User;
  token?: string;
  initialized?: boolean;
  error?: string;
}

export const initialState: LoginState = {
  isLoading: false,
  loggedIn: false,
};
