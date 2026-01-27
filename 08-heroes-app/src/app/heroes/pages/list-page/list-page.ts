import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interface/hero-interface';
import { HeroesService } from '../../services/heroes';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.html',
  standalone: false
})
export class ListPageComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroesService: HeroesService
    ,    private cdr: ChangeDetectorRef,
    rotuer:Router

  ) {}

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe(heroes => {
      this.heroes = heroes;
      this.cdr.detectChanges();
    });
  }
}
