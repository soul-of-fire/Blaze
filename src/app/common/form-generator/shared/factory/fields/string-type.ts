import { DynamicInputModel } from "@ng-dynamic-forms/core";
import { BaseType } from "./base-type";

export class StringType extends BaseType {
  public createGroup(element: any) {
    const obj = {
      id: element.id,
      label: element.label
    }
    element.validators && this.addValidators(element, obj);
    return new DynamicInputModel(obj);
  }

  public createLayout(element: any, presentation: any) {
    presentation[element.id] = {
      element: {
        "host": "col-md-6"
      }
    }
  }
}
