import { DynamicInputModelConfig, DynamicInputControlModelConfig } from "@ng-dynamic-forms/core";
import { FormGeneratorService } from "src/app/common/form-generator/shared/form-generator.service";

export abstract class BaseType {
  abstract createGroup(element: any, service: FormGeneratorService);
  abstract createLayout(element: any, presentation: any, service: FormGeneratorService);

  addValidators(element: any, obj: any) {
    obj['validators'] = element.validators;
    if (element.validators.hasOwnProperty('required')) {
      obj['errorMessages'] = {
        required: "{{ label }} is required."
      }
    }
  }
}