import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { withLatestFrom, takeUntil } from 'rxjs/operators';

import { Supplier } from 'src/app/supplier/shared/models/supplier';
import { Edit } from 'src/app/supplier/shared/store/supplier-store';
import { SupplierCreateComponent } from 'src/app/supplier/supplier/supplier-create.component';
import { DateModel } from 'src/app/common/dynamic-table/dynamic-table/shared/date-model';

@Component({
  selector: 'app-supplier-edit',
  templateUrl: './supplier-create.component.html',
  styleUrls: ['./supplier-create.component.css']
})
export class SupplierEditComponent extends SupplierCreateComponent implements OnInit, OnDestroy {
  supplier: Supplier;
  label = 'Edit';
  isSubmit = true;

  ngOnInit() {
    this.formGroup = this.formService.createFormGroup(this.formModel);
    this.supplier = new Supplier(this.route.snapshot.data.supplier);
    this.formGroup.patchValue(this.supplier);
  }

  submit() {
    const merged = Object.assign(this.supplier, this.formGroup.getRawValue());
    this.store.dispatch(new Edit(merged.transform()));
  }
}
