import { NgModule } from "@angular/core";
import { HeroeComponents } from "./components/heroe/heroe";
import { ListaComponents } from "./components/lista/lista";



@NgModule({
 declarations:[
    HeroeComponents,ListaComponents
  ],
  exports: [
     HeroeComponents,ListaComponents
  ]

})
export class HeroesModule{


}
