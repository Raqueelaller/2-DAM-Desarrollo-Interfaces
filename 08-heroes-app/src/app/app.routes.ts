import { Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page';

export const routes: Routes = [

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth-module').then(m => m.AuthModule)
    //aquí se carga el módulo de autenticación de forma perezosa
    //se llama caraga perezosa, porque el módulo solo se carga cuando el usuario navega a la ruta 'auth'
  },  {
    path: 'heroes',
    loadChildren: () => import('./heroes/heroes-module').then(m => m.HeroesModule)
  },{
    path: '404',
    component: Error404PageComponent
  },
  {
    path: '',
    redirectTo: 'heroes',
    pathMatch: 'full'
  },
    {
    path: '**',
    redirectTo: '404'
  }

  // {
  //   path: 'home',
  //   component: HomePageComponent
  // },
  // {
  //   path: 'about',
  //   component: AboutPageComponent
  // },

];
