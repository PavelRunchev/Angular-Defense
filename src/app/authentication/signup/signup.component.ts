import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  loginFailed: boolean;

  formUp = new FormGroup({
    'username': new FormControl('', [
      Validators.required, Validators.minLength(3),
      Validators.maxLength(15),
      Validators.pattern('^[A-Za-z0-9]+$')
    ]),
    'password': new FormControl('', [
      Validators.required, Validators.minLength(6),
      Validators.maxLength(16),
      Validators.pattern('^[A-Za-z0-9]+$')
    ]),
    'firstName': new FormControl('', [
      Validators.required,
      Validators.pattern('^[A-Z][a-z]+$')
    ]),
    'lastName': new FormControl('', [
      Validators.required,
      Validators.pattern('^[A-Z][a-z]+$')
    ]),
    'email': new FormControl('', [
      Validators.required,
      Validators.pattern('^[A-Za-z0-9._-]+@[a-z0-9.-]+.[a-z]{2,4}$')
    ]),
    'age': new FormControl('25', [
      Validators.required,
      Validators.min(18),
      Validators.max(70)
    ]),
    'gender': new FormControl('man'),
    'checked': new FormControl(true, [ Validators.requiredTrue ])
  });

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private authService: AuthService
  ) { }

  ngOnInit() { }

  signUp() {
    const newUser = {
      username: this.formUp.get('username').value,
      password: this.formUp.get('password').value,
      firstName: this.formUp.get('firstName').value,
      lastName: this.formUp.get('lastName').value,
      email: this.formUp.get('email').value,
      age: this.formUp.get('age').value,
      gender: this.formUp.get('gender').value,
    };

    this.authService.signUp(newUser)
      .subscribe(() => {
        this.loginFailed = false;
        this.toastr.success('SignUp Successful.');
        this.router.navigate(['/auth/signin']);
      },
      () => {
        this.loginFailed = true;
      });
  }
}
