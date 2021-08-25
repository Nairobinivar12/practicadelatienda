import { Component,  } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import{RopaService}from '../../servicios/ropa.service'


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {

  ropa:any ={};

  constructor( private activeroute: ActivatedRoute,
    private _ropaservice: RopaService
    ) {

    this.activeroute.params.subscribe(params =>{

      console.log(params['id']);
      this.ropa = this._ropaservice.getropa(params['id']);
      console.log(this.ropa);
    })
   }

}
