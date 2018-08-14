import { Observable, from } from "rxjs";

export class StoreStub {
  select(some) {
    return from([
      {
        "id": "1",
        "vehicle": "Ferrary",
        "driver": "Shumaher",
        "place": "Germany",
        "date": "2018-03-27"
      },
      {
        "id": "2",
        "vehicle": "Mercedes",
        "driver": "Sena",
        "place": "Denmark",
        "date": ""
      },
      {
        "id": "3",
        "vehicle": "Honda",
        "driver": "Gozila",
        "place": "Japan",
        "date": "2018-01-25"
      }
    ])
  }
}