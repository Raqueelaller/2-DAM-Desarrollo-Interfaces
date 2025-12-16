import { CardListComponent } from './components/card-list/card-list';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page';
import { SearchBoxComponent } from './components/search-box/search-box';
import { GifsService } from './services/gifs';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [HomePageComponent,SearchBoxComponent,CardListComponent]
})
export class GifsModule { }
