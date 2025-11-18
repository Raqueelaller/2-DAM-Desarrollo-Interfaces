import { NgModule } from "@angular/core";
import { HeroeComponents } from "./components/heroe/heroe/heroe";
import { ListaComponents } from "./components/heroe/lista/lista";



@NgModule({
 declarations:[
    HeroeComponents,ListaComponents
  ],
  exports: [
     HeroeComponents,ListaComponents
  ]

})
export class HeroeModule{


}
