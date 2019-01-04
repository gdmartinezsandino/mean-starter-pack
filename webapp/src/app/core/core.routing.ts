import { Routes, RouterModule } from '@angular/router';

import * as fromComponents from './components';

export const routes: Routes = [
  // { path: '', loadChildren: 'app/presentation/presentation.module#PresentationModule' },
  { path: '', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
  { path: '**', component: fromComponents.ErrorComponent }
];

export const CoreRouting = RouterModule.forRoot(routes);
