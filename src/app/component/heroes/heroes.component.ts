import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService, Heroes } from '../../services/heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroes[] = [];

  // tslint:disable-next-line: variable-name
  constructor( private _heroesService: HeroesService,
               private router: Router) {}

  ngOnInit(): void {

    this.heroes = this._heroesService.getHeroes();
  }

  verHeroe( i: number): any{
    this.router.navigate(['heroe', i]);
  }

}
