import { TestBed } from '@angular/core/testing';

import { WishlishtService } from './wishlisht.service';

describe('WishlishtService', () => {
  let service: WishlishtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WishlishtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
