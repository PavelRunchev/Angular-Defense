import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginFailed: boolean;

  formIn = new FormGroup({
    "username": new FormControl('', 
      [ Validators.required,
        Validators.minLength(1)
      ]
    ),
    "password": new FormControl('', 
      [ Validators.required,
        Validators.minLength(1),
      ]
    ),
    "checked": new FormControl(false, 
      [ Validators.requiredTrue ]
    )
  });

  formUp = new FormGroup({
    "username": new FormControl('', 
      [ Validators.required, 
        Validators.minLength(3), 
        Validators.pattern("^[A-Za-z0-9]+$")
      ]
    ),
    "password": new FormControl('', 
      [ Validators.required, 
        Validators.minLength(6),
        Validators.maxLength(16),
        Validators.pattern("^[A-Za-z0-9]+$")
      ]
    ),
    "firstName": new FormControl('', 
      [ Validators.required, 
        Validators.pattern("^[A-Z][a-z]+$")
      ]
    ),
    "lastName": new FormControl('', 
      [ Validators.required, 
        Validators.pattern("^[A-Z][a-z]+$")
      ]
    ),
    "email": new FormControl('', 
      [ Validators.required, 
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
      ]
    ),
    "age": new FormControl('18', 
      [ Validators.required, 
        Validators.min(18),
        Validators.max(70) 
      ]
    ),
    "gender": new FormControl('', 
      [ Validators.required ]
    )
  })

  constructor(
    private authService : AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {
    
  }

  ngOnInit() { }

  //Login
  signIn() {
    //remove property checked from form!!!
    delete this.formIn.value.checked;

    this.authService.signIn(this.formIn.value)
      .subscribe(userData => {
          this.successfulLogin(userData);
          this.loginFailed = false;
          this.toastr.info('Logged Successful');
          this.router.navigate(['/home']);
    }, err => {
      this.loginFailed = true;
      console.log(err.message);
    });
  }

  successfulLogin(data) {
    this.authService.authtoken = data['_kmd']['authtoken'];
    this.authService.setUserName = data['username'];
    this.authService.setGender = data['gender'];
    
    if(data._kmd.roles !== undefined) {
      this.authService.setAdminId = data['_kmd'].roles[0]['roleId'];
    }
    
    localStorage.setItem('authtoken', data['_kmd']['authtoken']);
    localStorage.setItem('username', data['username']);
    localStorage.setItem('id', data['_id']);
    localStorage.setItem('gender', data['gender']);
  }

  //Register
  signUp() {
    const newUser = {
      username: this.formUp.get('username').value,
      password: this.formUp.get('password').value,
      firstName: this.formUp.get('firstName').value,
      lastName: this.formUp.get('lastName').value,
      email: this.formUp.get('email').value,
      age: this.formUp.get('age').value,
      gender: this.formUp.get('gender').value
    }
   
    this.authService.signUp(newUser)
      .subscribe(() => {
        this.loginFailed = false;
        this.toastr.info('Sign Up', 'Successful.');
        this.router.navigate(['/signin']);
      },
      error => {
        this.loginFailed = true;
        console.log(error.message);
      });
  }
}
