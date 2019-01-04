import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@shared/shared.module';

import * as fromComponentsProfile from '@profile/components';

import { PresentationRouting } from './presentation.routing';

import * as fromGuards from '@core/guards';
import * as fromComponents from './components';

@NgModule({
  declarations: [
    fromComponentsProfile.ActiveUserComponent,
    fromComponentsProfile.RecoveryPasswordComponent,
    ...fromComponents.components
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    PresentationRouting
  ],
  providers: [
    ...fromGuards.guards,
  ]
})
export class PresentationModule { }
