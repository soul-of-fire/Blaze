import { Component, OnInit, Input } from '@angular/core';
import { FormGeneratorService } from 'src/app/common/form-generator/shared/form-generator.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.css']
})
export class FormGeneratorComponent implements OnInit {
  @Input() form$: Observable<any>;
  @Input() layout$: Observable<any>;

  constructor(private formGeneratorService: FormGeneratorService) { }

  ngOnInit() {
    this.form$ = this.formGeneratorService.build(this.form$, this.layout$);
  }
}
