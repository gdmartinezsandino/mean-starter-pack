import { Component, Injectable, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, DialogPosition } from '@angular/material';
import 'rxjs/add/operator/map';

import { FormGroup } from '@angular/forms';

import { environment } from '@environments/environment';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError, retry } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

import * as fromComponents from '../components';

@Injectable()
export class UtilsService {
  private _url: string;

  constructor(
    private dialog: MatDialog,
    private _http: HttpClient,
  ) {
    this._url = environment.apiUrl;
  }

  handleErrorHttp(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      `${error.error.message}`);
  }

  showDialog(settings): void {
    const dialogRef = this.dialog.open(fromComponents.DialogComponent, settings);
    if (typeof settings.onClose !== 'undefined') {
      dialogRef.afterClosed().subscribe(result => {
        settings.onClose(result);
      });
    }
  }

  validateConfirmPassword(form: FormGroup) {
    const password = form.controls.password.value;
    const confirmPassword = form.controls.confirmPassword.value;

    if (confirmPassword.length <= 0) {
      return null;
    }

    if (confirmPassword !== password) {
      return {
        doesMatchPassword: true
      };
    }

    return null;
  }

  getCountries() {
    return this._http.get(`${this._url}countries`)
      .pipe(
        catchError(this.handleErrorHttp)
      );
  }

  getCitiesOfCountry(country) {
    return this._http.get(`${this._url}cities-by/${country}`)
      .pipe(
        catchError(this.handleErrorHttp)
      );
  }
}
