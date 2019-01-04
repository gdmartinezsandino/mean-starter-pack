import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { environment } from '@environments/environment';
import * as fromServicesShared from '@shared/services';

@Injectable()
export class GeneralService {
  private _url: string;

  constructor(
    private _http: HttpClient,
    private _utils: fromServicesShared.UtilsService
  ) {
    this._url = environment.apiUrl;
  }

  getPosts() {
    return this._http.get(`${this._url}posts`)
      .pipe(
        catchError(this._utils.handleErrorHttp)
      );
  }

  addPost(post) {
    const params = JSON.stringify(post);
    return this._http.post(`${this._url}post`, params)
      .pipe(
        catchError(this._utils.handleErrorHttp)
      );
  }

  updatePost(post) {
    const params = JSON.stringify(post);
    return this._http.patch(`${this._url}post/${post._id}`, params)
      .pipe(
        catchError(this._utils.handleErrorHttp)
      );
  }

  deletePost(post) {
    return this._http.delete(`${this._url}post/${post._id}`)
      .pipe(
        catchError(this._utils.handleErrorHttp)
      );
  }
}
