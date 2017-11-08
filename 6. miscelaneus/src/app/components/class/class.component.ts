import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styles: []
})
export class ClassComponent implements OnInit {

  alert: string;
  properties: Object;
  loading: Boolean;

  constructor() {
    this.alert = 'alert-danger';
    this.properties = {
      danger: false
    };
    this.loading = false;
  }

  ngOnInit() {
  }

  execute() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }

}
