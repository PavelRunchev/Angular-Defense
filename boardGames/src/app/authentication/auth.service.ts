import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SignInModel } from './models/signin.model';
import { SignUpModel } from './models/signup.model';

const appKey = "kid_SJkb3YSIQ";
const appSecret = "3938a83e69b341b99cbb9e7771c9c5aa";
const registerUrl = `https://baas.kinvey.com/user/${appKey}`;
const loginUrl = `https://baas.kinvey.com/user/${appKey}/login`;
const logoutUrl = `https://baas.kinvey.com/user/${appKey}/_logout`;
const adminId = 'a81d4f40-f002-41e0-a816-71fc3349b039';

@Injectable()
export class AuthService {
    private token: string;
    userId: string;
    username: string;
    gender: string;

    constructor(private http : HttpClient) { }

    signUp(model : SignUpModel) {
        return this.http.post(registerUrl, JSON.stringify(model), {
            headers: this.createAuthHeader('Basic')
        });
    }

    signIn(model: SignInModel) {
        return this.http.post(loginUrl, JSON.stringify(model),
        {
            headers: this.createAuthHeader('Basic')
        });
    }

    logout() {
        return this.http.post(logoutUrl, {}, {
            headers: this.createAuthHeader('Kinvey')
        });
    }

    private createAuthHeader(type : string) {
        if(type === "Basic") {
            return new HttpHeaders({
                'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
                'Content-Type': 'application/json'
            })
        } else {
            return new HttpHeaders({
                'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
                'Content-Type': 'application/json'
            })
        }
    }

    get getUserName() {
        return this.username;
    }

    set setUserName(value: string) {
        this.username = value;
    }

    checkIfLogged() {
        return this.token === localStorage.getItem('authtoken');
    }

    get authtoken() {
        return this.token;
    }

    set authtoken(value : string) {
        this.token = value;
    }

    get getAdminId() {
        return this.userId;
    }

    set setAdminId(value: string) {
        this.userId = value;
    }

    checkForAdmin() {
        return this.userId === adminId;
    }

    get getGender() {
        return this.gender;
    }

    set setGender(value: string) {
        if(value === "woman") {
            this.gender = "Miss";
        } else if (value === "man"){
            this.gender = "Mr";
        }
    }
}