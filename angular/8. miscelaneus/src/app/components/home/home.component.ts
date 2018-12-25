import { Component, OnInit, OnChanges, DoCheck,
    AfterContentInit, AfterContentChecked, AfterViewInit,
    AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style>
    <hr>
    <app-css></app-css>
    <hr>
    <app-class></app-class>
    <hr>
    <p [appResalt]="'orange'">Hola Mundo Directiva Personalizada</p>
    <hr>
    <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit, DoCheck,
AfterContentInit, AfterContentChecked, AfterViewInit,
AfterViewChecked, OnDestroy {

  constructor() {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngDoCheck () {
    console.log('ngDoCheck');
  }

  ngAfterContentInit () {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked () {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit () {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked () {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy () {
    console.log('ngOnDestroy');
  }
}
