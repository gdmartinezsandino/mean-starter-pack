import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromStore from '../store';
import * as fromReducer from '../store/reducers/login.reducer';
import * as fromActions from '../store/actions/login.actions';
import * as fromServices from '../services';

@Component({
  selector: 'app-login',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [fromServices.LoginService]
})
export class LoginComponent implements OnInit {
  isLoading$: Observable<boolean>;
  loggedIn$: Observable<boolean>;

  public router: Router;
  public title: String = 'Login';

  public loginFormGroup: FormGroup;

  constructor(
    private _store: Store<fromStore.LoginState>,
    private _formBuilder: FormBuilder,
    private _service: fromServices.LoginService
  ) {
    this.isLoading$ = this._store.pipe(select(fromReducer.getLoading));
    this.loggedIn$ = this._store.pipe(select(fromReducer.getLoggedIn));
    this.loginFormGroup = this._formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() { }

  onLogin() {
    if (this.loginFormGroup.dirty && this.loginFormGroup.valid) {
      this._store.dispatch(new fromActions.Login(this.loginFormGroup.value));
    }
  }
}

export function emailValidator(control: FormControl): { [key: string]: any } {
  const emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
  if (control.value && !emailRegexp.test(control.value)) {
    return { invalidEmail: true };
  }
}
