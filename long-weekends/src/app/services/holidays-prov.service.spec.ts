import { TestBed } from '@angular/core/testing';

import { exececuteService } from './restService';

describe('exececuteService', () => {
  let service: exececuteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(exececuteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
