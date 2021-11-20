import { TestBed } from '@angular/core/testing';

import { APIInterceptor } from './api.interceptor';

describe('APIInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      APIInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: APIInterceptor = TestBed.inject(APIInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
