import { TestBed } from '@angular/core/testing';

import { SharedBehaviorService } from './shared-behavior.service';

describe('SharedBehaviorService', () => {
  let service: SharedBehaviorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedBehaviorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
