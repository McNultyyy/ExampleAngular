import { TestBed, inject } from '@angular/core/testing';

import { MaxHitCalcService } from './max-hit-calc.service';

describe('MaxHitCalcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaxHitCalcService]
    });
  });

  it('should be created', inject([MaxHitCalcService], (service: MaxHitCalcService) => {
    expect(service).toBeTruthy();
  }));
});
