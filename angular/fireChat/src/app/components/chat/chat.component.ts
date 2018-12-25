import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../providers/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit {
  mensaje = '';
  elemento: any;
  constructor(
    private _chatServices: ChatService
  ) {
    this._chatServices.cargarMensajes().subscribe(() => {
      setTimeout(() => {
        this.elemento.scrollTop = this.elemento.scrollHeigth;
      }, 20);
    });
  }

  ngOnInit() {
    this.elemento = document.getElementById('app-mensajes');
  }

  enviarMensaje() {
    if (this.mensaje) {
      this._chatServices.agregarMensaje(this.mensaje).then(() => this.mensaje = '')
        .catch((err) => console.error('error al guardar', err));
    }
  }
}
