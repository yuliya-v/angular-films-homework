import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_KEY, BASE_URL } from '../constants/constants';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor(public translateService: TranslateService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const updatedReq = req.clone({
      url: BASE_URL + req.url,
      params: req.params.set('api_key', API_KEY).set('language', this.translateService.currentLang),
    });
    return next.handle(updatedReq);
  }
}
