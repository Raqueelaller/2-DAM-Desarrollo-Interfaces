import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Hero } from '../interface/hero-interface';
import { environment } from '../../environments/environments';

@Injectable({providedIn: 'root'})
export class HeroesService {

  private baseUrl: string = environment.baseUrl

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes`);
  }

  getHeroByID(id: string): Observable<Hero|undefined>{
    return this.http.get<Hero>(`${this.baseUrl}/heroes/${ id}`).
      pipe(catchError(error => of(undefined)));
  }

};
