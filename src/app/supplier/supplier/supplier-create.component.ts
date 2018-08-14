import { Component, OnInit, OnDestroy } from '@angular/core';
import { DynamicFormControlModel, DynamicFormService, DynamicFormLayout } from '@ng-dynamic-forms/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { Base } from 'src/app/root/shared/common/base';
import { FORM, FORM_LAYOUT } from 'src/app/supplier/shared/schema';
import { SupplierService } from 'src/app/supplier/shared/common/supplier.service';
import { Supplier } from 'src/app/supplier/shared/models/supplier';
import { Create } from 'src/app/supplier/shared/store/supplier-store';

@Component({
  selector: 'app-supplier-create',
  templateUrl: './supplier-create.component.html',
  styleUrls: ['./supplier-create.component.css']
})
export class SupplierCreateComponent extends Base implements OnInit, OnDestroy {

  formModel: DynamicFormControlModel[] = FORM;
  formLayout: DynamicFormLayout = FORM_LAYOUT;
  formGroup: FormGroup;
  label = 'Create';
  isSubmit = true;

  constructor(protected route: ActivatedRoute, 
              protected router: Router,
              protected store: Store<any>, 
              protected supplierService: SupplierService,
              protected formService: DynamicFormService) { 
    super();
  }

  ngOnInit() {
    this.formGroup = this.formService.createFormGroup(this.formModel);
    this.formGroup.patchValue(new Supplier({}));
  }

  submit() {
    this.store.dispatch(new Create(new Supplier(this.formGroup.getRawValue()).transform()));
  }

  cancel() {
    this.router.navigate(['../']);
  }
}
