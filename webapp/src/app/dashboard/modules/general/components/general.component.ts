import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';

import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

import * as fromModels from '@app/models';
import * as fromServicesShared from '@shared/services';
import * as fromServicesProfile from '@profile/services/profile.service';

import * as fromServices from '../services';
import * as fromStore from '../store';

@Component({
  selector: 'application-prefix-general',
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
    private _store: Store<fromStore.GeneralState>,
    private _utils: fromServicesShared.UtilsService,
  ) {
    // this.userLogged = this._profileService.getUserLogged();
    this.isLoading$ = this._store.pipe(select(fromStore.getLoading));
    this.posts$ = this._store.pipe(select(fromStore.getPosts));
    this.posts$.subscribe((posts) => {
      if (typeof posts === 'undefined') {
        return false;
      }

      this.posts = posts;
      this.tableSourcePosts = new MatTableDataSource(this.posts);
      this.tableSourcePosts.sort = this.dataListPosts;
      this.tableSourcePosts.paginator = this.paginatorPosts;
      this.columnsTablePostsToShow = [
        'title', 'descripcion', 'created_at', 'last_update',
      ];
    });
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this._store.dispatch(new fromStore.GetPosts({}));
  }
}
