import { Routes, RouterModule } from '@angular/router';

import * as fromGuards from './guards';
import * as fromComponents from './components';
import * as fromComponentsShared from '@shared/components';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: 'app/modules/homepage/homepage.module#HomepageModule',
      },
      {
        path: 'login',
        canActivate: [fromGuards.LoggedOutGuard],
        loadChildren: 'app/modules/auth/login/login.module#LoginModule',
      },
      {
        path: 'registro',
        canActivate: [fromGuards.LoggedOutGuard],
        loadChildren: 'app/modules/auth/register/register.module#RegisterModule',
      },
      {
        path: 'cambiar',
        canActivate: [fromGuards.LoggedOutGuard],
        loadChildren: 'app/modules/auth/change-password/change-password.module#ChangePasswordModule',
      },
      {
        path: 'recupero',
        canActivate: [fromGuards.LoggedOutGuard],
        loadChildren: 'app/modules/auth/recovery-password/recovery-password.module#RecoveryPasswordModule',
      },
      {
        path: 'perfil',
        canActivate: [fromGuards.LoggedInGuard],
        loadChildren: 'app/modules/profile/profile.module#ProfileModule',
      },
    ]
  },
  { path: '**', component: fromComponents.ErrorComponent },
];

export const CoreRouting = RouterModule.forRoot(routes);
// export const AppRoutes = routes;
