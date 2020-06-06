import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import * as fromComponents from './components';

export const routes = [
  { path: '', component: fromComponents.RecoveryPasswordComponent, pathMatch: 'full' }
];

export const RecoveryPasswordRouting = RouterModule.forChild(routes);
