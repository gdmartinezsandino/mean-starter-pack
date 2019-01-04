import { JwtInterceptor } from './interceptors/jwt-interceptor';
import { LoggingHttpInterceptor } from './interceptors/logging-http-interceptor';

export const services: any[] = [
  JwtInterceptor,
  LoggingHttpInterceptor,
];

export * from './interceptors/jwt-interceptor';
export * from './interceptors/logging-http-interceptor';
