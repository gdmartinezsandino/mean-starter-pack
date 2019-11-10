import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, retry } from 'rxjs/operators';

import { Store } from '@ngrx/store';

import { environment } from '@environments/environment';
import * as fromModels from '@app/models';
import * as fromServicesShared from '@shared/services';
import * as fromServicesProfile from '@profile/services';

@Injectable()
export class CoreService {
  private _url: string;
  public userLogged: any;

  constructor(
    private _http: HttpClient,
    private _serviceUser: fromServicesProfile.ProfileService,
    private _utils: fromServicesShared.UtilsService
  ) {
    this._url = environment.apiUrl;
    this.userLogged = this._serviceUser.getUserLogged();
  }

  unsuscribe(params) {
    params = JSON.stringify(params);
    debugger
    return this._http.patch(`${this._url}unsuscribe`, params)
      .pipe(
        catchError(this._utils.handleErrorHttp)
      );
  }
}
