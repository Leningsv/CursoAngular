import { Component, OnInit } from '@angular/core';

// Servicios
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  private profile: any;
  constructor(
    private _authService: AuthService
  ) {
  }

  ngOnInit() {
    this._authService.handleAuthentication();
  }

  login() {
    this._authService.login();
  }

  logout() {
    this._authService.logout();
  }

}
