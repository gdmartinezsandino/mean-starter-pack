import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import * as fromComponents from './components';

export const routes = [
  { path: '', component: fromComponents.ChangePasswordComponent, pathMatch: 'full' }
];

export const ChangePasswordRouting = RouterModule.forChild(routes);
