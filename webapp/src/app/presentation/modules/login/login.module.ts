import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@shared/shared.module';
import { LoginRouting } from './login.routing';
import * as fromComponents from './components';
import * as fromServices from './services';

@NgModule({
  declarations: [...fromComponents.components],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRouting,
    SharedModule,
  ],
  providers: [...fromServices.services]
})

export class LoginModule { }
