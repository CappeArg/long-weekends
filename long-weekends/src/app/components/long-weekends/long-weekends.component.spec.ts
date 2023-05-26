import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongWeekendsComponent } from './long-weekends.component';

describe('LongWeekendsComponent', () => {
  let component: LongWeekendsComponent;
  let fixture: ComponentFixture<LongWeekendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LongWeekendsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LongWeekendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
