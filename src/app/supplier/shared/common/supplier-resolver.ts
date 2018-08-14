import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { map, take } from 'rxjs/operators';
import { CommonAction } from 'src/app/root/shared/store/common-action';
import { Load, LOADED } from 'src/app/supplier/shared/store/supplier-store';

@Injectable()
export class SupplierResolver implements Resolve<any> {
  constructor(private store: Store<any>, private actions$: Actions) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    this.store.dispatch(new Load());
    return this.actions$.pipe(ofType(LOADED), map((i: CommonAction<any>) => i), take(1));
  }
}
