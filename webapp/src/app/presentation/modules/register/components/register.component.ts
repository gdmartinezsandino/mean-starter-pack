import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatStepper } from '@angular/material';

import * as fromModels from '@app/models';
import * as fromServices from '../services';
import * as fromServicesShared from '@shared/services';
import * as fromServicesProfile from '@profile/services';

@Component({
  selector: 'app-register',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [fromServices.RegisterService]
})
export class RegisterComponent implements OnInit {
  public globalConfig: any;
  public title = 'Register';
  public message = '';

  public areas: any[] = [];
  public roles: any[] = [];

  public companies: any[];

  public user: fromModels.User;
  public userRegistered = false;
  public confirmPassword: String = '';

  public firstFormGroup: FormGroup;
  public firstFormGroupIsLoading = false;
  public companyChecked = false;
  public secondFormGroup: FormGroup;
  public thirdStepIsLoading = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _service: fromServices.RegisterService,
    private _serviceProfile: fromServicesProfile.ProfileService,
    private _utils: fromServicesShared.UtilsService,
  ) {
    this.user = this._serviceProfile.getUserEmpty();

    this.roles = [
      'Compradores',
      'Profesionales',
      'Empresas'
    ];

    this.firstFormGroup = this._formBuilder.group({
      roleCtrl: [this.user.role, Validators.required],
    });

    this.secondFormGroup = this._formBuilder.group({
      usernameCtrl: [this.user.username, Validators.required],
      nameCtrl: [this.user.name, Validators.required],
      lastnameCtrl: [this.user.lastname, ''],
      emailCtrl: [this.user.email, Validators.required],
      password: [this.user.password, Validators.required],
      confirmPassword: ['', Validators.required],
    }, {
      validator: this._utils.validateConfirmPassword.bind(this)
    });
  }

  ngOnInit() {

  }

  onSubmit(_stepper: MatStepper) {
    if (this.secondFormGroup.dirty && this.secondFormGroup.valid) {
      _stepper.next();
      this.thirdStepIsLoading = true;

      this._service.register(this.user).subscribe(
        response => {
          this.thirdStepIsLoading = false;

          if (response.user && response.user) {
            this.userRegistered = true;
            this.user = this._serviceProfile.getUserEmpty();
          } else {
            this.userRegistered = false;
          }

          this.message = 'Usuario registrado con exito. Ahora puedes iniciar sesión';
        }, error => {
          this.thirdStepIsLoading = false;
          this.message = error;
          console.log(<any>error);
        }
      );
    }
  }
}

export function emailValidator(control: FormControl): { [key: string]: any } {
  const emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
  if (control.value && !emailRegexp.test(control.value)) {
    return { invalidEmail: true };
  }
}

export function matchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
  return (group: FormGroup) => {
    const password = group.controls[passwordKey];
    const passwordConfirmation = group.controls[passwordConfirmationKey];
    if (password.value !== passwordConfirmation.value) {
      return passwordConfirmation.setErrors({ mismatchedPasswords: true });
    }
  };
}
