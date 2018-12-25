import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(
    private _activatedRoute: ActivatedRoute
  ) {
      this._activatedRoute.params.subscribe( params => {
        console.log('Ruta Padre', params);
      });
  }

  ngOnInit() {
  }

}
