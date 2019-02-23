import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  loginFailed: boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  formIn = new FormGroup({
    'username': new FormControl('',
    [ Validators.required,
    Validators.minLength(3)]),
    'password': new FormControl('',
    [ Validators.required,
      Validators.minLength(6)])
  });

  ngOnInit() { }

  signIn() {
    this.authService.signIn(this.formIn.value)
      .subscribe(() => {
        this.loginFailed = false;
        this.toastr.info('Logged Successful');
        this.router.navigate(['/home']);
      }, () => {
        this.loginFailed = true;
      });
  }
}
