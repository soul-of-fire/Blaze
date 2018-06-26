import { ViewChild } from "@angular/core";
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Page } from "src/app/transport/transport-list/shared/page";

export class BaseTable {
  @ViewChild(DatatableComponent) table: DatatableComponent;
  
  page: Page = new Page();
  columns: any;
}