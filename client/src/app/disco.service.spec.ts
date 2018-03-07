import { TestBed, inject } from '@angular/core/testing';

import { DiscoService } from './disco.service';

describe('DiscoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiscoService]
    });
  });

  it('should be created', inject([DiscoService], (service: DiscoService) => {
    expect(service).toBeTruthy();
  }));
});
