import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from '../store';
import * as fromReducer from '../store/reducers/change-password.reducer';
import * as fromActions from '../store/actions/change-password.actions';
import * as fromServices from '../services';
import * as fromStoreCore from '@core/store';

@Component({
  selector: 'PREFIX_WEBAPP-change-password',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
  providers: [fromServices.ChangePasswordService]
})
export class ChangePasswordComponent implements OnInit {
  isLoading$: Observable<boolean>;
  loggedIn$: Observable<boolean>;

  public displayHeight: string;
  public title: string = 'Cambia tu <span>contraseña</span>';

  public changePasswordFormGroup: FormGroup;

  constructor(
    private _store: Store<fromStore.ChangePasswordState>,
    private _formBuilder: FormBuilder,
    private _service: fromServices.ChangePasswordService,
    private activatedRoute: ActivatedRoute
  ) {
    this.isLoading$ = this._store.pipe(select(fromReducer.getLoading));
    this.loggedIn$ = this._store.pipe(select(fromReducer.getLoggedIn));

    this.changePasswordFormGroup = this._formBuilder.group({
      password: ['', Validators.required],
      password_confirmation: ['', Validators.required],
      remember_token: ['', '']
    });
  }

  ngOnInit() {
    this.displayHeight = `${window.innerHeight}px`;
    this.activatedRoute.queryParams.subscribe(params => {
      this.changePasswordFormGroup.patchValue({
        remember_token: params['token']
      });
    });
  }

  onChangePassword() {
    if (this.changePasswordFormGroup.dirty && this.changePasswordFormGroup.valid) {
      this._store.dispatch(new fromActions.ChangePassword(this.changePasswordFormGroup.value));
    }
  }

  getField(field) {
    return this.changePasswordFormGroup.get(field);
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
