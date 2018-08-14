import { DynamicDatePickerModel } from '@ng-dynamic-forms/core';

export class DateType {
  public create(col: any) {
    return new DynamicDatePickerModel({
      id: col.name,
      placeholder: 'Choose',
      toggleIcon: 'assets/icons/calendar.jpg'
    });
  }
}
