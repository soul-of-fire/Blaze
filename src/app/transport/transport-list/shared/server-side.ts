import { BaseTable } from "src/app/transport/transport-list/shared/base-table";
import { FormGroup, FormBuilder } from "@angular/forms";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { Search } from "../../shared/store/transport-store";

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
    const page = `?page=${this.table.offset}&per_page=${this.table.pageSize}`;
    const sorts = this.table.sorts && this.table.sorts[0] || null;
    const sort = sorts ? '&order_type=' + sorts.dir + '&order_field=' + sorts.prop : '';
    const filters = this.searchForm.value;
    const filter = Object.keys(filters).reduce((accu, it) => { 
        accu += filters[it] ? `&${it}=${filters[it]}` : ''; 
        return accu
    }, '');
    console.log(page + sort + filter);
    this.stor.dispatch(new Search(page + sort + filter));
  }
}