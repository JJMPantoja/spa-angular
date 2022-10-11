import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';



@Component({
  selector: 'app-buscar-heroe',
  templateUrl: './buscar-heroe.component.html',
  styleUrls: ['./buscar-heroe.component.css']
})
export class BuscarHeroeComponent implements OnInit {

  buquedaHeroesResul: any[] = [];
  termino: string;

  constructor(private service: HeroesService,
              private activatedRoute: ActivatedRoute,
              ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params) => {
      this.buquedaHeroesResul = this.service.buscarHeroe(params.name);
      this.termino = params.name;
      console.log(this.buquedaHeroesResul);
    });
  }

}
