export interface DateModel {
  year: number;
  month: number;
  day: number;
}

export function instanceOfDateModel(object: any): object is DateModel {
  return object && object instanceof Object  && 'year' in object && 'month' in object && 'day' in object;
}

// export class DateModel {
//   public year: number; 
//   public month: number; 
//   public day: number;

//   constructor(value?: string) {
//     if(value) {
//       const date = new Date(value);
//       this.year = date.getFullYear();
//       this.month = date.getMonth() + 1;
//       this.day = date.getDate();
//     }
//   }

//   public toString() {
//     return `${this.year}-${this.month}-${this.day}`;
//   }
// }