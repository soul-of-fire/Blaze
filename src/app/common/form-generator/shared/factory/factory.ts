
import { DynamicFormControlModel } from '@ng-dynamic-forms/core';
import { GroupType } from 'src/app/common/form-generator/shared/factory/fields/group-type';
import { FormGeneratorService } from 'src/app/common/form-generator/shared/form-generator.service';
import { DateType } from 'src/app/common/form-generator/shared/factory/fields/date-type';
import { SelectType } from 'src/app/common/form-generator/shared/factory/fields/select-type';
import { StringType } from 'src/app/common/form-generator/shared/factory/fields/string-type';

export class Factory {
  public static createType(type: string): any {
    let field;
    switch (type) {
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
    return field;
  }
}
