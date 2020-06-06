import { LoggedInGuard, LoggedOutGuard } from './user-authenticated.guard';
import { AuthenticatedGuard } from './user-authenticated.guard';
import { AdminGuard } from './user-permissions.guard';

export const guards: any[] = [
  LoggedInGuard, AuthenticatedGuard,
  AdminGuard, LoggedOutGuard
];

export * from './user-authenticated.guard';
export * from './user-permissions.guard';
