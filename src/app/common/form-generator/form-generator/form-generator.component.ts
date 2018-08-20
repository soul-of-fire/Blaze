import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFormControlModel, DynamicFormService, DynamicInputModel, DynamicFormLayout } from '@ng-dynamic-forms/core';
import { Factory } from 'src/app/common/form-generator/shared/factory/factory';

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.css']
})
export class FormGeneratorComponent implements OnInit {

  FORM: DynamicFormControlModel[] = [
    new DynamicInputModel({
      id: "name",
      label: "Name",
      validators: {
        required: null
      },
      errorMessages: {
        required: "{{ label }} is required."
      }
    }),
  ];

  FORM_LAYOUT = {
    "name": {
      "element": {
        "container": "input-element-container row",
        "label": "input-element-label col-sm-2 col-form-label",
      },
      "grid": {
        "control": "input-grid-control col-sm-10",
      }
    },
  };

  formModel: DynamicFormControlModel[] = this.FORM;
  formGroup: FormGroup;
  formLayout: DynamicFormLayout = this.FORM_LAYOUT;

  constructor(private formService: DynamicFormService) { }

  ngOnInit() {
    this.formGroup = this.formService.createFormGroup(this.formModel);
  }

}
