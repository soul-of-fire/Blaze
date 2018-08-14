import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule } from '@angular/forms';

import { DynamicTableComponent } from 'src/app/common/dynamic-table/dynamic-table/dynamic-table.component';
import { CapitalizeFirstPipe } from 'src/app/common/dynamic-table/shared/pipes/capitalize-first.pipe';
import { DynamicTableService } from './shared/dynamic-table.service';
import { ConfirmModule } from 'src/app/common/confirm/confirm.module';
import { FieldComponent } from 'src/app/common/dynamic-table/field/field.component';
import { DynamicFormsCoreModule } from '@ng-dynamic-forms/core';
import { DynamicFormsNGBootstrapUIModule } from '@ng-dynamic-forms/ui-ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    DynamicFormsCoreModule.forRoot(), 
    DynamicFormsNGBootstrapUIModule,
    ConfirmModule
  ],
  declarations: [
    DynamicTableComponent,
    CapitalizeFirstPipe,
    FieldComponent
  ],
  providers: [
    DynamicTableService
  ],
  exports: [
    DynamicTableComponent
  ]
})
export class DynamicTableModule { }
