import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { concat } from 'ramda';

import * as fromPipes from './pipes';
import * as fromDirectives from './directives';
import * as fromServices from './services';
import * as fromComponents from './components';
import * as fromStore from './store';

import { MomentModule } from 'ngx-moment';
import { NgScrollbarModule } from 'ngx-scrollbar';

import {
  MAT_LABEL_GLOBAL_OPTIONS, MAT_DATE_LOCALE, MatFormFieldModule, MatAutocompleteModule,
  MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatInputModule,
  MatRadioModule, MatSelectModule, MatSliderModule, MatSlideToggleModule,
  MatMenuModule, MatSidenavModule, MatListModule, MatCardModule,
  MatStepperModule, MatTabsModule, MatExpansionModule, MatButtonModule,
  MatChipsModule, MatIconModule, MatProgressSpinnerModule, MatProgressBarModule,
  MatDialogModule, MatTooltipModule, MatSnackBarModule, MatTableModule,
  MatSortModule, MatPaginatorModule, MatToolbarModule, MatBottomSheetModule
} from '@angular/material';
import { RouterModule } from '@angular/router';

const ComponentsMaterial = [
  MatFormFieldModule, MatAutocompleteModule, MatCheckboxModule, MatDatepickerModule,
  MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule, MatSlideToggleModule,
  MatMenuModule, MatSidenavModule, MatListModule, MatCardModule, MatStepperModule,
  MatTabsModule, MatExpansionModule, MatButtonModule, MatChipsModule, MatIconModule,
  MatProgressSpinnerModule, MatProgressBarModule, MatDialogModule, MatTooltipModule,
  MatSnackBarModule, MatTableModule, MatSortModule, MatPaginatorModule, MatToolbarModule,
  MatNativeDateModule, MatBottomSheetModule
];

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
 
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ...ComponentsMaterial,
    MomentModule,
    SwiperModule,
    NgScrollbarModule,
  ],
  declarations: [
    ...fromComponents.components,
    ...fromPipes.pipes,
    ...fromDirectives.directives,
  ],
  exports: [
    ...ComponentsMaterial,
    ...fromComponents.components,
    ...fromPipes.pipes,
    ...fromDirectives.directives,
  ],
  providers: [
    { provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'auto'} },
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    },
  ],
  entryComponents: [...fromComponents.components],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [...fromServices.services]
    };
  }
}
