/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TextHComponent } from './h1.component';

describe('TextComponent', () => {
  let component: TextHComponent;
  let fixture: ComponentFixture<TextHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
