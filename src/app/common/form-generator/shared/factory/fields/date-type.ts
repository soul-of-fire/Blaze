import { DynamicDatePickerModel } from '@ng-dynamic-forms/core';
import { BaseType } from './base-type';

export class DateType extends BaseType {
  public createGroup(element: any) {
    const obj = {
      id: element.id,
      label: element.label,
      placeholder: 'Choose',
      toggleIcon: 'assets/icons/calendar.jpg'
    }
    element.validators && this.addValidators(element, obj);
    return new DynamicDatePickerModel(obj);
  }

  public createLayout(element: any, presentation: any) {
    presentation[element.id] = {
      element: {
        "host": "col-md-6"
      }
    }
  }
}
