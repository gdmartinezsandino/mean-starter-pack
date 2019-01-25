import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromServicesShared from '@shared/services';

import * as fromServices from '../../services';
import * as fromStore from '../../store';

@Component({
  selector: 'application-prefix-active-user',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.scss'],
  providers: [fromServices.ProfileService],
})
export class ActiveUserComponent implements OnInit {
  isLoading$: Observable<boolean>;
  loggedIn$: Observable<boolean>;

  public router: Router;

  public activeUserFormGroup: FormGroup;

  constructor(
    private _store: Store<fromStore.ProfileState>,
    private _formBuilder: FormBuilder,
    private _activeRoute: ActivatedRoute,
  ) {
    this.isLoading$ = this._store.pipe(select(fromStore.getLoading));

    this.activeUserFormGroup = this._formBuilder.group({
      email: ['', Validators.required],
    });

    this.activeUserFormGroup = this._formBuilder.group({
      _id: ['', ''],
    });
  }

  ngOnInit() {
    const routeParams = this._activeRoute.snapshot.queryParams;
    if (routeParams.user) {
      this.activeUserFormGroup.patchValue({
        _id: routeParams.user
      });

      this._store.dispatch(new fromStore.ActivingUser(this.activeUserFormGroup.value));
    }
  }
}
