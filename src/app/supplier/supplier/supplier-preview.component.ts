import { Component, OnInit, OnDestroy } from '@angular/core';
import { takeUntil } from 'rxjs/operators';

import { FORM, LAYOUT } from 'src/app/supplier/shared/schema';
import { Supplier } from 'src/app/supplier/shared/models/supplier';
import { SupplierEditComponent } from 'src/app/supplier/supplier/supplier-edit.component';
import { of } from 'rxjs';

@Component({
  selector: 'app-supplier-preview',
  templateUrl: './supplier-create.component.html',
  styleUrls: ['./supplier-create.component.css']
})
export class SupplierPreviewComponent extends SupplierEditComponent implements OnInit, OnDestroy {
  label = 'Preview';
  isSubmit = false;

  ngOnInit() {
    this.formGeneratorService.build(of(FORM), of(LAYOUT)).pipe(
      takeUntil(this.destroy$)
    ).subscribe((data: any) => {
      this.formGroup = data.formGroup;
      this.formModel = data.formModel;
      this.formLayout = data.formLayout;
      this.formGroup.get('group').patchValue(new Supplier(this.route.snapshot.data.supplier));
      this.formGroup.disable();
    });
  }
}
