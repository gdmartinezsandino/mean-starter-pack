import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@shared/shared.module';
import { RegisterRouting } from './register.routing';

import * as fromComponents from './components';
import * as fromServices from './services';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RegisterRouting,
  ],
  declarations: [...fromComponents.components],
  providers: [...fromServices.services]
})
export class RegisterModule { }
