import { Component, OnInit, OnDestroy, ViewEncapsulation, ViewChild, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromModels from '@app/models';

import * as fromServicesShared from '@shared/services';

import * as fromStoreCore from '@core/store';

import * as fromStoreLogin from '@login/store';

import * as fromStoreProfile from '@profile/store';
import * as fromProfileServices from '@profile/services';

@Component({
  selector: 'app-pages',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [fromProfileServices.ProfileService],
})
export class DashboardComponent implements OnInit, OnDestroy {
  public mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  public displayHeight: String = '';
  public sidenavIsClosed: Boolean = false;

  private user$: Observable<fromModels.User>;
  public user: fromModels.User;
  public avatar: string;

  public changePasswordForm: FormGroup;

  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private _service: fromProfileServices.ProfileService,
    private _storeCore: Store<fromStoreCore.CoreState>,
    private _storeLogin: Store<fromStoreLogin.LoginState>,
    private _storeProfile: Store<fromStoreProfile.ProfileState>,
    private _utils: fromServicesShared.UtilsService,
    private _formBuilder: FormBuilder,
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.user = this._service.getUserLogged();
    this.avatar = this._service.getUserAvatar(this.user.image);

    this.user$ = this._storeProfile.pipe(select(fromStoreProfile.getUser));
    this.user$.subscribe((user) => {
      this.user = this._service.getUserLogged();
      this.avatar = this._service.getUserAvatar(this.user.image);

      this.changePasswordForm = this._formBuilder.group({
        _id: [this.user._id, ''],
        password: ['', [Validators.required]],
        confirmPassword: ['', Validators.required],
      }, {
        validator: fromServicesShared.ConfirmPassword.validate.bind(this)
      });
    });
  }

  ngOnInit() {
    this.displayHeight = `${window.innerHeight}px`;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  closeSidenav() {
    this.sidenav.close();
    this.sidenavIsClosed = true;
  }

  goHome() {
    this._storeCore.dispatch(new fromStoreCore.Go({
      path: ['dashboard']
    }));
  }

  logout() {
    this._storeLogin.dispatch(new fromStoreLogin.Logout());
  }

  changePassword() {
    this._utils.showDialog({
      width: 500,
      data: {
        title: 'Cambiar contraseña',
        formElement: this.changePasswordForm,
        model: this.changePasswordForm.value,
        confirm: true,
        form: [
          { name: 'password', type: 'password', placeholder: 'Contraseña nueva' },
          { name: 'confirmPassword', type: 'password', placeholder: 'Repita contraseña' },
        ],
        onChange: (model) => {
          this.changePasswordForm.patchValue(model);
        },
      },
      onClose: (result) => {
        if (result.action) {
          this._storeProfile.dispatch(new fromStoreProfile.UpdatingPassword(this.changePasswordForm.value));
        }
      }
    });
  }
}
