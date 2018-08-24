import { Component, OnInit } from '@angular/core';
import { DynamicFormService } from '@ng-dynamic-forms/core';
import { FormGeneratorService } from 'src/app/common/form-generator/shared/form-generator.service';
import { elements } from '../shared/data/data';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.css']
})
export class FormGeneratorComponent implements OnInit {

  form$: Observable<any>;

  constructor(private formService: DynamicFormService, private formGeneratorService: FormGeneratorService) { }

  ngOnInit() {
    this.form$ = this.formGeneratorService.build(of(elements), of({}));
  }

}
