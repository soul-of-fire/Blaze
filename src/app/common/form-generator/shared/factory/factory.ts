
import { DynamicFormControlModel } from '@ng-dynamic-forms/core';
import { DateType } from 'src/app/common/table-generator/field/shared/factory/fields/date-type';
import { SelectType } from 'src/app/common/table-generator/field/shared/factory/fields/select-type';
import { StringType } from 'src/app/common/table-generator/field/shared/factory/fields/string-type';
import { GroupType } from 'src/app/common/form-generator/shared/factory/fields/group-type';
import { FormGeneratorService } from 'src/app/common/form-generator/shared/form-generator.service';

export class Factory {
  public static createField(element: any, service: FormGeneratorService): DynamicFormControlModel {
    let field;
    switch (element.type) {
      case 'group':
        field = new GroupType();
      break;
      case 'date':
        field = new DateType();
        break;
      case 'select':
        field = new SelectType();
        break;
      default:
        field = new StringType();
    }
    return field.create(element, service);
  }
}
