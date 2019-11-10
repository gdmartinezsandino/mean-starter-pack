import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromReducers from './reducers/settings.reducer';
import * as fromEffects from './effects/settings.effects';
import * as fromSettings from '../services';

@NgModule({
  imports: [
    StoreModule.forFeature('settings', fromReducers.SettingsReducer),
    EffectsModule.forFeature([fromEffects.SettingsEffects]),
  ],
  providers: [
    ...fromSettings.services,
  ]
})
export class SettingsStoreModule { }
