import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import * as fromComponents from './components';

export const routes = [
  { path: '', component: fromComponents.LoginComponent, pathMatch: 'full' }
];

export const LoginRouting = RouterModule.forChild(routes);
