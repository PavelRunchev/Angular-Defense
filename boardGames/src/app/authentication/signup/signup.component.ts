import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { Router } from "@angular/router";
import { SignUpModel } from '../models/signup.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  model : SignUpModel;
  loginFailed : boolean;
  errorMessage : string;
  constructor(
    private authService : AuthService, 
    private router: Router,
    private toastr: ToastrService
  ) {
    this.model = new SignUpModel('', '', '', '', '', 18);
   }

   signUp() {
    let newUser = {
      username: this.model.username,
      password: this.model.password,
      firstName: this.model.firstName,
      lastName: this.model.lastName,
      email: this.model.email,
      age: this.model.age
    }
    console.log(newUser)
    this.authService.signUp(newUser)
      .subscribe(() => {
        this.loginFailed = false;
        this.errorMessage = '';
        this.toastr.info('Sign Up', 'Success');
        this.router.navigate(['/signin']);
      },
      error => {
        this.loginFailed = true;
        this.errorMessage = error['error'].description;
      });
    }

  ngOnInit() {

  }
}
