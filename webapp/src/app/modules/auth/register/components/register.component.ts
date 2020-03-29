import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from '../store';
import * as fromReducer from '../store/reducers/register.reducer';
import * as fromActions from '../store/actions/register.actions';
import * as fromStoreCore from '@core/store';
import * as fromStoreShared from '@shared/store';
import * as fromActionsShared from '@shared/store/actions/shared.actions';

import * as fromServices from '../services';
import * as fromServicesShared from '@shared/services';

@Component({
  selector: 'PREFIX_WEBAPP-register',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [fromServices.RegisterService]
})
export class RegisterComponent implements OnInit {
  public isLoading$: Observable<boolean>; 
  public page: string;
  public displayHeight: string;
  public title: string = 'Bienvenido a <span>Eventzum</span>';
  public registerFormGroup: FormGroup;

  constructor(
    private _store: Store<fromStore.RegisterState>,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _storeShared: Store<fromStoreShared.SharedState>,
    private _utils: fromServicesShared.UtilsService,
  ) {
    this.isLoading$ = this._store.pipe(select(fromReducer.getLoading));

    this.registerFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() { }

  onRegister() {
    if (this.registerFormGroup.dirty && this.registerFormGroup.valid) {
      this._store.dispatch(new fromActions.Register(this.registerFormGroup.value));
    }
  }

  getField(field) {
    return this.registerFormGroup.get(field);
  }

  goTo(path) {
    this._store.dispatch(new fromStoreCore.Go({
      path: [path]
    }));
  }
}
