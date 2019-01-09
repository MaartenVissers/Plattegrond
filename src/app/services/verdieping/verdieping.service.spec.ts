import { TestBed } from '@angular/core/testing';

import { VerdiepingService } from './verdieping.service';

describe('VerdiepingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VerdiepingService = TestBed.get(VerdiepingService);
    expect(service).toBeTruthy();
  });
});
