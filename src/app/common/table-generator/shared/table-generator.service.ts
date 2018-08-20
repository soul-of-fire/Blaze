import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Options } from 'src/app/supplier/shared/models/options';
import { instanceOfDateModel } from 'src/app/common/table-generator/table-generator/shared/date-model';
import { Page } from 'src/app/common/table-generator/table-generator/shared/page';

@Injectable({
  providedIn: 'root'
})
export class TableGeneratorService {

  constructor() { }

  public setOptions(table: DatatableComponent, searchForm: FormGroup): Options {
    let params = new HttpParams();
    params = params.append('page', (table.offset + 1).toString());
    params = params.append('per_page', table.pageSize.toString());
    
    const sort = table.sorts && table.sorts[0] || null;
    if(sort) {
      params = params.append('order_type', sort.dir);
      params = params.append('order_field', sort.prop);
    }

    const filter = searchForm.value;
    for(let prop in filter) {
      if(filter[prop]) {
        filter[prop] = instanceOfDateModel(filter[prop]) ? this.dateToString(filter[prop]) : filter[prop];
        params = params.append(prop, filter[prop]);
      }
    };
    return new Options(params);
  }

  public setState(options: Options, page: Page, searchForm: FormGroup) {
    if(options && options.params) {
      page.offset = Number(options.params.get('page')) - 1;
      options.params.keys()
        .filter((key) => key != 'page' && key != 'per_page' && key != 'order_type' && key != 'order_field')
        .forEach(key => {
          let value = instanceOfDateModel(searchForm.get(key).value) ? 
            this.stringToDate(options.params.get(key)) : options.params.get(key);
          searchForm.get(key).setValue(value, {emitEvent: false});
        });
    }
  }

  public dateToString(value) {
    return value && `${value.year}-${value.month}-${value.day}`;
  }

  public stringToDate(value) {
    const date = new Date(value);
    return {
      "year": date.getFullYear(),
      "month": date.getMonth() + 1,
      "day": date.getDate()
    }
  }
}
