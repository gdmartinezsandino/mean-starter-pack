import * as fromModels from '@app/models';

export interface GeneralState {
  isLoading: boolean;
  posts?: Array<fromModels.Post>;
}

export const initialState: GeneralState = {
  isLoading: false,
};
