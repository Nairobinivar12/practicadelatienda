import { Component, OnInit, ɵɵsetComponentScope } from '@angular/core';
import{ActivatedRoute, Router} from '@angular/router';
import {RopaService} from '../../servicios/ropa.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  
  ropas:any[]=[];
  termino:string='';

  constructor( private activatedRoute: ActivatedRoute,
    private _ropaService: RopaService,private router :Router) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params =>{
      this.termino = params['termino'];
      console.log(params['termino']);
      this.ropas = this._ropaService.buscarropas(params['termino']);
      console.log(this.ropas);
    });
     
     /* let termino = this.activatedRoute.snapshot.params.termino;
      this.terminoBuscado=termino;*/
      
  }


 /* BuscarArticulo(){
    this.ropas = this._ropaService.buscarropas(this.terminoBuscado);
     console.log(this.ropas);
  }
  */

}
