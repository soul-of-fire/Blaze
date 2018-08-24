import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, withLatestFrom, filter } from 'rxjs/operators';
import { Factory } from 'src/app/common/form-generator/shared/factory/factory';
import { DynamicFormService } from '@ng-dynamic-forms/core';

@Injectable({
  providedIn: 'root'
})
export class FormGeneratorService {

  constructor(public formService: DynamicFormService) { }

  public build(schema$: Observable<any>, layout$: Observable<any>) {
    return schema$.pipe(
      withLatestFrom(layout$),
      map(([schema, presentation]) => {
        const group = this.createGroup(schema);
        const layout = this.createLayout(schema, presentation);
        return {
          formModel: group,
          formGroup: this.formService.createFormGroup(group),
          formLayout: layout
        }
      })
    )
  }

  public createGroup(data: Array<any>) {
    return data.map((element: any) => {
      return Factory.createType(element.type).createGroup(element, this);
    })
  }

  public createLayout(data: Array<any>, presentation: any) {
    data.forEach((element: any) => {
      !presentation[element.id] && Factory.createType(element.type).createLayout(element, presentation, this);
    })
    return presentation;
  }
}
