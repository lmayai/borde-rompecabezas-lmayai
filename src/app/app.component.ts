import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  numeroPiezas: number;
  ancho: number;
  alto: number;
  resultado: number;
  cantidadX: number;
  cantidadY: number;

  constructor() {

  }

  calcularPiezasBorde() {
    this.resultado = this.getPiezasBorde(this.ancho, this.alto, this.numeroPiezas);
  }

  private getPiezasBorde(base, altura, piezas) {
    const area = base * altura;
    const bp = Math.sqrt(area/piezas);
    this.cantidadX = Number((base/bp).toFixed(1));
    this.cantidadY = Number((altura/bp).toFixed(1));
    const res = (2*(base+altura))/bp - 4;
    return Math.round(res);
  } 

}
