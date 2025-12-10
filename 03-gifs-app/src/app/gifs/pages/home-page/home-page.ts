import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs';

@Component({
  selector: 'gifs-home-page',
  standalone: false,
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePageComponent {

    constructor(private gifsservice: GifsService){}

      get historialEtiquetas(): string[]{
        return [...this.gifsservice.historialEtiquetas]
      }



}
