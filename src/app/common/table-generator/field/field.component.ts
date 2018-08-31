import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFormControlModel } from '@ng-dynamic-forms/core';
import { FormGeneratorService } from 'src/app/common/form-generator/shared/form-generator.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {
  @Input() col: any;
  @Input() formGroup: FormGroup;
  @Input() sort: any;

  formModel: DynamicFormControlModel[];

  constructor(protected formGeneratorService: FormGeneratorService) { }

  ngOnInit() {
    const field = [Object.assign({}, this.col)].map(field => {field.label = ''; return field});
    this.formGeneratorService.build(of(field), of({})).subscribe((data: any) => {
      this.formModel = data.formModel;
    });
  }
}
