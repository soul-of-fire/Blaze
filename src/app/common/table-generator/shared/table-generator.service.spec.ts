import { TestBed, inject } from '@angular/core/testing';
import { TableGeneratorService } from 'src/app/common/table-generator/shared/table-generator.service';

describe('DynamicTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TableGeneratorService]
    });
  });

  it('should be created', inject([TableGeneratorService], (service: TableGeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
