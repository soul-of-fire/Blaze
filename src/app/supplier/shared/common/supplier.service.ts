import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash';
import { Supplier } from 'src/app/supplier/shared/models/supplier';
import { Payload } from '../models/payload';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor() { }

  public findById(data: Payload, id: number) {
    return cloneDeep(data.list.filter((supplier: Supplier) => supplier.id == id)[0]);
  }
}
