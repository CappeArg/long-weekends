/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UListComponent } from './uList.component';

describe('UListComponent', () => {
  let component: UListComponent;
  let fixture: ComponentFixture<UListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
