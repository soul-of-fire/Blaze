import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { cloneDeep } from 'lodash';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LOAD, Loaded, SEARCH } from './transport-store';
import { CommonAction } from 'src/app/root/shared/store/common-action';
import { ApiService } from 'src/app/root/shared/api/api.service';

@Injectable()
export class TransportEffects {

  @Effect() load$: Observable<Action> = this.actions$.pipe(
    ofType(LOAD),
    switchMap(() => this.apiService.get('/transport').pipe(
        map((data: any) => {
          return new Loaded(data);
        })
      )
    )
  );

  @Effect() search$: Observable<Action> = this.actions$.pipe(
    ofType(SEARCH),
    switchMap((action: any) => this.apiService.get('/transport' + action.payload).pipe(
        map((data: any) => {
          return new Loaded(data);
        })
      )
    )
  );

  constructor(private actions$: Actions, private apiService: ApiService, private router: Router) {}
}
