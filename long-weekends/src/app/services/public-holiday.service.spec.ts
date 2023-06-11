/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PublicHolidayService } from './public-holiday.service';

describe('Service: PublicHoliday', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PublicHolidayService]
    });
  });

  it('should ...', inject([PublicHolidayService], (service: PublicHolidayService) => {
    expect(service).toBeTruthy();
  }));
});
