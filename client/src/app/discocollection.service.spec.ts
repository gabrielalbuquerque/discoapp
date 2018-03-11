import { TestBed, inject } from '@angular/core/testing';

import { DiscocollectionService } from './discocollection.service';

describe('DiscocollectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiscocollectionService]
    });
  });

  it('should be created', inject([DiscocollectionService], (service: DiscocollectionService) => {
    expect(service).toBeTruthy();
  }));
});
