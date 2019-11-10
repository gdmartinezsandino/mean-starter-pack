import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Store, select } from '@ngrx/store';

import { User } from '@app/models/user';

import { environment } from '@environments/environment';

import * as fromModels from '@app/models';

import * as fromServicesShared from '@shared/services';

import * as fromStore from '@profile/store/profile.store';
import * as fromReducer from '@profile/store/reducers/profile.reducer';

@Injectable()
export class ProfileService {
  private _url: string;
  private user$: Observable<User>;
  private _user: User;
  private token$: Observable<string>;
  private _token: string;

  constructor(
    private _http: HttpClient,
    private _store: Store<fromStore.ProfileState>,
    private _utils: fromServicesShared.UtilsService
  ) {
    this._url = environment.apiUrl;

    this.user$ = this._store.pipe(select(fromReducer.getUser));
    this.user$.subscribe((user) => {
      if (typeof user !== 'undefined') {
        const userModified = Object.assign({}, user);
        userModified.cashback = user.cashback !== '' ? JSON.parse(user.cashback) : {
          obtenido: '',
          redimido: '',
          saldo: ''
        };

        this._user = userModified;
      } else {
        this._user = user;
      }
    });

    this.token$ = this._store.pipe(select(fromReducer.getToken));
    this.token$.subscribe((token) => {
      this._token = token;
    });
  }

  getUserEmpty() {
    return new fromModels.User('', '', '', '', '', '', '', '', '', '', '', '', '', 0, '', '', '', '', '', '')
  }

  getUserLogged() {
    if (!this._user) {
      return this.getUserEmpty();
    }

    if (typeof this._user.cashback === 'string') {
      this._user.cashback = JSON.parse(this._user.cashback);
    }

    return this._user;
  }

  getToken() {
    return this._token;
  }

  getUser(id) {
    const params = id;
    return this._http.get(`${this._url}user/${params}`)
      .pipe(
        catchError(this._utils.handleErrorHttp)
      );
  }

  getUserAvatar(image: any = null) {
    if (!this._user) {
      return false;
    }

    let imagePath = image;
    imagePath = imagePath.split('/').pop();

    if (imagePath !== '') {
      imagePath = `${this._url}user/get-image/${imagePath}`;
    }

    return imagePath;
  }

  getUserByRole(role) {
    const params = role;
    return this._http.get(`${this._url}user/by-role/${params}`)
      .pipe(
        catchError(this._utils.handleErrorHttp)
      );
  }

  register(userToRegister) {
    const params = JSON.stringify(userToRegister);
    return this._http.post(`${this._url}user/register`, params)
      .pipe(
        catchError(this._utils.handleErrorHttp)
      );
  }

  updateUser(userToUpdate) {
    const params = JSON.stringify(userToUpdate);
    return this._http.patch(`${this._url}user/update/${userToUpdate._id}`, params)
      .pipe(
        catchError(this._utils.handleErrorHttp)
      );
  }

  updateStateUser(id, state) {
    const params = { state: state };
    return this._http.patch(`${this._url}user/update-state/${id}`, params)
      .pipe(
        catchError(this._utils.handleErrorHttp)
      );
  }

  updatePassword(userToUpdate) {
    const params = JSON.stringify(userToUpdate);
    return this._http.patch(`${this._url}user/update-password/${userToUpdate._id}`, params)
      .pipe(
        catchError(this._utils.handleErrorHttp)
      );
  }

  activeUser(user) {
    return this._http.patch(`${this._url}user/active-user/${user._id}`, JSON.stringify(user))
      .pipe(
        catchError(this._utils.handleErrorHttp)
      );
  }

  recoveryPassword(data) {
    return this._http.get(`${this._url}user/recovery-password/${data.email}`)
      .pipe(
        catchError(this._utils.handleErrorHttp)
      );
  }
}
