import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormsCoreModule } from '@ng-dynamic-forms/core';
import { DynamicFormsNGBootstrapUIModule } from '@ng-dynamic-forms/ui-ng-bootstrap';

import { FormGeneratorService } from 'src/app/common/form-generator/shared/form-generator.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DynamicFormsCoreModule.forRoot(),
    DynamicFormsNGBootstrapUIModule,
  ],
  declarations: [
    
  ],
  exports: [
    
  ],
  providers: [
    FormGeneratorService
  ]
})
export class FormGeneratorModule { }
