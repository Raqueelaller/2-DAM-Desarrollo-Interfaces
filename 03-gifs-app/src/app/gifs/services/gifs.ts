import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {




  private _historialEtiquetas:string[]=[]


  get historialEtiquetas(): string[]{
    return [...this._historialEtiquetas]
  }



  buscarEtiqueta(etiqueta: string): void {

    if (!etiqueta || etiqueta.trim().length === 0) {
      return;
    }


    const etiquetaNormalizada = etiqueta.trim().toLowerCase();


    this._historialEtiquetas = this._historialEtiquetas.filter(
      item => item.toLowerCase() !== etiquetaNormalizada
    );


    this._historialEtiquetas.unshift(etiqueta);


    if (this._historialEtiquetas.length > 10) {
      this._historialEtiquetas = this._historialEtiquetas.slice(0, 10);
    }
  }
}
