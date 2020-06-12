import { TestBed } from '@angular/core/testing';

import { CartOperatorService } from './cart-operator.service';

describe('CartOperatorService', () => {
  let service: CartOperatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartOperatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
