/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EclairagePublicService } from './eclairage-public.service';

describe('Service: EclairagePublic', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EclairagePublicService]
    });
  });

  it('should ...', inject([EclairagePublicService], (service: EclairagePublicService) => {
    expect(service).toBeTruthy();
  }));
});
