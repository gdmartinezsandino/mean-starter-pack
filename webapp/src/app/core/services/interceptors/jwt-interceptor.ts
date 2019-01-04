import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpSentEvent,
  HttpHeaderResponse,
  HttpProgressEvent,
  HttpResponse,
  HttpUserEvent,
  HttpEvent
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';
import * as fromStoreUser from '@profile/store';
import { User } from '@app/models';

import * as fromServicesProfile from '@profile/services';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  private token$: Observable<string>;
  private _token: string;
  private _user: User;

  /**
   * Método ejecutado con cada petición Http
   * @param req HttpRequest
   * @param next HttpHandler
   * @return Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>>
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent |
  HttpHeaderResponse |
  HttpProgressEvent |
  HttpResponse<any> |
  HttpUserEvent<any>> {
    // build the headers you want
    const headers = {
      'Content-Type': 'application/json',
      'auth': this._token ? this._token : '',
    };

    // clone the request
    const clone = req.clone({ setHeaders: headers });
    console.log('interceptor....');

    // pass it to the next interceptor
    return next.handle(clone);
  }

  constructor(
    private _storeUser: Store<fromStoreUser.ProfileState>,
    private _serviceProfile: fromServicesProfile.ProfileService,
  ) {
    this.token$ = this._storeUser.pipe(select(fromStoreUser.getToken));
    this.token$.subscribe((token: string) => {
      this._token = token;
    });
  }
}
