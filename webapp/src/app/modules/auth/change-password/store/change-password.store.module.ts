import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import * as fromReducers from './reducers/change-password.reducer';
import * as fromEffects from './effects/change-password.effects';
import * as fromServices from '../services';

@NgModule({
  imports: [
    StoreModule.forFeature('change-password', fromReducers.ChangePasswordReducer),
    EffectsModule.forFeature([fromEffects.ChangePasswordEffects]),
  ],
  providers: [...fromServices.services]
})
export class ChangePasswordStoreModule { }
