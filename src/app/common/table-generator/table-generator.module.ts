import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule } from '@angular/forms';

import { ConfirmModule } from 'src/app/common/confirm/confirm.module';
import { DynamicFormsCoreModule } from '@ng-dynamic-forms/core';
import { DynamicFormsNGBootstrapUIModule } from '@ng-dynamic-forms/ui-ng-bootstrap';
import { TableGeneratorComponent } from 'src/app/common/table-generator/table-generator/table-generator.component';
import { FieldComponent } from 'src/app/common/table-generator/field/field.component';
import { TableGeneratorService } from 'src/app/common/table-generator/shared/table-generator.service';

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
    TableGeneratorComponent,
    FieldComponent
  ],
  providers: [
    TableGeneratorService
  ],
  exports: [
    TableGeneratorComponent
  ]
})
export class TableGeneratorModule { }
