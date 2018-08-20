import { DynamicSelectModel } from "@ng-dynamic-forms/core";

export class SelectType {
  public create(col: any) {
    return new DynamicSelectModel({
      id: col.name,
      options: col.dropdownData.map((option: any) => ({
        label: option.label,
        value: option.value
      })) || []
    });
  }
}
