import { Component, Input } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate/translate.pipe';

import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import * as fromServicesShared from '@shared/services';

import * as fromStoreSettings from '@settings/store';

@Component({
  selector: 'PREFIX_APP-navigation',
  styleUrls: ['./navigation.component.scss'],
  templateUrl: './navigation.component.html',
  providers: [TranslatePipe]
})
export class NavigationComponent {
  public language$: Observable<string>;
  public language: string;
  public module$: Observable<string>;
  public module: string;
  public selfModule: string;

  @Input() state: any;


  constructor(
    private _translationPipe: TranslatePipe ,
    private _storeSettings: Store<fromStoreSettings.SettingsState>,
  ) {
    this.module$ = this._storeSettings.pipe(select(fromStoreSettings.getModule));
    this.module$.subscribe((value) => {
      this.selfModule = value;
      this.module = this._translationPipe.transform(`module-${value}`);
    });

    this.language$ = this._storeSettings.pipe(select(fromStoreSettings.getLanguage));
    this.language$.subscribe(() => {
      setTimeout(() => {
        this.module = this._translationPipe.transform(`module-${this.selfModule}`);
      }, 200);
    });
  }
}
