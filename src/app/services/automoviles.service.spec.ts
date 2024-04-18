import { TestBed } from '@angular/core/testing';

import { AutomovilesService } from './automoviles.service';

describe('AutomovilesService', () => {
  let service: AutomovilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutomovilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
