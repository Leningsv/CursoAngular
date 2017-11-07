import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [ngStyle]= "{'font-size':size + 'px'}">
      Etiqueta 1 - [ngStyle]
    </p>
    <p [style.fontSize.px]= "size">
      Etiqueta 1 - [style.fontSize.px]
    </p>
    <button class= "btn btn-primary" (click)= "size= size + 5">
      <i class="fa fa-plus"></i>
    </button>
    <button class= "btn btn-primary" (click)= "size= size - 5">
    <i class="fa fa-minus"></i>
  </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {
  size = 20;
  constructor() { }

  ngOnInit() {
  }
}
