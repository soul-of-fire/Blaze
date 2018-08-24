import { Component, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.css']
})
export class PermissionComponent implements OnInit {
  form$: Observable<any> = of([
    {
      "type": "group",
      "id": "group",
      "children": [
        {
          "type": "string",
          "id": "name",
          "label": "Name",
          "validators": {
            "required": null
          }
        },
        {
          "type": "string",
          "id": "title",
          "label": "Title"
        }
      ]
    }
  ]);
  layout$: Observable<any> = of({});

  constructor() { }

  ngOnInit() {
  }

}
