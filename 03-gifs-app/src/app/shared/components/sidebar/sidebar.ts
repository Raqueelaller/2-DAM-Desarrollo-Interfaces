import { Component } from '@angular/core';
import { GifsModule } from '../../../gifs/gifs-module';
import { GifsService } from '../../../gifs/services/gifs';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
  standalone: false,

})
export class SidebarComponent {

      constructor(private gifsservice: GifsService){}

        get historialEtiquetas(): string[]{
          return this.gifsservice.historialEtiquetas
        }

}
