import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, retry } from 'rxjs/operators';

import { environment } from '@environments/environment';

import * as fromServicesShared from '@shared/services';

@Injectable()
export class ChangePasswordService {
  private _url: String;

  constructor(
    private _http: HttpClient,
    private _utils: fromServicesShared.UtilsService
  ) {
    this._url = environment.apiUrl;
  }

  changePassword(userToChangePassword, getToken = null) {
    if (getToken != null) {
      userToChangePassword = Object.assign({}, userToChangePassword);
      userToChangePassword.getToken = getToken;
    }

    const params = JSON.stringify(userToChangePassword);

    return this._http.post(`${this._url}user/change-password`, params)
      .pipe(
        catchError(this._utils.handleErrorHttp)
      );
  }
}
