import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MomentModule } from 'ngx-moment';

import { SharedModule } from '@shared/shared.module';
import { HomepageRouting } from './homepage.routing';
import * as fromComponents from './components';
import * as fromServices from './services';

@NgModule({
  declarations: [...fromComponents.components],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MomentModule,
    HomepageRouting,
  ],
  providers: [...fromServices.services]
})

export class HomepageModule { }
