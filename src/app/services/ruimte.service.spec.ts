import { TestBed } from '@angular/core/testing';

import { RuimteService } from './ruimte.service';

describe('RuimteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RuimteService = TestBed.get(RuimteService);
    expect(service).toBeTruthy();
  });
});
