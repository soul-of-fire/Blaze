import { DynamicDatePickerModel } from '@ng-dynamic-forms/core';

export class DateType {
  public create(element: any) {
    return new DynamicDatePickerModel({
      id: element.name,
      label: element.label,
      placeholder: 'Choose',
      toggleIcon: 'assets/icons/calendar.jpg'
    });
  }
}
