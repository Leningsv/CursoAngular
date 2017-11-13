import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-protect',
  templateUrl: './protect.component.html',
  styles: []
})
export class ProtectComponent implements OnInit {
  profile: any;
  constructor(
    private _authService: AuthService
  ) { }

  ngOnInit() {
    if (this._authService.userProfile) {
      this.profile = this._authService.userProfile;
    } else {
      this._authService.getProfile((err, profile) => {
        this.profile = profile;
      });
    }
  }

}
