import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, Event, NavigationEnd, Params } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from '../store';
import * as fromReducer from '../store/reducers/login.reducer';
import * as fromActions from '../store/actions/login.actions';
import * as fromActionsProfile from '@profile/store/actions/profile.actions';
import * as fromServices from '../services';
import * as fromStoreCore from '@core/store';
import { environment } from '@environments/environment';

@Component({
  selector: 'PREFIX_WEBAPP-login',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [fromServices.LoginService]
})
export class LoginComponent implements OnInit {
  public isLoading$: Observable<boolean>; 
  public page: string;
  public displayHeight: string;
  public title: string = 'Bienvenido a <span>Eventzum</span>';
  public loginFormGroup: FormGroup;
  public apiUrlLogin: string;

  constructor(
    private _store: Store<fromStore.LoginState>,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.isLoading$ = this._store.pipe(select(fromReducer.getLoading));

    this.loginFormGroup = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() { }

  onLogin() {
    if (this.loginFormGroup.dirty && this.loginFormGroup.valid) {
      this._store.dispatch(new fromActions.Login(this.loginFormGroup.value));
    }
  }

  getField(field) {
    return this.loginFormGroup.get(field);
  }

  goTo(path) {
    this._store.dispatch(new fromStoreCore.Go({
      path: [path]
    }));
  }
}
