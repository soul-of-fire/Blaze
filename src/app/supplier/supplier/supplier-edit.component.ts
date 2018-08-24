import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';

import { FORM, LAYOUT } from 'src/app/supplier/shared/schema';
import { Supplier } from 'src/app/supplier/shared/models/supplier';
import { Edit } from 'src/app/supplier/shared/store/supplier-store';
import { SupplierCreateComponent } from 'src/app/supplier/supplier/supplier-create.component';
import { of } from 'rxjs';

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
    this.formGeneratorService.build(of(FORM), of(LAYOUT)).pipe(
      takeUntil(this.destroy$)
    ).subscribe((data: any) => {
      this.formGroup = data.formGroup;
      this.formModel = data.formModel;
      this.formLayout = data.formLayout;
      this.supplier = new Supplier(this.route.snapshot.data.supplier);
      this.formGroup.get('group').patchValue(this.supplier);
    });
  }

  submit() {
    const merged = Object.assign(this.supplier, this.formGroup.getRawValue().group);
    this.store.dispatch(new Edit(merged.transform()));
  }
}
