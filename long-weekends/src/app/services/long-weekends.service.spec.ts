/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LongWeekendsService } from './long-weekends.service';

describe('Service: LongWeekends', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LongWeekendsService]
    });
  });

  it('should ...', inject([LongWeekendsService], (service: LongWeekendsService) => {
    expect(service).toBeTruthy();
  }));
});
