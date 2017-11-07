import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subpage1',
  templateUrl: './subpage1.component.html',
  styleUrls: ['./subpage1.component.css']
})
export class Subpage1Component implements OnInit {

  constructor(
    private _activateRoute:ActivatedRoute
  ) { 
    this._activateRoute.params.subscribe(params=>{
      console.log('Params',params);
      console.log('Params Id',params['id']);
    });
  }

  ngOnInit() {
  }

}
