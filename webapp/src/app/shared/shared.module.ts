import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import * as fromPipes from './pipes';
import * as fromDirectives from './directives';
import * as fromServices from './services';
import * as fromComponents from './components';

import {
  MAT_LABEL_GLOBAL_OPTIONS, MatFormFieldModule, MatAutocompleteModule,
  MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatInputModule,
  MatRadioModule, MatSelectModule, MatSliderModule, MatSlideToggleModule,
  MatMenuModule, MatSidenavModule, MatListModule, MatCardModule,
  MatStepperModule, MatTabsModule, MatExpansionModule, MatButtonModule,
  MatChipsModule, MatIconModule, MatProgressSpinnerModule, MatProgressBarModule,
  MatDialogModule, MatTooltipModule, MatSnackBarModule, MatTableModule,
  MatSortModule, MatPaginatorModule, MatToolbarModule,
} from '@angular/material';
import { RouterModule } from '@angular/router';

const ComponentsMaterial = [
  MatFormFieldModule, MatAutocompleteModule, MatCheckboxModule, MatDatepickerModule,
  MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule, MatSlideToggleModule,
  MatMenuModule, MatSidenavModule, MatListModule, MatCardModule, MatStepperModule,
  MatTabsModule, MatExpansionModule, MatButtonModule, MatChipsModule, MatIconModule,
  MatProgressSpinnerModule, MatProgressBarModule, MatDialogModule, MatTooltipModule,
  MatSnackBarModule, MatTableModule, MatSortModule, MatPaginatorModule, MatToolbarModule,
  MatNativeDateModule,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ...ComponentsMaterial,
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
    { provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'none'} },
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
