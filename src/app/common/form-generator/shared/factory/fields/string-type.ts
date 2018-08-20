import { DynamicInputModel } from "@ng-dynamic-forms/core";

export class StringType {
  public create(col: any) {
    return new DynamicInputModel({
      id: col.name
    });
  }
}
