import { Routes, RouterModule } from '@angular/router';

import * as fromComponents from './components';
import * as fromComponentsGeneral from './modules/general/components';
import * as fromGuards from '@core/guards';

export const routes: Routes = [
  {
    path: '',
    component: fromComponents.DashboardComponent,
    children: [
      { path: '', redirectTo: 'general', pathMatch: 'full' },
      {
        path: 'general',
        // canActivate: [fromGuards.AuthenticatedGuard, fromGuards.ActivatedGuard],
        loadChildren: 'app/dashboard/modules/general/general.module#GeneralModule',
      },
      {
        path: 'add-post',
        // canActivate: [fromGuards.AuthenticatedGuard, fromGuards.ActivatedGuard],
        component: fromComponentsGeneral.AddPostComponent
      },
      {
        path: 'profile',
        // canActivate: [fromGuards.AuthenticatedGuard, fromGuards.ActivatedGuard],
        loadChildren: 'app/dashboard/modules/profile/profile.module#ProfileModule',
      },
    ]
  }
];

export const DashboardRouting = RouterModule.forChild(routes);
