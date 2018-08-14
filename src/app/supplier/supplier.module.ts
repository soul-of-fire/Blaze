import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DynamicFormsCoreModule } from "@ng-dynamic-forms/core";
import { DynamicFormsNGBootstrapUIModule } from "@ng-dynamic-forms/ui-ng-bootstrap";
import { ReactiveFormsModule } from '@angular/forms';

import { SupplierListComponent } from 'src/app/supplier/supplier-list/supplier-list.component';
import { DynamicTableModule } from 'src/app/common/dynamic-table/dynamic-table.module';
import { SupplierEffects } from 'src/app/supplier/shared/store/supplier-effects';
import { SupplierService } from 'src/app/supplier/shared/common/supplier.service';
import { SupplierEditResolver } from 'src/app/supplier/shared/common/supplier-edit-resolver';
import { suppliersReducer } from 'src/app/supplier/shared/store/supplier-store';
import { SupplierEditComponent } from 'src/app/supplier/supplier/supplier-edit.component';
import { SupplierCreateComponent } from 'src/app/supplier/supplier/supplier-create.component';
import { SupplierPreviewComponent } from 'src/app/supplier/supplier/supplier-preview.component';

const routes = [
  { path: '', component: SupplierListComponent },
  { path: 'create', component: SupplierCreateComponent },
  { path: 'edit/:id', component: SupplierEditComponent,
    resolve: {
      supplier: SupplierEditResolver
    }  
  },
  { path: 'preview/:id', component: SupplierPreviewComponent,
    resolve: {
      supplier: SupplierEditResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DynamicTableModule,
    DynamicFormsCoreModule.forRoot(), 
    DynamicFormsNGBootstrapUIModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('suppliers', suppliersReducer),
    EffectsModule.forFeature([SupplierEffects])
  ],
  declarations: [
    SupplierListComponent,
    SupplierEditComponent,
    SupplierCreateComponent,
    SupplierPreviewComponent
  ],
  providers: [
    SupplierService,
    SupplierEditResolver
  ]
})
export class SupplierModule { }
