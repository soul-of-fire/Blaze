import { DynamicFormGroupModel } from "@ng-dynamic-forms/core";
import { FormGeneratorService } from "src/app/common/form-generator/shared/form-generator.service";
import { BaseType } from "./base-type";

export class GroupType extends BaseType {
  public createGroup(element: any, service: FormGeneratorService) {
    const children = service.createGroup(element.children);
    return new DynamicFormGroupModel({
      id: element.id,
      group: children
    });
  }

  public createLayout(element: any, presentation: any, service: FormGeneratorService) {
    presentation[element.id] = {
      element: {
        "control": "form-row"
      }
    }
    const children = service.createLayout(element.children, presentation);
  }
}
