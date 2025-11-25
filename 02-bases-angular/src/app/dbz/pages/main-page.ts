import { Component, OnInit } from '@angular/core';
import { HeroesModule } from "../../heroes/heroes.module";
import { AddPersonajeComponet } from "../components/add-personaje/add-personaje";
import { ListaComponent } from '../components/lista/lista';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.html',
  // imports: [ListaComponent, AddPersonajeComponet]
  standalone:false
})

export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
}
