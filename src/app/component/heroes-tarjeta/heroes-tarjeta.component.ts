import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes-tarjeta',
  templateUrl: './heroes-tarjeta.component.html',
  styles: [
  ]
})
export class HeroesTarjetaComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() idx: number;

  @Output() heroeSeleccionado: EventEmitter<number>;


  constructor(private router: Router) {
    this.heroeSeleccionado = new EventEmitter();
   }

  ngOnInit(): void {
  }

  verHeroe(): any {
  //   console.log(this.idx);
    this.router.navigate(['heroe', this.idx]);
    // this.heroeSeleccionado.emit(this.idx);
  }

}
