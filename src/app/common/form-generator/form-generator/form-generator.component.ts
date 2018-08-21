import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFormControlModel, DynamicFormService, DynamicInputModel, DynamicFormLayout, DynamicFormGroupModel } from '@ng-dynamic-forms/core';
import { Factory } from 'src/app/common/form-generator/shared/factory/factory';
import { FormGeneratorService } from 'src/app/common/form-generator/shared/form-generator.service';
import { elements } from '../shared/data/data';
import { of } from 'rxjs';

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.css']
})
export class FormGeneratorComponent implements OnInit {

  FORM: DynamicFormControlModel[] = [
    new DynamicFormGroupModel({
      id: "group",
      group: [
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
        new DynamicInputModel({
          id: "title",
          label: "Title",
          validators: {
            required: null
          },
          errorMessages: {
            required: "{{ label }} is required."
          }
        }),
      ]
    }),
  ];

  FORM_LAYOUT = {
    "name": {
      element: {
        "host": "col-md-6"
      }
    },
    "title": {
      element: {
        "host": "col-md-6"
      }
    },
    "group": {
      element: {
        "control": "group-element-control form-row"
      }
    }
  };

  // formModel: DynamicFormControlModel[] = this.FORM;
  // formGroup: FormGroup;
  formModel: DynamicFormControlModel[];
  formGroup: FormGroup;
  formLayout: DynamicFormLayout = this.FORM_LAYOUT;

  constructor(private formService: DynamicFormService, private formGeneratorService: FormGeneratorService) { }

  ngOnInit() {
    // this.formGroup = this.formService.createFormGroup(this.formModel);
    const form$ = this.formGeneratorService.build(of(elements));
    form$.subscribe(data => {
      this.formModel = data.formModel;
      this.formGroup = data.formGroup;
    });
  }

}
