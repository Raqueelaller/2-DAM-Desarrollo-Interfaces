import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/hero-interface';
import { HeroesService } from '../../services/heroes';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, of } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.html',
  styles: ``,
  standalone: false
})
export class NewPageComponent implements OnInit {

  constructor(private heroService: HeroesService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private snackBar: MatSnackBar
  ) {} 
  
  ngOnInit(): void {

    // Si no hay id = modo creación
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (!id) return;

    // Modo edición
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.heroService.getHeroById(id)),
      )
      .subscribe(hero => {

        // Si no llega héroe válido vuelve al inicio
        if (!hero) {
          this.router.navigate(['/heroes/list']);
          return;
        }

        // Cargar datos en el formulario
        this.heroForm.reset(hero);

      });
  }

  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ]

  public heroForm = new FormGroup({
    id: new FormControl<string>(''),
    superhero: new FormControl<string>('', { nonNullable: true }),
    publisher: new FormControl<Publisher>(Publisher.MarvelComics),
    alter_ego: new FormControl<string>(''),
    first_appearance: new FormControl<string>(''),
    characters: new FormControl<string>(''),
    alt_img: new FormControl<string>(''),
  })

  get currentHero(): Hero {
    return this.heroForm.value as Hero;
  }

  onSubmit(): void {
    if (this.heroForm.invalid) return;
    if (this.heroForm.valid) {
      /*const heroeNuevo: Hero = {
        id: this.heroForm.get("superhero")!.value,
        superhero: this.heroForm.get("superhero")!.value,
        publisher: this.heroForm.get("publisher")!.value,
        alter_ego: this.heroForm.get("alter_ego")!.value,
        first_appearance: this.heroForm.get("first_appearance")!.value,
        characters: this.heroForm.get("characters")!.value
      }*/
      if (this.currentHero.id) {
        this.heroService.updateHero(this.currentHero).subscribe(hero => {
          this.showSnackBar(`${hero.superhero} updated!`)
        });
        return
      }

      this.heroService.addHero(this.currentHero).subscribe(hero => {
        // MOSTRAR NAVEGAR A EDIT
        this.showSnackBar(`${hero.superhero} created!`)

      })

      console.log({
        formIsValid: this.heroForm.valid,
        value: this.heroForm.value,
      });
    }

  }

  private showSnackBar (message : string): void{
  this.snackBar.open(message, 'ok', {
    duration : 2500
  })
  
}
}