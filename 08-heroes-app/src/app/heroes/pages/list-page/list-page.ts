import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interface/hero-interface';
import { HeroesService } from '../../services/heroes';
@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.html',
})
export class ListPageComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe(heroes => {
      this.heroes = heroes;
    });
  }
}
