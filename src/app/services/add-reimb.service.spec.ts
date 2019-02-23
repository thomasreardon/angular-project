import { TestBed } from '@angular/core/testing';

import { AddReimbService } from './add-reimb.service';

describe('AddReimbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddReimbService = TestBed.get(AddReimbService);
    expect(service).toBeTruthy();
  });
});
