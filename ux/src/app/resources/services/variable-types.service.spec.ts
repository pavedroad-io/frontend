import { TestBed } from '@angular/core/testing';

import { VariableTypesService } from './variable-types.service';

describe('VariableTypesService', () => {
  let service: VariableTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VariableTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
