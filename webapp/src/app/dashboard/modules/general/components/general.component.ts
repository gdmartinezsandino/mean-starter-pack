import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as moment from 'moment';

import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

import * as fromModels from '@app/models';
import * as fromServicesShared from '@shared/services';
import * as fromServicesProfile from '@profile/services/profile.service';

import * as fromServices from '../services';
import * as fromStoreSettings from '@settings/store';
import * as fromStoreCore from '@core/store';

@Component({
  selector: 'PREFIX_APP-general',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
  providers: [fromServices.GeneralService]
})
export class GeneralComponent implements OnInit {
  public userLogged: any;
  public isLoading$: Observable<boolean>;

  public posts$: Observable<Array<fromModels.Post>>;
  public posts: Array<fromModels.Post>;

  columnsTablePostsToShow: Array<string>;
  tableSourcePosts: any;

  @ViewChild(MatSort) dataListPosts: MatSort;
  @ViewChild(MatPaginator) paginatorPosts: MatPaginator;

  constructor(
    private _profileService: fromServicesProfile.ProfileService,
    private _store: Store<fromStoreSettings.SettingsState>,
    private _utils: fromServicesShared.UtilsService,
  ) { }

  ngOnInit() { }

  onSelected(value) {
    this._store.dispatch(new fromStoreSettings.ModuleSelected(value));
    this._store.dispatch(new fromStoreCore.Go({
      path: ['dashboard/styleguide']
    }));
  }
}
