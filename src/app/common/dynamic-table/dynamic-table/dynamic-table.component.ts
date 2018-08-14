import { Component, OnInit, OnDestroy, Input, Output, ViewChild, EventEmitter, ChangeDetectorRef, AfterViewChecked, ContentChild, TemplateRef, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Page } from 'src/app/common/dynamic-table/dynamic-table/shared/page';
import { Observable } from 'rxjs';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Base } from 'src/app/root/shared/common/base';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
import { Options } from 'src/app/supplier/shared/models/options';
import { DynamicTableService } from 'src/app/common/dynamic-table/shared/dynamic-table.service';
import { Payload } from '../../../supplier/shared/models/payload';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent extends Base implements OnInit, OnDestroy, AfterViewChecked {
  @Input() rows$: Observable<any>;
  @Input() config: any;
  @Input() pageSize: any;

  @Output() onSelect = new EventEmitter();
  @Output() onEdit = new EventEmitter();
  @Output() onRemove = new EventEmitter();
  @Output() onSearch = new EventEmitter();

  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ContentChild('parse') parse: TemplateRef<ElementRef>;

  rows: any;
  searchForm: FormGroup;
  columns: any[];
  page: Page = new Page();

  constructor(private store: Store<any>,
    private formBuilder: FormBuilder,
    private dynamicTableService: DynamicTableService,
    private router: Router,
    private cdRef: ChangeDetectorRef) {
    super();
  }

  ngOnInit() {
    this.page.pageSize = this.pageSize || 5;

    this.columns = this.config;

    this.searchForm = this.formBuilder.group(this.initSearchForm());

    this.searchForm.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.onFilter();
    })

    this.rows$.pipe(takeUntil(this.destroy$)).subscribe((data: Payload) => {
      this.rows = data.list;
      this.page.total = data.total;
      this.dynamicTableService.setState(data.state, this.page, this.searchForm);
    });
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  private initSearchForm() {
    return this.config.reduce((acc, cur) => {
      acc[cur.name] = '';
      return acc;
    }, {})
  }

  private select(data: any): void {
    data && data.selected && data.selected.length == 1 && this.onSelect.emit(data);
  }

  private edit($event: MouseEvent, row: any): void {
    $event.stopPropagation();
    this.onEdit.emit(row);
  }

  private remove(row: any): void {
    this.onRemove.emit(row);
  }

  private onPage(): void {
    this.send();
  }

  private onSort(): void {
    this.table.offset = 0;
    this.send();
  }

  private onFilter(): void {
    this.table.offset = 0;
    this.send();
  }

  private send(): void {
    this.onSearch.emit(this.dynamicTableService.setOptions(this.table, this.searchForm));
  }
}
