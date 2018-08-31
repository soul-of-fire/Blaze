import { of } from "rxjs";

export let shema$: (...args: any[]) => any = function (...args: any[]): any {
    return of([
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
                    "id": "address",
                    "label": "Address",
                    "validators": {
                        "required": null
                    }
                },
                {
                    "type": "string",
                    "id": "phone",
                    "label": "Phone",
                    "validators": {
                        "required": null
                    }
                },
                {
                    "type": "string",
                    "id": "fax",
                    "label": "Fax",
                    "validators": {
                        "required": null
                    }
                },
                {
                    "type": "string",
                    "id": "email",
                    "label": "Email",
                    "validators": {
                        "required": null
                    }
                },
                {
                    "type": "select",
                    "id": "contact",
                    "label": "Contact",
                    "dropdownData": args[0],
                    "validators": {
                        "required": null
                    }
                },
                {
                    "type": "string",
                    "id": "priority",
                    "label": "Priority",
                    "validators": {
                        "required": null
                    }
                },
                {
                    "type": "date",
                    "id": "created",
                    "label": "Created",
                    "validators": {
                        "required": null
                    }
                }
            ]
        }
    ]);
};

export let layout$: (...args: any[]) => any = function (...args: any[]): any {
    return of({});
};

// "test": {
//     "element": {
//         "container": "input-element-container row",
//         "control": "input-element-control",
//         "errors": "input-element-errors",
//         "group": "input-element-group",
//         "hint": "input-element-hint",
//         "host": "input-element-host",
//         "label": "input-element-label col-sm-2 col-form-label",
//         "option": "input-element-option"
//     },
//     "grid": {
//         "container": "input-grid-container",
//         "control": "input-grid-control col-sm-10",
//         "errors": "input-grid-errors",
//         "group": "input-grid-group",
//         "hint": "input-grid-hint",
//         "host": "input-grid-host",
//         "label": "input-grid-label no",
//         "option": "input-grid-option"
//     }
// }
