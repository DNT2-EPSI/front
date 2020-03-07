/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChantiersPerturbantsComponent } from './chantiers-perturbants.component';

describe('ChantiersPerturbantsComponent', () => {
  let component: ChantiersPerturbantsComponent;
  let fixture: ComponentFixture<ChantiersPerturbantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChantiersPerturbantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChantiersPerturbantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
