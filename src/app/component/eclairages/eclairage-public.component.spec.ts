/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EclairagePublicComponent } from './eclairage-public.component';

describe('EclairagePublicComponent', () => {
  let component: EclairagePublicComponent;
  let fixture: ComponentFixture<EclairagePublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EclairagePublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EclairagePublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
