import { Component, OnInit, AfterViewInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromModels from '@app/models';
import * as fromServicesShared from '@shared/services';
import * as fromServicesProfile from '@profile/services';

import * as fromServices from '../services';
import * as fromStore from '../store';

@Component({
  selector: 'app-fidela-settings',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  providers: [fromServices.SettingsService]
})
export class SettingsComponent implements OnInit, AfterViewInit {
  public userLogged: any;
  public isLoading$: Observable<boolean>;
  
  constructor(
    private _profileService: fromServicesProfile.ProfileService,
    private _store: Store<fromStore.SettingsState>,
    private _utils: fromServicesShared.UtilsService,
  ) {
    this.userLogged = this._profileService.getUserLogged();
    this.isLoading$ = this._store.pipe(select(fromStore.getLoading));
  }

  ngOnInit() { }

  ngAfterViewInit() { }
}
