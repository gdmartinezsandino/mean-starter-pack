import { Injectable } from '@angular/core';

import { Action, Store } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { Observable ,  of } from 'rxjs';
import { tap, map, mergeMap, exhaustMap, catchError } from 'rxjs/operators';

@Injectable()
export class SettingsEffects {
  constructor(
    private actions$: Actions,
  ) { }
}
