import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-user',
  template: `
    <p>
      new-user works!
    </p>
  `,
  styles: []
})
export class NewUserComponent implements OnInit {

  constructor(
    private _activatedRoute: ActivatedRoute
  ) {
    // Ruta hija parametros hijos
    this._activatedRoute.params.subscribe( params => {
      console.log('Parametros', 'Ruta Hija', params);
    });
    // Ruta Hija parametros Padre
    this._activatedRoute.parent.params.subscribe( params => {
      console.log('Parametros Padre', 'Ruta Hija', params);
    });
  }

  ngOnInit() {
  }

}
