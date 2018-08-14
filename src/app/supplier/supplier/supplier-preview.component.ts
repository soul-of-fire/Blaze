import { Component, OnInit, OnDestroy } from '@angular/core';
import { withLatestFrom, takeUntil } from 'rxjs/operators';

import { Supplier } from 'src/app/supplier/shared/models/supplier';
import { SupplierEditComponent } from 'src/app/supplier/supplier/supplier-edit.component';

@Component({
  selector: 'app-supplier-preview',
  templateUrl: './supplier-create.component.html',
  styleUrls: ['./supplier-create.component.css']
})
export class SupplierPreviewComponent extends SupplierEditComponent implements OnInit, OnDestroy {
  label = 'Preview';
  isSubmit = false;

  ngOnInit() {
    this.formGroup = this.formService.createFormGroup(this.formModel);
    this.formGroup.patchValue(new Supplier(this.route.snapshot.data.supplier));
    this.formGroup.disable();
  }
}
