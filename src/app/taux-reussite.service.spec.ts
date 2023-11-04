import { TestBed } from '@angular/core/testing';

import { TauxReussiteService } from './taux-reussite.service';

describe('TauxReussiteService', () => {
  let service: TauxReussiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TauxReussiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
