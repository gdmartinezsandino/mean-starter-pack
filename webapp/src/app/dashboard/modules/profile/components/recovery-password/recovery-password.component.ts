import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromServicesShared from '@shared/services';

import * as fromServices from '../../services';
import * as fromStore from '../../store';

@Component({
  selector: 'app-recovery-password',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './recovery-password.component.html',
  styleUrls: ['./recovery-password.component.scss'],
  providers: [fromServices.ProfileService],
})
export class RecoveryPasswordComponent implements OnInit {
  isLoading$: Observable<boolean>;
  loggedIn$: Observable<boolean>;

  public router: Router;

  public userSelected: Boolean = false;

  public emailFormGroup: FormGroup;
  public recoveryPasswordFormGroup: FormGroup;

  constructor(
    private _store: Store<fromStore.ProfileState>,
    private _formBuilder: FormBuilder,
    private _activeRoute: ActivatedRoute,
    private _utils: fromServicesShared.UtilsService,
  ) {
    this.isLoading$ = this._store.pipe(select(fromStore.getLoading));

    this.emailFormGroup = this._formBuilder.group({
      email: ['', Validators.required],
    });

    this.recoveryPasswordFormGroup = this._formBuilder.group({
      _id: ['', ''],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validator: this._utils.validateConfirmPassword.bind(this)
    });
  }

  ngOnInit() {
    const routeParams = this._activeRoute.snapshot.queryParams;
    if (routeParams.user) {
      this.userSelected = true;

      this.recoveryPasswordFormGroup.patchValue({
        _id: routeParams.user
      });
    }
  }

  onSubmitEmail() {
    if (this.emailFormGroup.dirty && this.emailFormGroup.valid) {
      this._store.dispatch(new fromStore.RecoveryPasswordSendingEmail(this.emailFormGroup.value));
    }
  }

  onSubmitChangePassword() {
    if (this.recoveryPasswordFormGroup.dirty && this.recoveryPasswordFormGroup.valid) {
      this._store.dispatch(new fromStore.UpdatingPassword(this.recoveryPasswordFormGroup.value));
    }
  }
}
