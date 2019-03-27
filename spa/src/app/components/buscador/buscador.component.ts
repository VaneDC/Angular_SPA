import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from './../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroe: any = {};
  termino: string;

  constructor( private activateRoute: ActivatedRoute,
               // tslint:disable-next-line:variable-name
               private _heroesService: HeroesService
    ) { }

  ngOnInit() {
    this.activateRoute.params.subscribe( params => {
      // tslint:disable-next-line:no-string-literal
      // this.heroe = this._heroesService.getHeroe( params['id'] );
      // tslint:disable-next-line:no-string-literal
      this.heroe = this._heroesService.buscarHeroes( params [ 'termino' ] );
      // tslint:disable-next-line:no-string-literal
      this.termino = ( params [ 'termino' ] );
      console.log( this.heroe );
    } );
  }

}
