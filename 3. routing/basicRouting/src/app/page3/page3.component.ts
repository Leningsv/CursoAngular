import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {

  constructor(
    private _router:Router
  ) { }

  ngOnInit() {
  }
  navigateSubpage(parameter:number){
    console.log(parameter);
    this._router.navigate(['/subpage1',parameter])
  }
}
