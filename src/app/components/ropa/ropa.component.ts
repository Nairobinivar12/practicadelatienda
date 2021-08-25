import { Component, OnInit } from '@angular/core';
import {RopaService} from '../../servicios/ropa.service'

@Component({
  selector: 'app-ropa',
  templateUrl: './ropa.component.html',
  styleUrls: ['./ropa.component.css']
})
export class RopaComponent implements OnInit {

  ropas:any[] =[];

  constructor( private _ropaservice:RopaService) { }

  ngOnInit(): void {

    this.ropas = this._ropaservice.getRopas();
    console.log(this.ropas); 
  }

}
