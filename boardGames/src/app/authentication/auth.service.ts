import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SignUpModel } from './models/signup.model';
import { SignInModel } from './models/signin.model';

const appKey = "kid_SJkb3YSIQ";
const appSecret = "3938a83e69b341b99cbb9e7771c9c5aa";
const registerUrl = `https://baas.kinvey.com/user/${appKey}`;
const loginUrl = `https://baas.kinvey.com/user/${appKey}/login`;
const logoutUrl = `https://baas.kinvey.com/user/${appKey}/_logout`;
const adminId = 'a81d4f40-f002-41e0-a816-71fc3349b039';

@Injectable()
export class AuthService {
    token: string;
    public userId: string;
    public username: string;
    public gender: string;

    constructor(
      private http: HttpClient
    ) { }

    signUp(model: SignUpModel) {
      return this.http.post(registerUrl, JSON.stringify(model), {
        headers: this.createAuthHeader('Basic')
      });
    }

    signIn(model: SignInModel){
      return this.http.post(loginUrl, JSON.stringify(model), {
        headers: this.createAuthHeader('Basic')
      });
    }

    logout() {
      return this.http.post(logoutUrl, {}, {
        headers: this.createAuthHeader('Kinvey')
      });
    }

    private createAuthHeader(type: string) {
      if(type === "Basic") {
        return new HttpHeaders({
          'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
          'Content-type': 'application/json'
        });
      } else {
        return new HttpHeaders({
          'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
          'Content-Type': 'application/json'
        });
      }
    }

    getUserName(){
      return this.username;
    }

    set setUserName(value: string) {
      this.username = value;
    }

    //checked for logged user!
    checkIfLogged() {
      return this.token === localStorage.getItem('authtoken');
    }

    get authtoken() {
      return this.authtoken;
    }

    set authtoken(value: string) {
      this.authtoken = value;
    }

    get getAdminId() {
      return this.userId;
    }

    set setAdminId(value: string) {
      this.userId = value;
    }

    //checked for Admin!
    checkForAdmin() {
      return this.userId === adminId;
    }

    get getGender() {
      return this.gender;
    }

    set setGender(value: string) {
        value === "woman" ? this.gender = "Miss" : this.gender = "Mr";
    }
}

