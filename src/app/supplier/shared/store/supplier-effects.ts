import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { LOAD, Loaded, SEARCH, EDIT, Edited, CREATE, Created, REMOVE, Removed } from './supplier-store';
import { CommonAction } from 'src/app/root/shared/store/common-action';
import { ApiService } from 'src/app/root/shared/api/api.service';
import { Options } from '../models/options';
import { Router } from '@angular/router';
import { Supplier } from 'src/app/supplier/shared/models/supplier';
import { Payload } from 'src/app/supplier/shared/models/payload';
import { TableGeneratorService } from 'src/app/common/table-generator/shared/table-generator.service';

@Injectable()
export class SupplierEffects {

  @Effect() load$: Observable<Action> = this.actions$.pipe(
    ofType(LOAD),
    switchMap(() => this.apiService.get('/admin/supplier?page=1&per_page=5').pipe(
        map((data: Payload) => new Loaded(data))
      )
    )
  );

  @Effect() search$: Observable<Action> = this.actions$.pipe(
    ofType(SEARCH),
    switchMap((action: CommonAction<Options>) => this.apiService.get('/admin/supplier', action.payload).pipe(
        map((data: Payload) => {
          data.state = action.payload;
          return new Loaded(data);
        })
      )
    )
  );

  @Effect() create$: Observable<Action> = this.actions$.pipe(
    ofType(CREATE),
    switchMap((action: CommonAction<Supplier>) => 
      this.apiService.post('/admin/supplier', action.payload.toObject(this.tableGeneratorService)).pipe(
        map((data: Supplier) => new Created(data)),
        tap(() => this.router.navigate(['../']))
      )
    )
  );

  @Effect() edit$: Observable<Action> = this.actions$.pipe(
    ofType(EDIT),
    switchMap((action: CommonAction<Supplier>) => 
      this.apiService.put(`/admin/supplier/${action.payload.id}`, action.payload.toObject(this.tableGeneratorService)).pipe(
        map((data: Supplier) => new Edited(data)),
        tap(() => this.router.navigate(['../']))
      )
    )
  );

  @Effect() remove$: Observable<Action> = this.actions$.pipe(
    ofType(REMOVE),
    switchMap((action: CommonAction<Supplier>) => this.apiService.remove(`/admin/supplier/${action.payload.id}`).pipe(
        map((data: Supplier) => new Removed(data))
      )
    )
  );

  constructor(private router: Router, 
              private actions$: Actions, 
              private apiService: ApiService, 
              private tableGeneratorService: TableGeneratorService) {}
}
