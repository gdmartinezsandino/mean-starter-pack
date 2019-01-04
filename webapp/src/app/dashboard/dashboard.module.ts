import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import * as fromGuards from '@core/guards';

import { DashboardRouting } from './dashboard.routing';
import * as fromComponents from './components';

@NgModule({
  declarations: [...fromComponents.components],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRouting
  ],
  providers: [
    fromGuards.AuthenticatedGuard,
    fromGuards.AdminGuard,
    fromGuards.CompanyGuard,
    fromGuards.ActivatedGuard
  ]
})
export class DashboardModule { }
