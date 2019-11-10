import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { SharedModule, TranslationsService } from '@shared/index';

import { CoreRouting } from './core.routing';
import * as fromComponents from './components';
import * as fromServices from './services';
import * as fromStore from './store';

export function setupTranslateFactory(
  service: TranslationsService): Function {
  return () => service.use('en');
}

@NgModule({
  declarations: [...fromComponents.components],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreRouting,
    fromStore.CoreStoreModule,
    SharedModule.forRoot(),
  ],
  exports: [...fromComponents.components],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: fromServices.JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: fromServices.LoggingHttpInterceptor, multi: true },
    fromServices.CoreService,
    TranslationsService,
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateFactory,
      deps: [ TranslationsService ],
      multi: true
    }
  ],
})
export class CoreModule { }
