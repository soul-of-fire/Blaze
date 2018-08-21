import { DynamicFormGroupModel } from "@ng-dynamic-forms/core";
import { FormGeneratorService } from "src/app/common/form-generator/shared/form-generator.service";

export class GroupType {
  public create(element: any, service: FormGeneratorService) {
    const children = service.createGroup(element.children);
    return new DynamicFormGroupModel({
      id: element.id,
      group: children
    });
  }
}
