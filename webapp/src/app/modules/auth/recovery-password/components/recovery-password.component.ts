import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromModels from '@app/models';
import * as fromStore from '../store';
import * as fromReducer from '../store/reducers/recovery-password.reducer';
import * as fromActions from '../store/actions/recovery-password.actions';
import * as fromServices from '../services';
import * as fromStoreCore from '@core/store';
import * as fromServicesProfile from '@profile/services';

@Component({
  selector: 'PREFIX_WEBAPP-recovery-password',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './recovery-password.component.html',
  styleUrls: ['./recovery-password.component.scss'],
  providers: [fromServices.RecoveryPasswordService]
})
export class RecoveryPasswordComponent implements OnInit {
  public isLoading$: Observable<boolean>;
  public userLogged: fromModels.User = null;

  public displayHeight: string;
  public title: string = 'Recupera tu <span>contraseña</span>';

  public recoveryPasswordFormGroup: FormGroup;

  constructor(
    private _store: Store<fromStore.RecoveryPasswordState>,
    private _formBuilder: FormBuilder,
    private _service: fromServices.RecoveryPasswordService,
    private _serviceProfile: fromServicesProfile.ProfileService,
  ) {
    this.isLoading$ = this._store.pipe(select(fromReducer.getLoading));
    this.userLogged = this._serviceProfile.getUserLogged();

    this.recoveryPasswordFormGroup = this._formBuilder.group({
      email: [this.userLogged.email, Validators.required],
    });
  }

  ngOnInit() {
    this.displayHeight = `${window.innerHeight}px`;
  }

  onRecoveryPassword() {
    if (this.recoveryPasswordFormGroup.dirty && this.recoveryPasswordFormGroup.valid) {
      this._store.dispatch(new fromActions.RecoveryPassword(this.recoveryPasswordFormGroup.value));
    }
  }

  getField(field) {
    return this.recoveryPasswordFormGroup.get(field);
  }

  goTo(path) {
    this._store.dispatch(new fromStoreCore.Go({
      path: [path]
    }));
  }
}

export function emailValidator(control: FormControl): { [key: string]: any } {
  const emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
  if (control.value && !emailRegexp.test(control.value)) {
    return { invalidEmail: true };
  }
}
