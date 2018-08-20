import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGeneratorComponent } from 'src/app/common/form-generator/form-generator/form-generator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormsCoreModule } from '@ng-dynamic-forms/core';
import { DynamicFormsNGBootstrapUIModule } from '@ng-dynamic-forms/ui-ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DynamicFormsCoreModule.forRoot(), 
    DynamicFormsNGBootstrapUIModule,
  ],
  declarations: [
    FormGeneratorComponent
  ],
  exports: [
    FormGeneratorComponent
  ]
})
export class FormGeneratorModule { }
