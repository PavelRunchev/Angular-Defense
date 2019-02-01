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
  dropdownLi = 'dropdown';
  dropdownMenu = 'dropdown-mwnu';
  user = true;
  admin = false;

  constructor(
    public authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

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

  }

  expand() {
    this.dropdownLi.endsWith('show') ? this.dropdownLi = 'dropdown' : this.dropdownLi = 'dropdown show';
    this.dropdownMenu.endsWith('show') ? this.dropdownMenu = 'dropdown-menu' : this.dropdownMenu = 'dropdown-menu show';
  }

}
