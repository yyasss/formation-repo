import { TestBed, inject } from '@angular/core/testing';

import { DateFormatterService } from './date-formatter.service';

describe('DateFormatterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DateFormatterService]
    });
  });

  it('should be created', inject([DateFormatterService], (service: DateFormatterService) => {
    expect(service).toBeTruthy();
  }));
});
