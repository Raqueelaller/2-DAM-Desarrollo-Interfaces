import { Component} from '@angular/core';
import { HeroesModule } from "../../heroes/heroes.module";
import { AddPersonajeComponet } from "../components/add-personaje/add-personaje";
import { ListaComponent } from '../components/lista/lista';
import { Personaje } from '../interfaces/personaje';
import { DBZService } from '../services/dbz-service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.html',
  // imports: [ListaComponent, AddPersonajeComponet]
  standalone:false
})

export class MainPageComponent{

  constructor(private  dbzService: DBZService){  }

    get personajes():Personaje[]{
      return this.dbzService.personajes
    }

    onDeletePersonajes(id:string){
      this.dbzService.deletePersonaje(id)
    }

    onNewPersonaje(personaje:Personaje){
      this.dbzService.addPersonaje(personaje)
    }

}
