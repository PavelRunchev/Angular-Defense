import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../authentication/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  user = true;
  admin = false;

  constructor(
    public authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() { }

  checkUser() {
    if (this.authService.checkForAdmin()) {
      this.user = false;
      this.admin = true;
    } else {
      this.user = true;
      this.admin = false;
    }
  }

  logout() {
      localStorage.clear();
      this.authService.setToken = undefined;
      this.authService.setUserId = undefined;
      this.authService.setAdminId = undefined;
      this.authService.setUserName = undefined;
      this.authService.setGender = undefined;
      this.toastr.info('Logout Successful');
      this.router.navigate(['/auth/signin']);
  }
}
