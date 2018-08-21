import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Factory } from 'src/app/common/form-generator/shared/factory/factory';
import { DynamicFormService } from '@ng-dynamic-forms/core';

@Injectable({
  providedIn: 'root'
})
export class FormGeneratorService {

  constructor(public formService: DynamicFormService) { }

  public build(schema$: Observable<any>) {
    return schema$.pipe(
      map((data: Array<any>) => {
        const group = this.createGroup(data);
        return {
          formModel: group,
          formGroup: this.formService.createFormGroup(group)
        }
      })
    )
  }

  public createGroup(data: Array<any>) {
    return data.map((element: any) => {
      return Factory.createField(element, this);
    })
  }
}
