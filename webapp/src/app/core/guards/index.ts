import { LoggedInGuard } from './user-authenticated.guard';
import { AuthenticatedGuard } from './user-authenticated.guard';
import { AdminGuard } from './user-permissions.guard';
import { ActivatedGuard } from './user-states.guard';

export const guards: any[] = [
  LoggedInGuard, AuthenticatedGuard,
  AdminGuard, ActivatedGuard,
];

export * from './user-authenticated.guard';
export * from './user-permissions.guard';
export * from './user-states.guard';
