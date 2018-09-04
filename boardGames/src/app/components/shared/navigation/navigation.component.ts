import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../authentication/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  dropdownLi : string = "dropdown";
  dropdownMenu : string = "dropdown-menu";
  user: boolean = true;
  admin: boolean = false;

  constructor(
    private authService : AuthService, 
    private router : Router,
    private toastr: ToastrService
  ) {
    
  }

  ngOnInit() {
  
   }

  checkUser() {
    if(this.authService.checkForAdmin()) {
      this.user = false;
      this.admin = true;
    } else {
      this.user = true;
      this.admin = false;
    }
  }

  logout() {
    this.authService.logout().subscribe(() => {
        localStorage.clear();
        this.authService.authtoken = '';
        this.authService.setAdminId = '';
        this.authService.setUserName = '';
        this.toastr.success('Logout Successful');
        this.router.navigate(['/signin']);
    });
  }

  expand() {
    this.dropdownLi.endsWith('show') 
    ? this.dropdownLi = "dropdown" 
    : this.dropdownLi = "dropdown show";

    this.dropdownMenu.endsWith('show')
    ? this.dropdownMenu = "dropdown-menu"
    : this.dropdownMenu = "dropdown-menu show";
  }
}
