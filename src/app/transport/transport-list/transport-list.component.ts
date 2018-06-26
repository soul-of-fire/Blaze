import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Load } from '../shared/store/transport-store';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ServerSide } from 'src/app/transport/transport-list/shared/server-side';

@Component({
  selector: 'app-transport-list',
  templateUrl: './transport-list.component.html',
  styleUrls: ['./transport-list.component.css']
})
export class TransportListComponent extends ServerSide implements OnInit, OnDestroy {
  tableSubscriber: any;
  rows: any;
  
  constructor(private store: Store<any>, private formBuilder: FormBuilder) {
    super(formBuilder, store);
  }

  ngOnInit() {
    this.store.dispatch(new Load());
    this.tableSubscriber = this.store.select('transport').subscribe((data: any) => {
      this.rows = data;
    });
  }

  ngOnDestroy() {
    this.tableSubscriber.unsubscribe();
    this.searchSubscriber.unsubscribe();
  }

  onSelect(row: any) {
    // this.router.navigate(['/organizations', row.selected[0].id]);
  }

  onEdit($event, row) {
    $event.stopPropagation();
    // this.router.navigate(['/organizations', row.id, 'edit']);
  }

  onRemove($event, row) {
    $event.stopPropagation();
    console.log(row);
  }
}
