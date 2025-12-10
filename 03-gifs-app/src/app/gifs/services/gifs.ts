import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {




  private _historialEtiquetas:string[]=[]


  get historialEtiquetas(): string[]{
    return [...this._historialEtiquetas]
  }



  //agregamos la nueva etiqueta al array
  buscarEtiqueta(etiqueta:string){
      if(this._historialEtiquetas.length>10){
        this._historialEtiquetas.pop();
    }
    etiqueta = etiqueta.trim().toLowerCase();
    for( let i=0; i<this._historialEtiquetas.length; i ++){
         if(this._historialEtiquetas.at(i)?.includes(etiqueta)){
          this._historialEtiquetas.splice(i,i);
        }
    }
    if(etiqueta!== ""){
      this._historialEtiquetas.unshift(etiqueta);
      // console.log(this._historialEtiquetas)
    }

  }

}
