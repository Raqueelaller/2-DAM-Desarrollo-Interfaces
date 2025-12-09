import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {

  private _historialEtiquetas:string[]=[];

  get historialEtiquetas(): string[]{
    return [...this._historialEtiquetas]
  }

  //agregamos la nueva etiqueta al array
  buscarEtiqueta(etiqueta:string){
    this._historialEtiquetas.unshift(etiqueta);
  }

}
