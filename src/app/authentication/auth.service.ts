import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUpModel } from './models/signup.model';
import { SignInModel } from './models/signin.model';

const appKey = 'kid_SJkb3YSIQ';
const registerUrl = `https://baas.kinvey.com/user/${appKey}`;
const loginUrl = `https://baas.kinvey.com/user/${appKey}/login`;
const logoutUrl = `https://baas.kinvey.com/user/${appKey}/_logout`;
const roleId = 'a81d4f40-f002-41e0-a816-71fc3349b039';

@Injectable()
export class AuthService {
    userId: string;
    username: string;
    gender: string;
    adminId: string;
    token: string;

    constructor(
      private http: HttpClient
    ) { }

    signUp(model: SignUpModel) {
      return this.http.post(registerUrl, JSON.stringify(model));
    }

    signIn(model: SignInModel) {
      return this.http.post(loginUrl, JSON.stringify(model));
    }

    logout() {
      return this.http.post(logoutUrl, {});
    }

    get getToken() { return this.token; }
    set setToken(value: string) { this.token = value; }

    // checked for logged user!
    checkIfLogged() {
      if (this.token !== undefined) { return true; }
      if (this.token === localStorage.getItem('authtoken')) { return true;
      } else if (localStorage.getItem('authtoken') !== null) { return true; }

      return false;
    }

    get getUserId() { return this.userId; }
    set setUserId(value: string) { this.userId = value; }

    get getUserName() { return this.username || localStorage.getItem('username'); }
    set setUserName(value: string) { this.username = value; }

    get getGender() { return this.gender || localStorage.getItem('gender'); }
    set setGender(value: string) {
      value === 'woman' ? this.gender = 'Miss' : this.gender = 'Mr';
    }

    get getAdminId() { return this.adminId; }
    set setAdminId(value: string) { this.adminId = value; }
    // checked for Admin!
    checkForAdmin() {
      if (this.adminId === roleId) { return true; }
      if (localStorage.getItem('isAdmin') !== null) { return true; }

      return false;
    }
}

