import { TestBed, inject } from '@angular/core/testing';

import { ClubDataService } from './club-data.service';

describe('ClubDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClubDataService]
    });
  });

  it('should be created', inject([ClubDataService], (service: ClubDataService) => {
    expect(service).toBeTruthy();
  }));
});
