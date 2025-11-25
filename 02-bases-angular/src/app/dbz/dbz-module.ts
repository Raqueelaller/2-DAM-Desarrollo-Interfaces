import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page';
import { ListaComponent } from './components/lista/lista';
import { AddPersonajeComponet } from './components/add-personaje/add-personaje';



@NgModule({
  declarations: [MainPageComponent, ListaComponent, AddPersonajeComponet],
  imports: [
    CommonModule,
  ],
  exports: [
    MainPageComponent, ListaComponent, AddPersonajeComponet
  ]

})
export class DbzModule { }
