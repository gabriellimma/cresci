import { TestBed } from '@angular/core/testing';

import { DoacaoService } from './doacao.service';

describe('DoacaoService', () => {
  let service: DoacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
