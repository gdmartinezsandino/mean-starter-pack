import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromReducers from '@app/dashboard/modules/general/store/reducers/general.reducer';
import * as fromEffects from '@app/dashboard/modules/general/store/effects/general.effects';
import * as fromGeneral from '@app/dashboard/modules/general/services';

@NgModule({
  imports: [
    StoreModule.forFeature('general', fromReducers.GeneralReducer),
    EffectsModule.forFeature([fromEffects.GeneralEffects]),
  ],
  providers: [
    ...fromGeneral.services,
  ]
})
export class GeneralStoreModule { }
