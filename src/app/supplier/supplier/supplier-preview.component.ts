import { Component, OnInit, OnDestroy } from '@angular/core';
import { takeUntil } from 'rxjs/operators';

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
    const supplier = new Supplier(this.route.snapshot.data.supplier);
    this.buildForm(supplier, true);
  }
}
