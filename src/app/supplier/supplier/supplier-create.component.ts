import { Component, OnInit, OnDestroy } from '@angular/core';
import { DynamicFormControlModel, DynamicFormService, DynamicFormLayout } from '@ng-dynamic-forms/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { Base } from 'src/app/root/shared/common/base';
import { FORM, LAYOUT } from 'src/app/supplier/shared/schema';
import { SupplierService } from 'src/app/supplier/shared/common/supplier.service';
import { Supplier } from 'src/app/supplier/shared/models/supplier';
import { Create } from 'src/app/supplier/shared/store/supplier-store';
import { Observable, of } from 'rxjs';
import { FormGeneratorService } from 'src/app/common/form-generator/shared/form-generator.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-supplier-create',
  templateUrl: './supplier-create.component.html',
  styleUrls: ['./supplier-create.component.css']
})
export class SupplierCreateComponent extends Base implements OnInit, OnDestroy {
  protected formModel: DynamicFormControlModel[];
  protected formGroup: FormGroup;
  protected formLayout: DynamicFormLayout;

  label = 'Create';
  isSubmit = true;

  constructor(protected route: ActivatedRoute, 
              protected router: Router,
              protected store: Store<any>, 
              protected formGeneratorService: FormGeneratorService) { 
    super();
  }

  ngOnInit() {
    this.buildForm(new Supplier());
  }
  
  protected buildForm(supplier: Supplier, disable: boolean = false): void {
    this.formGeneratorService.build(of(FORM), of(LAYOUT)).pipe(
      takeUntil(this.destroy$)
    ).subscribe((data: any) => {
      this.formGroup = data.formGroup;
      this.formModel = data.formModel;
      this.formLayout = data.formLayout;
      this.formGroup.get('group').patchValue(supplier);
      disable && this.formGroup.disable();
    });
  }

  protected submit(): void {
    this.store.dispatch(new Create(new Supplier(this.formGroup.getRawValue().group)));
  }

  protected cancel(): void {
    this.router.navigate(['../']);
  }
}
