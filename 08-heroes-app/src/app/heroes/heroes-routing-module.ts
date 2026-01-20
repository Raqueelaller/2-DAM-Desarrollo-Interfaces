import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page';
import { NewPageComponent } from './pages/new-page/new-page';
import { SearchPageComponent } from './pages/search-page/search-page';
import { HeroPageComponent } from './pages/hero-page/hero-page';
import { ListPageComponent } from './pages/list-page/list-page';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'new-hero', component: NewPageComponent },
      { path: 'edit/:id', component: NewPageComponent },
      { path: 'list', component: ListPageComponent },
      { path: 'search', component: SearchPageComponent },
      {path: ':id', component: HeroPageComponent},
      {path: '**', redirectTo: 'list' },


     ]
  }
] ;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
