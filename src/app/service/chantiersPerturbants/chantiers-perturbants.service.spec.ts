/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ChantiersPerturbantsService } from './chantiers-perturbants.service';

describe('Service: ChantiersPerturbants', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChantiersPerturbantsService]
    });
  });

  it('should ...', inject([ChantiersPerturbantsService], (service: ChantiersPerturbantsService) => {
    expect(service).toBeTruthy();
  }));
});
