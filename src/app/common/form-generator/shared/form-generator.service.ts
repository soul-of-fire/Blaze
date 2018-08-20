import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormGeneratorService {

  constructor() { }

  public build(schema$: Observable<any>) {
    return schema$.pipe(
      map((data: any) => {
        
        return {
          formModel: [],
          formGroup: {}
        }
      })
    )
  }
}
