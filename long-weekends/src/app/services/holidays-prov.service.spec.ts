import { TestBed } from '@angular/core/testing';

import { HolidaysProvService } from './holidays-prov.service';

describe('HolidaysProvService', () => {
  let service: HolidaysProvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HolidaysProvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
