import { DynamicSelectModel } from "@ng-dynamic-forms/core";
import { BaseType } from "./base-type";

export class SelectType extends BaseType {
  public createGroup(element: any) {
    const obj = {
      id: element.id,
      label: element.label,
      options: element.dropdownData.map((option: any) => ({
        label: option.label,
        value: option.value
      })) || []
    }
    element.validators && this.addValidators(element, obj);
    return new DynamicSelectModel(obj);
  }

  public createLayout(element: any, presentation: any) {
    presentation[element.id] = {
      element: {
        "host": "col-md-6"
      }
    }
  }
}
