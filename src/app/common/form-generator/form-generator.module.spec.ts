import { FormGeneratorModule } from './form-generator.module';

describe('FormGeneratorModule', () => {
  let formGeneratorModule: FormGeneratorModule;

  beforeEach(() => {
    formGeneratorModule = new FormGeneratorModule();
  });

  it('should create an instance', () => {
    expect(formGeneratorModule).toBeTruthy();
  });
});
