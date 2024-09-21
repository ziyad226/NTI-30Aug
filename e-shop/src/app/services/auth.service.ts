import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import {
  Login,
  ResetPassword,
  SendMail,
  Sigup,
  VerifyCode,
} from '../interfaces/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = '';
  private authRoute: string = '';
  private apiKey: string = '';
  currentUser = new BehaviorSubject(null);
  authPhoto: string = 'images/phone.svg';

  constructor(
    private _GlobalService: GlobalService,
    private _HrrpClint: HttpClient
  ) {
    this.baseUrl = this._GlobalService.baseUrl;
    this.authRoute = this._GlobalService.authRoute;
    this.apiKey = this._GlobalService.apiKey;
    if (localStorage.getItem('user') !== null) {
      this.saveCurrentUser();
    }
  }

  saveCurrentUser() {
    const token = localStorage.getItem('user');
    if (token) {
      this.currentUser.next(jwtDecode(token));
    }
  }
  checkToken() {
    const token: any = localStorage.getItem('user');
    const decodedToken = jwtDecode(token);
    if (decodedToken.exp! < Date.now() / 1000) {
      this.logout();
    }
  }

  sigup(formData: Sigup): Observable<any> {
    return this._HrrpClint.post(
      `${this.baseUrl}${this.authRoute}/sigup`,
      formData,
      {
        headers: {
          'X-API-KEY': `${this.apiKey}`,
          'X-CSRF-Token': `${Cookies.get('cookies')}`,
        },
        withCredentials: true,
      }
    );
  }
  login(formData: Login): Observable<any> {
    return this._HrrpClint.post(
      `${this.baseUrl}${this.authRoute}/login`,
      formData,
      {
        headers: {
          'X-API-KEY': `${this.apiKey}`,
          'X-CSRF-Token': `${Cookies.get('cookies')}`,
        },
        withCredentials: true,
      }
    );
  }
  sendMail(formData: SendMail): Observable<any> {
    return this._HrrpClint.post(
      `${this.baseUrl}${this.authRoute}/sendMail`,
      formData,
      {
        headers: {
          'X-API-KEY': `${this.apiKey}`,
          'X-CSRF-Token': `${Cookies.get('cookies')}`,
        },
        withCredentials: true,
      }
    );
  }
  verifyCode(formData: VerifyCode): Observable<any> {
    return this._HrrpClint.post(
      `${this.baseUrl}${this.authRoute}/verifyCode`,
      formData,
      {
        headers: {
          'X-API-KEY': `${this.apiKey}`,
          'X-CSRF-Token': `${Cookies.get('cookies')}`,
        },
        withCredentials: true,
      }
    );
  }
  resetPassword(formData: ResetPassword): Observable<any> {
    return this._HrrpClint.post(
      `${this.baseUrl}${this.authRoute}/resetPassword`,
      formData,
      {
        headers: {
          'X-API-KEY': `${this.apiKey}`,
          'X-CSRF-Token': `${Cookies.get('cookies')}`,
        },
        withCredentials: true,
      }
    );
  }
  logout() {}
}
