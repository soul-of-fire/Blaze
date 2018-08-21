import { DynamicInputModel } from "@ng-dynamic-forms/core";

export class StringType {
  public create(element: any) {
    return new DynamicInputModel({
      id: element.id,
      label: element.label
    });
  }
}
