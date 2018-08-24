import { DynamicSelectModel } from "@ng-dynamic-forms/core";

export class SelectType {
  public create(element: any) {
    return new DynamicSelectModel({
      id: element.name,
      label: element.label,
      options: element.dropdownData.map((option: any) => ({
        label: option.label,
        value: option.value
      })) || []
    });
  }
}
