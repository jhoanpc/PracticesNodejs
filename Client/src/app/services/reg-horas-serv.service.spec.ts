import { TestBed } from '@angular/core/testing';

import { RegHorasServService } from './reg-horas-serv.service';

describe('RegHorasServService', () => {
  let service: RegHorasServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegHorasServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
