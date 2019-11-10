import { Component, Injectable, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, DialogPosition } from '@angular/material';

import { FormGroup } from '@angular/forms';

import { environment } from '@environments/environment';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { DialogComponent } from '../components/dialog/dialog.component';

@Injectable()
export class UtilsService {
  private _url: string;
  public translations: any = {};

  constructor(
    private dialog: MatDialog,
    private _http: HttpClient,
  ) {
    this._url = environment.apiUrl;
  }

  handleErrorHttp(response: HttpErrorResponse) {
    if (response.error instanceof ErrorEvent || response.error !== null) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', response.error.message);
      return throwError(response.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${response.status}, ` +
        `body was: ${response.error}`);
      // return an observable with a user-facing error message
      return throwError('Something bad happened; please try again later.');
    }
  }

  showDialog(settings): void {
    const dialogRef = this.dialog.open(DialogComponent, settings);
    if (typeof settings.onClose !== 'undefined') {
      dialogRef.afterClosed().subscribe(result => {
        settings.onClose(result);
      });
    }
  }

  getItemLocalStorage(key: string) {
    const storageVal = localStorage.getItem(key);
    try {
      return JSON.parse(storageVal);
    } catch (error) {
      return storageVal;
    }
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
  checkIsEmail(value) {
    const emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;

    if (value && emailRegexp.test(value)) {
      return true;
    }

    return false;
  }
  validateIsEmail(form: FormGroup) {
    const email = form.controls.email.value;
    const emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;

    if (email && !emailRegexp.test(email)) {
      return {
        invalidEmail: true
      };
    }

    return null;
  }
  checkIsPhone(value) {
    const phoneRegexp = /^\d{10}$/;

    if (value && phoneRegexp.test(value)) {
      return true;
    }

    return false;
  }
  validateIsPhone(form: FormGroup) {
    const email = form.controls.email.value;
    const phoneRegexp = /[0-9 -()+]+$/;

    if (email && !phoneRegexp.test(email)) {
      return {
        invalidEmail: true
      };
    }

    return null;
  }
  checkIsNumber(value) {
    const numberRegexp = /[0-9]+$/;

    if (value && numberRegexp.test(value)) {
      return true;
    }

    return false;
  }
  validateIsNumber(form: FormGroup) {
    const email = form.controls.email.value;
    const numberRegexp = /[0-9]+$/;

    if (email && !numberRegexp.test(email)) {
      return {
        invalidEmail: true
      };
    }

    return null;
  }
}
