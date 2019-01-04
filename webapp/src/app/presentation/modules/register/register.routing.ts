import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import * as fromComponents from './components';

export const routes = [
  { path: '', component: fromComponents.RegisterComponent, pathMatch: 'full' }
];

export const RegisterRouting = RouterModule.forChild(routes);
