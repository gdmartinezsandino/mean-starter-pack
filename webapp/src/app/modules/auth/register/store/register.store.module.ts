import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import * as fromReducers from './reducers/register.reducer';
import * as fromEffects from './effects/register.effects';
import * as fromServices from '../services';

@NgModule({
  imports: [
    StoreModule.forFeature('register', fromReducers.RegisterReducer),
    EffectsModule.forFeature([fromEffects.RegisterEffects]),
  ],
  providers: [...fromServices.services]
})
export class RegisterStoreModule { }
