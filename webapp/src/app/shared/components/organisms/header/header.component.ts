import { Component, Input, Output, EventEmitter, ViewChild, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from "@angular/platform-browser";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

import * as $ from 'jquery';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromServicesShared from '@shared/services';
import * as fromStoreProfile from '@profile/store';
import * as fromStoreShared from '@shared/store';
import * as fromStoreHomepage from '@homepage/store';
import * as fromStoreCore from '@core/store';

import * as fromStoreLogin from '@login/store';

@Component({
  selector: 'PREFIX_WEBAPP-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
  providers: [fromServicesShared.UtilsService]
})
export class HeaderComponent implements OnInit {
  public isOpenNavigation: Boolean = false;
  public windowScrolled: Boolean = false;

  public userLogged$: Observable<any>;
  public userLogged: any;

  constructor (
    private _storeCore: Store<fromStoreCore.CoreState>,
    private _storeLogin: Store<fromStoreLogin.LoginState>,
    private _storeProfile: Store<fromStoreProfile.ProfileState>,
    private _storeHomepage: Store<fromStoreHomepage.HomepageState>,
    private _formBuilder: FormBuilder,
    private _service: fromServicesShared.UtilsService,
    private _router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.userLogged$ = this._storeProfile.pipe(select(fromStoreProfile.getUser));
    this.userLogged$.subscribe((user) => {
      if (typeof user !== 'undefined') {
        this.userLogged = user;
      } else {
        this.userLogged = null;
      }
    });
  }

  ngOnInit() { }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop > 100) {
      this.windowScrolled = true;
    } 
    else if (this.windowScrolled && window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop < 10) {
      this.windowScrolled = false;
    }
  }

  goTo(path) {
    this._storeCore.dispatch(new fromStoreCore.Go({
      path: [path]
    }));
  }

  logout() {
    this._storeProfile.dispatch(new fromStoreLogin.Logout());
  }
}
