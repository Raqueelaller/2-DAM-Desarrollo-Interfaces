import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs-interfaces';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _historialEtiquetas:string[]=[]

  public listadoGifs: Gif[] = [];

  get historialEtiquetas(): string[]{
    return [...this._historialEtiquetas]
  }

  private _apiKey: string = "ByfIwSevcptrYRsjOT8QK3cVAm9PuTtd";
  private _serviceUrl: string = "https://api.giphy.com/v1/gifs";
  private http = inject(HttpClient);

  buscarEtiqueta(etiqueta: string): void {

    if (etiqueta.trim().length === 0) {
      return;
    }


    const etiquetaNormalizada = etiqueta.trim().toLowerCase();


    this._historialEtiquetas = this._historialEtiquetas.filter(
      item => item.toLowerCase() !== etiquetaNormalizada
    );


    this._historialEtiquetas.unshift(etiqueta.trim());


    if (this._historialEtiquetas.length > 10) {
      this._historialEtiquetas = this._historialEtiquetas.slice(0, 10);
    }

      const params = new HttpParams()
      .set('api_key', this._apiKey)
      .set('q', etiqueta)
      .set('limit', 10);

      this.http.get<SearchResponse>(`${this._serviceUrl}/search`, { params }).subscribe(resp => {
        this.listadoGifs = resp.data;
        console.log({gifs: this.listadoGifs})
      })
 }



}
