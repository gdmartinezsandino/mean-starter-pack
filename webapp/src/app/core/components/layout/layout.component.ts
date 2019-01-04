import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromServicesShared from '@shared/services';

@Component({
  selector: 'app-layout',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./layout.component.scss'],
  templateUrl: './layout.component.html',
  providers: [fromServicesShared.UtilsService]
})
export class LayoutComponent implements OnInit, AfterViewInit {
  // mobileQuery: MediaQueryList;

  private loggedIn$: Observable<boolean>;
  public loggedIn: boolean;

  constructor(
    private _location: Location,
    private _utils: fromServicesShared.UtilsService,
  ) { }

  ngOnInit() {
    this._utils.loaderGlobal('show');
    this.getCurrentPageName();
  }

  public getCurrentPageName(): void {
    const url = this._location.path();
    const hash = (window.location.hash) ? '#' : '';
    window.scrollTo(0, 0);
  }

  public ngAfterViewInit(): void {
    this._utils.loaderGlobal('hide');
  }
}
