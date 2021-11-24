import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoaderService } from '../loader/loader.service';

@Injectable()
export class APIInterceptor implements HttpInterceptor {

  constructor(private loaderService: LoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('request coming through interceptor');
    this.loaderService.isLoading.next(true);
    return next.handle(request).pipe(
      finalize(() => this.loaderService.isLoading.next(false))
    );
  }
}
