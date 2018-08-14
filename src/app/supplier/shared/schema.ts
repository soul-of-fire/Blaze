import {
    DynamicFormControlModel,
    DynamicInputModel,
    DynamicDatePickerModel,
    DYNAMIC_FORM_CONTROL_INPUT_TYPE_NUMBER
} from "@ng-dynamic-forms/core";

export const FORM: DynamicFormControlModel[] = [
    new DynamicInputModel({
        id: "name",
        label: "Name",
        validators: {
            required: null
        },
        errorMessages: {
            required: "{{ label }} is required."
        }
    }),
    new DynamicInputModel({
        id: "address",
        label: "Address",
        validators: {
            required: null
        },
        errorMessages: {
            required: "{{ label }} is required."
        }
    }),
    new DynamicInputModel({
        id: "phone",
        label: "Phone",
        validators: {
            required: null
        },
        errorMessages: {
            required: "{{ label }} is required."
        }
    }),
    new DynamicInputModel({
        id: "fax",
        label: "Fax",
        validators: {
            required: null
        },
        errorMessages: {
            required: "{{ label }} is required."
        }
    }),
    new DynamicInputModel({
        id: "email",
        label: "Email",
        validators: {
            required: null
        },
        errorMessages: {
            required: "{{ label }} is required."
        }
    }),
    new DynamicInputModel({
        id: "contact",
        label: "Contact",
        validators: {
            required: null
        },
        errorMessages: {
            required: "{{ label }} is required."
        }
    }),
    new DynamicInputModel({
        id: "priority",
        label: "Priority",
        inputType: DYNAMIC_FORM_CONTROL_INPUT_TYPE_NUMBER,
        validators: {
            required: null
        },
        errorMessages: {
            required: "{{ label }} is required."
        }
    }),
    new DynamicDatePickerModel({
        id: "created",
        label: "Date",
        placeholder: 'Choose',
        toggleIcon: 'assets/icons/calendar.jpg'
    })
];

export const FORM_LAYOUT = {
    "name": {
        "element": {
            "container": "input-element-container row",
            "label": "input-element-label col-sm-2 col-form-label",
        },
        "grid": {
            "control": "input-grid-control col-sm-10",
        }
    },
    "address": {
        "element": {
            "container": "input-element-container row",
            "label": "input-element-label col-sm-2 col-form-label",
        },
        "grid": {
            "control": "input-grid-control col-sm-10",
        }
    },
    "phone": {
        "element": {
            "container": "input-element-container row",
            "label": "input-element-label col-sm-2 col-form-label",
        },
        "grid": {
            "control": "input-grid-control col-sm-10",
        }
    },
    "fax": {
        "element": {
            "container": "input-element-container row",
            "label": "input-element-label col-sm-2 col-form-label",
        },
        "grid": {
            "control": "input-grid-control col-sm-10",
        }
    },
    "email": {
        "element": {
            "container": "input-element-container row",
            "label": "input-element-label col-sm-2 col-form-label",
        },
        "grid": {
            "control": "input-grid-control col-sm-10",
        }
    },
    "contact": {
        "element": {
            "container": "input-element-container row",
            "label": "input-element-label col-sm-2 col-form-label",
        },
        "grid": {
            "control": "input-grid-control col-sm-10",
        }
    },
    "priority": {
        "element": {
            "container": "input-element-container row",
            "label": "input-element-label col-sm-2 col-form-label",
        },
        "grid": {
            "control": "input-grid-control col-sm-10",
        }
    },
    "created": {
        "element": {
            "container": "input-element-container row",
            "label": "input-element-label col-sm-2 col-form-label",
        },
        "grid": {
            "control": "input-grid-control col-sm-10",
        }
    }

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
};