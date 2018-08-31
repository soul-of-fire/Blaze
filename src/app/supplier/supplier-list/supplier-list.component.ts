import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { takeUntil, filter } from 'rxjs/operators';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';

import { Base } from '../../root/shared/common/base';
import { Observable, BehaviorSubject } from 'rxjs';
import { Supplier } from 'src/app/supplier/shared/models/supplier';
import { Search, Remove } from 'src/app/supplier/shared/store/supplier-store';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css']
})
export class SupplierListComponent extends Base implements OnInit, OnDestroy {
  rows$: Observable<any>;
  config = [
    {name: 'id', type: 'string'},
    {name: 'name', type: 'select', dropdownData: [{label: 'All', value: ''}, {label: 'Kamara', value: 'Kamara'}, {label: 'Name', value: 'Name'}]},
    {name: 'address', type: 'string'},
    {name: 'phone', type: 'string'},
    {name: 'email', type: 'string'},
    {name: 'contact', type: 'string'},
    {name: 'priority', type: 'number'},
    {name: 'created', type: 'date'},
    {name: 'site', isPerse: true},
  ];
  
  @ViewChild('cell') cell;

  constructor(protected store: Store<any>, private router: Router, private route: ActivatedRoute) {
    super();
  }

  ngOnInit() {
    this.rows$ = this.store.select('supplier', 'suppliers').pipe(takeUntil(this.destroy$));
  }
  
  onSearch(options: any) {
    this.store.dispatch(new Search(options));
  }
  
  onSelect(table) {
    this.router.navigate(['supplier', 'preview', table.selected[0].id]);
  }

  onEdit(row) {
    this.router.navigate(['supplier', 'edit', row.id]);
  }

  onRemove(row) {
    this.store.dispatch(new Remove(row));
  }

  create() {
    this.router.navigate(['supplier', 'create']);
  }
}
