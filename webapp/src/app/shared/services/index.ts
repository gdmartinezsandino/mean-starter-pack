import { UtilsService } from './utils.service';
import { ConfirmPassword } from './validatorConfirmPassword';

export const services: any[] = [
  UtilsService,
  ConfirmPassword
];

export * from './utils.service';
export * from './validatorConfirmPassword';
