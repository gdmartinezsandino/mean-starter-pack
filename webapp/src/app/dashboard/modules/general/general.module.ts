import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@shared/shared.module';
import * as fromComponents from './components';
import * as fromServices from './services';

export const routes = [
  { path: '', component: fromComponents.GeneralComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [...fromComponents.components],
  providers: [...fromServices.services],
})
export class GeneralModule { }
