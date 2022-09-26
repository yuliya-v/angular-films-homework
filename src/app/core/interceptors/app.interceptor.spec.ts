import { TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { AppInterceptor } from './app.interceptor';

describe('AppInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [AppInterceptor],
      imports: [TranslateModule.forRoot()],
    })
  );

  it('should be created', () => {
    const interceptor: AppInterceptor = TestBed.inject(AppInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
