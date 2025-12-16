import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs';
import { Gif } from '../../interfaces/gifs-interfaces';

@Component({
  selector: 'gifs-home-page',
  standalone: false,
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePageComponent {

    constructor(private gifsservice: GifsService){}

      get gifs(): Gif[]{
        return this.gifsservice.listadoGifs;
      }
      


}
