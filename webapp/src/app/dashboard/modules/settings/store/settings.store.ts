import * as fromModels from '@app/models';

export interface SettingsState {
  isLoading: boolean;
  module?: string;
  language: string;
}

export const initialState: SettingsState = {
  isLoading: false,
  language: 'en',
  module: 'commercial'
};
