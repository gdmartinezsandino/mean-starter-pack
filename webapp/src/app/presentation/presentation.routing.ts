import { Routes, RouterModule } from '@angular/router';

import * as fromComponentsProfile from '@profile/components';

import * as fromComponents from './components';

import * as fromGuards from '@core/guards';

export const routes: Routes = [
  {
    path: '',
    component: fromComponents.PresentationComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'login',
        canActivate: [fromGuards.LoggedInGuard],
        loadChildren: 'app/presentation/modules/login/login.module#LoginModule',
      },
      {
        path: 'register',
        loadChildren: 'app/presentation/modules/register/register.module#RegisterModule',
      },
      {
        path: 'active-user',
        component: fromComponentsProfile.ActiveUserComponent,
      },
      {
        path: 'recovery-password',
        component: fromComponentsProfile.RecoveryPasswordComponent,
      },
    ]
  },
];

export const PresentationRouting = RouterModule.forChild(routes);
