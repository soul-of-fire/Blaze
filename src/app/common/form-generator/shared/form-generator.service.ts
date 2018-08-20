import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Factory } from 'src/app/common/form-generator/shared/factory/factory';

@Injectable({
  providedIn: 'root'
})
export class FormGeneratorService {

  constructor() { }

  public build(schema$: Observable<any>) {
    return schema$.pipe(
      map((data: Array<any>) => {
        const group = this.createGroup(data);
        return {
          formModel: [],
          formGroup: {}
        }
      })
    )
  }

  private createGroup(data) {
    return data.map((element: any) => {
      return Factory.createField(element);
    })
  }
}
