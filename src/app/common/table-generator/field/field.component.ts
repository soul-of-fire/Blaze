import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFormControlModel, DynamicInputModel, DynamicFormService, DynamicDatePickerModel } from '@ng-dynamic-forms/core';
import { Factory } from './shared/factory/factory';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {
  @Input() col: any;
  @Input() formGroup: FormGroup;

  formModel: DynamicFormControlModel[];

  constructor(private formService: DynamicFormService) { }

  ngOnInit() {
    this.formModel = new Array(Factory.createField(this.col));
  }
}
