/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DetailedCostTableComponent } from './detailed-cost-table.component';

describe('DetailedCostTableComponent', () => {
  let component: DetailedCostTableComponent;
  let fixture: ComponentFixture<DetailedCostTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedCostTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedCostTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
// test calculations
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
