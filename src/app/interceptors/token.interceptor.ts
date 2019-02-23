import { Injectable } from '@angular/core';
import {
  HttpResponse,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../authentication/auth.service';
import { tap } from 'rxjs/operators';
import { UUID } from 'angular2-uuid';

const appKey = 'kid_SJkb3YSIQ';
const appSecret = '3938a83e69b341b99cbb9e7771c9c5aa';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService
    ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler):
  Observable<HttpEvent<any>> {
    if (request.url.endsWith('login') || request.url.endsWith(appKey)) {
      request = request.clone({
        setHeaders: {
          'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
          'Content-type': 'application/json'
        }
      });
    } else {
      request = request.clone({
        setHeaders: {
          'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
          'Content-Type': 'application/json'
        }
      });
    }

    return next.handle(request)
      .pipe(tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse && request.url.endsWith('login')) {
          this.successfulLogin(event['body']);
        }
      }));
  }

  successfulLogin(data: object) {
      // set in localStorage to Browser
      localStorage.setItem('authtoken', data['_kmd']['authtoken']);
      localStorage.setItem('username', data['username']);
      localStorage.setItem('id', data['_id']);
      localStorage.setItem('gender', data['gender'] === 'woman' ? 'Miss' : 'Mr');

    if (data['_kmd'].roles !== undefined) {
      this.authService.setAdminId = data['_kmd'].roles[0]['roleId'];
      if (this.authService.checkForAdmin()) {
        localStorage.setItem('isAdmin', UUID.UUID());
      }
    }

    // set data in AuthService
    this.authService.setToken = data['_kmd']['authtoken'];
    this.authService.setUserId = data['_id'];
    this.authService.setUserName = data['username'];
    this.authService.setGender = data['gender'];
  }
}

