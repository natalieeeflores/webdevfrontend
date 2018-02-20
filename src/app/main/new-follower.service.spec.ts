import { TestBed, inject } from '@angular/core/testing';

import { NewFollowerService } from './new-follower.service';

describe('NewFollowerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewFollowerService]
    });
  });

  it('should be created', inject([NewFollowerService], (service: NewFollowerService) => {
    expect(service).toBeTruthy();
  }));
});
