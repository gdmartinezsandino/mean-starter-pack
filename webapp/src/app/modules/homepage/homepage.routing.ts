import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import * as fromComponents from './components';

export const routes = [
  { path: '', component: fromComponents.HomepageComponent, pathMatch: 'full' }
];

export const HomepageRouting = RouterModule.forChild(routes);
