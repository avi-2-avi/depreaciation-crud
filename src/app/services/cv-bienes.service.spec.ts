import { TestBed } from '@angular/core/testing';

import { CvBienesService } from './cv-bienes.service';

describe('CvBienesService', () => {
  let service: CvBienesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CvBienesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
