/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LaDemarcheComponent } from './laDemarche.component';

describe('LaDemarcheComponent', () => {
  let component: LaDemarcheComponent;
  let fixture: ComponentFixture<LaDemarcheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaDemarcheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaDemarcheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
