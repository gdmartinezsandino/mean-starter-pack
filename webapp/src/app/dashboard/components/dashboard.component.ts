import { MediaMatcher } from '@angular/cdk/layout';
import { Component, AfterViewInit, Input, ChangeDetectorRef, OnDestroy, ViewEncapsulation, LOCALE_ID, Inject } from '@angular/core';

import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import * as fromServicesShared from '@shared/services';

import * as fromStoreSettings from '@settings/store';

@Component({
  selector: 'PREFIX_APP-dashboard',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnDestroy {
  public language$: Observable<string>;
  public language: string;
  public module$: Observable<string>;
  public module: string;

  private _mobileQueryListener: () => void;

  public mobileQuery: MediaQueryList;
  public fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
  public currentLang: string;
  public translationsLoaded: Boolean = false;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
    private _cdRef:ChangeDetectorRef,
    private _storeSettings: Store<fromStoreSettings.SettingsState>,
    private _translations: fromServicesShared.TranslationsService
  ) {
    this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.language$ = this._storeSettings.pipe(select(fromStoreSettings.getLanguage));
    this.language$.subscribe((language) => {
      this.language = language;

      this._translations.use(this.language).then(() => {
        this.translationsLoaded = true;
      });
    });

    this.module$ = this._storeSettings.pipe(select(fromStoreSettings.getModule));
    this.module$.subscribe((value) => {
      this.module = value;
    });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngAfterViewChecked() {
    this._cdRef.detectChanges();
  }

  setLang(lang: string) {
    this._translations.use(lang);
    this._storeSettings.dispatch(new fromStoreSettings.LanguageSelected(lang));
  }
}
