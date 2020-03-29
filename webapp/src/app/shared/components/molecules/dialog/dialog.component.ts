import { Component, Inject, ViewEncapsulation, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStoreCore from '@core/store';

import * as fromStore from '../../../store';

@Component({
  selector: 'PREFIX_WEBAPP-dialog',
  styleUrls: ['./dialog.component.scss'],
  templateUrl: './dialog.component.html',
})
export class DialogComponent implements OnInit {
  public content$: Observable<Array<any>>;
  public content: any = [];
  public modal: any = [];
  wait = false;
  constructor(
    private _store: Store<fromStore.SharedState>,
    private _storeCore: Store<fromStoreCore.CoreState>,
  ) {
    
  }

  ngOnInit() { }

  goTo(path) {
    this._storeCore.dispatch(new fromStoreCore.Go({
      path: [path]
    }));
  }
}
