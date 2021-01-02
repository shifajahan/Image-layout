import { TestBed } from '@angular/core/testing';

import { RowcolfetchService } from './rowcolfetch.service';

describe('RowcolfetchService', () => {
  let service: RowcolfetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RowcolfetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
