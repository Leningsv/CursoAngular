import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Mensaje } from '../interfaces/mensaje';

@Injectable()
export class ChatService {
  private itemsCollection: AngularFirestoreCollection<any>;
  public chats = [];
  constructor(
    private afs: AngularFirestore
  ) { }
  cargarMensajes() {
    this.itemsCollection = this.afs.collection<Mensaje>('chats', ref => ref.orderBy('fecha', 'desc').limit(5));
    return this.itemsCollection.valueChanges()
      .map((mensajes: Mensaje[]) => {
        this.chats = [];
        for (const mensaje of mensajes) {
          this.chats.unshift(mensaje);
        }
      });
  }
  agregarMensaje(texto: string) {
    const mensaje: Mensaje = {
      nombre: 'Lenin',
      mensaje: texto,
      fecha: new Date().getTime()
    };
    return this.itemsCollection.add(mensaje);
  }
}
