import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ChartsModule } from 'ng2-charts';

import * as fromCore from '@core/index';

@NgModule({
  imports: [
    ChartsModule,
    BrowserModule,
    BrowserAnimationsModule,
    fromCore.CoreModule,
  ],
  bootstrap: [fromCore.LayoutComponent]
})
export class AppModule {
  constructor() {
  }
}
