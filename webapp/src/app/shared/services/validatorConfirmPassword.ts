import { FormGroup } from '@angular/forms';

export class ConfirmPassword {
  static validate(form: FormGroup) {
    const password = form.controls.password.value;
    const confirmPassword = form.controls.confirmPassword.value;

    if (confirmPassword.length <= 0) {
      return null;
    }

    if (confirmPassword !== password) {
      return {
        doesMatchPassword: true
      };
    }

    return null;
  }
}
