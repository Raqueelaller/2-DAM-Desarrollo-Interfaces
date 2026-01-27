import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interface/hero-interface';
import { HeroesService } from '../../services/heroes';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.html',
  styles: ``,
  standalone: false,

})
export class HeroPageComponent implements OnInit {

  public hero?: Hero;


  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef
  ){

  }

  ngOnInit(): void {
    console.log(this.activatedRoute.params);

    this.activatedRoute.params.
    pipe(
      switchMap(( {id} )=>this.heroesService.getHeroByID(id) )
    ).subscribe( hero => {
      if(!hero) return this.router.navigate(['/heroes/list']);

      this.hero=hero;
      console.log(hero);
      this.cdr.detectChanges();

      return;
    })

  }
    volver(): void{
    this.router.navigate(['/heroes/list']);
  }

}
