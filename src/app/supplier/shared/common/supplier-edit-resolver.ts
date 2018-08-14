import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { map, take } from 'rxjs/operators';

import { CommonAction } from 'src/app/root/shared/store/common-action';
import { ApiService } from '../../../root/shared/api/api.service';

@Injectable()
export class SupplierEditResolver implements Resolve<any> {
  constructor(private store: Store<any>, private actions$: Actions, private apiService: ApiService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.apiService.get(`/admin/supplier/${route.params['id']}`);
  }
}
