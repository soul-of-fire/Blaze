import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTableModule } from 'src/app/common/dynamic-table/dynamic-table.module';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { StoreStub } from '../../common/test-helper/store';
import { SupplierListComponent } from 'src/app/supplier/supplier-list/supplier-list.component';

describe('SupplierListComponent', () => {
  let component: SupplierListComponent;
  let fixture: ComponentFixture<SupplierListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DynamicTableModule,
        RouterModule
      ],
      declarations: [ 
        SupplierListComponent,
        { provide: Store, useClass: StoreStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
