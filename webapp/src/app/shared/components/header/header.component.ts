import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from "@angular/platform-browser";

import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import * as fromServicesShared from '@shared/services';

import * as fromStoreSettings from '@settings/store';

@Component({
  selector: 'PREFIX_APP-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
  providers: [fromServicesShared.UtilsService]
})
export class HeaderComponent {
  public language$: Observable<string>;
  public language: string;
  public module$: Observable<string>;
  public module: string;
  
  public isOpenNavigation: Boolean = false;
  public isOpenMenuProfile: Boolean = false;
  public isOpenMenuLanguage: Boolean = false;
  @Output() toggleNav = new EventEmitter();
  @Input() state: any;
  @Input() brandWidth: any;

  constructor (
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private _storeSettings: Store<fromStoreSettings.SettingsState>,
    private _translations: fromServicesShared.TranslationsService,
  ) {
    this.language$ = this._storeSettings.pipe(select(fromStoreSettings.getLanguage));
    this.language$.subscribe((language) => {
      this.language = language;
    });

    this.module$ = this._storeSettings.pipe(select(fromStoreSettings.getModule));
    this.module$.subscribe((value) => {
      this.module = value;
    });
  }

  handlerMenuAction () {
    this.isOpenNavigation = !this.isOpenNavigation;
    this.toggleNav.emit();
  }

  setLang(lang: string) {
    this._translations.use(lang);
    this._storeSettings.dispatch(new fromStoreSettings.LanguageSelected(lang));
  }

  goHome() {
    this._storeSettings.dispatch(new fromStoreSettings.ModuleSelected(''));
  }
}
