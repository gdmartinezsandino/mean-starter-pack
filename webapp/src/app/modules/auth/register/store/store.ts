import * as fromModels from '@app/models';

export interface RegisterState {
  isLoading: boolean;
  loggedIn: boolean;
  user?: fromModels.User;
  token?: string;
  initialized?: boolean;
  error?: string;
}

export const initialState: RegisterState = {
  isLoading: false,
  loggedIn: false,
};
