import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TableGeneratorComponent } from 'src/app/common/table-generator/table-generator/table-generator.component';


describe('DynamicTableComponent', () => {
  let component: TableGeneratorComponent;
  let fixture: ComponentFixture<TableGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
