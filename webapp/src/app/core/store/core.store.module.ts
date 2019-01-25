import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { environment } from '@environments/environment';

import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { localStorageSync } from 'ngrx-store-localstorage';
import { storeLogger } from 'ngrx-store-logger';
import { storeFreeze } from 'ngrx-store-freeze';

import { SharedEffects } from '@shared/store';
import * as fromStoreGeneral from '@dashboard/modules/general/store';
import * as fromStoreLogin from '@login/store';
import * as fromStoreUser from '@profile/store';

import { CoreState, CoreReducers } from './store';
import { CustomRouterStateSerializer } from './reducers/router.reducer';
import { RouterEffects } from './effects/router.effects';

export const StoreEffects = [
  RouterEffects,
  SharedEffects,
];

import { keys } from 'ramda';

function logger(reducer: ActionReducer<CoreState>): ActionReducer<CoreState> {
  return storeLogger()(reducer);
}

function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: keys(CoreReducers).concat([
    'login', 'user', 'general'
  ]), rehydrate: true, storage: sessionStorage})(reducer);
}

const metaReducers: MetaReducer<CoreState>[] = !environment.production
  ? [logger, storeFreeze, localStorageSyncReducer]
  : [localStorageSyncReducer];

@NgModule({
  imports: [
    CommonModule,
    environment.production ? [] : StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    }),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
    }),
    StoreModule.forRoot(CoreReducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      name: 'application-name',
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot(StoreEffects),
    fromStoreLogin.LoginStoreModule,
    fromStoreUser.UserStoreModule,
    fromStoreGeneral.GeneralStoreModule
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer },
  ],
})
export class CoreStoreModule { }
