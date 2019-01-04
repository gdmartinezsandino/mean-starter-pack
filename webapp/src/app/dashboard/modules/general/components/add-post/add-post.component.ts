import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';

import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

import * as fromModels from '@app/models';
import * as fromServicesShared from '@shared/services';
import * as fromServicesProfile from '@profile/services/profile.service';

import * as fromServices from '../../services';
import * as fromStore from '../../store';

@Component({
  selector: 'app-add-post',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
  providers: [fromServices.GeneralService]
})
export class AddPostComponent implements OnInit {
  public userLogged: any;
  public isLoading$: Observable<boolean>;

  public postForm: FormGroup;

  constructor(
    private _profileService: fromServicesProfile.ProfileService,
    private _store: Store<fromStore.GeneralState>,
    private _utils: fromServicesShared.UtilsService,
    private _formBuilder: FormBuilder,
  ) {
    this.isLoading$ = this._store.pipe(select(fromStore.getLoading));

    this.postForm = this._formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit() {

  }

  onSubmit() {
    this._store.dispatch(new fromStore.AddingPost(this.postForm.value));
  }
}
