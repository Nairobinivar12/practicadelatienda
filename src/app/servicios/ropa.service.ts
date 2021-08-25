import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RopaService {

  private ropas :Ropas[] =
  [
    {
      nombre: "pantalon",
      precio: "300",
      img: "assets/img/products/pantalones1.jpg",
      Detalle:  " Esta Ropa es elaborada con tela de primera",
      size:"m",
      color:"Blanco"
    },
    {
      
      nombre: "zapato",
      precio: "300",
      img: "assets/img/products/zapato3.jpg",
      Detalle: " Estos zapatos son elaborados con la mayor calidad ",
      size:"39",
      color:"Blanco"
    },
    {
      nombre: "Blusa",
      precio: "300",
      img: "assets/img/products/blusa1.jpg",
      Detalle:  " Esta Ropa es elaborada con tela de primera",
      size:"m",
      color:"Blanco"
      
    },
    {
      nombre: "vestido",
      precio: "300",
      img: "assets/img/products/vestido1.jpg",
      Detalle:  " Esta Ropa es elaborada con tela de primera",
      size:"m",
      color:"Blanco"
    },
   
    {
      nombre: "Blusa",
      precio: "300",
      img: "assets/img/products/blusa2.jpg",
      Detalle:  " Esta Ropa es elaborada con tela de primera",
      size:"m",
      color:"Blanco"
      
    },

    {
      nombre: "pantalon",
      precio: "300",
      img: "assets/img/products/pantalones1.jpg",
      Detalle:  " Esta Ropa es elaborada con tela de primera",
      size:"m",
      color:"Blanco"
    },
    {
      
      nombre: "zapato",
      precio: "300",
      img: "assets/img/products/zapato3.jpg",
      Detalle:  " Estos zapatos son elaborados con la mayor calidad",
      size:"39",
      color:"Blanco"
    },
    
    {
      nombre: "Blusa",
      precio: "300",
      img: "assets/img/products/blusa1.jpg",
      Detalle:  " Esta Ropa es elaborada con tela de primera",
      size:"m",
      color:"Blanco"

      
    },
  
    {
      
      nombre: "Blusa",
      precio: "300",
      img: "assets/img/products/blusa1.jpg",
      Detalle:" Estos zapatos son elaborados con la mayor calidad" ,
      size:"39",
      color:"Blanco"
    },
   
     
  ];

  constructor() {

    console.log("servicio listo para usar ");
   }
   getRopas(){
     return this.ropas;

   }

   getropa( idx: any){
     return this.ropas[idx];

   }

  buscarropas(termino:string):Ropas[]{
    
    let ropasArr:Ropas[]=[];
     termino = termino.toLowerCase();
     for(let ropa of this.ropas){
      let nombre = ropa.nombre.toLowerCase();
      if(nombre.indexOf(termino)>=0){
        ropasArr.push(ropa)
      }

     }
       
     return ropasArr;
   }
  
} 
 export interface Ropas{
   nombre: string;
   precio: string;
   Detalle: string;
   color: string;
   size: string;
   img:string;


}