import { BaseTable } from "src/app/transport/transport-list/shared/base-table";
import { FormGroup, FormBuilder } from "@angular/forms";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { Search } from "../../shared/store/transport-store";
import { HttpParams } from "@angular/common/http";

export class ServerSide extends BaseTable {

  stor: any;
  searchForm: FormGroup;
  searchSubscriber: any;

  constructor(formBuilder: FormBuilder, store: Store<any>) {
    super();
    this.stor = store;

    this.searchForm = formBuilder.group({
      id: '', 
      vehicle: '', 
      driver: '', 
      place: '', 
      time: ''
    });
    this.columns = Object.keys(this.searchForm.value).map(it => { return {'name': it}});

    this.searchSubscriber = this.searchForm.valueChanges.pipe(
      debounceTime(300), 
      distinctUntilChanged()
    ).subscribe(() => {
      this.onFilter();
    })
  }

  onPage() {
    this.send();
  }

  onSort() {
    this.table.offset = 0;
    this.send();
  }

  onFilter() {
    this.table.offset = 0;
    this.send();
  }

  private send() {
    let params = new HttpParams();
    params = params.append('page', this.table.offset.toString());
    params = params.append('per_page', this.table.pageSize.toString());
    
    const sort = this.table.sorts && this.table.sorts[0] || null;
    if(sort) {
      params = params.append('order_type', sort.dir);
      params = params.append('order_field', sort.prop);
    }

    const filter = this.searchForm.value;
    for(let prop in filter) {
      if(filter[prop]) {
        params = params.append(prop, filter[prop]);
      }
    };
    this.stor.dispatch(new Search({params: params}));
  }
}