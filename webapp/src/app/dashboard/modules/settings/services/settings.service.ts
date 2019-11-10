import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, retry } from 'rxjs/operators';

import { Store } from '@ngrx/store';

import { environment } from '@environments/environment';

import * as fromServicesShared from '@shared/services';
import * as fromStore from '../store/settings.store';

@Injectable()
export class SettingsService {
  private _url: string;

  constructor(
    private _http: HttpClient,
    private _utils: fromServicesShared.UtilsService
  ) {
    this._url = environment.apiUrl;
  }
}
