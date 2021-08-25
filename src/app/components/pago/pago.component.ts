import { Component } from '@angular/core';
import{NgForm} from'@angular/forms';
import { UsuarioModel } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent  {
  usuario:UsuarioModel ={
    nombre:'',
    apellido:'',
    correo:'',
    cedula:'',
    tarjeta:'',
    fecha:'',
    cvv:''
    

   }
  

  constructor() { }
  
  
guardar( forma:NgForm){

  console.log("NgForm",forma);
  console.log("valor de la forma", forma.value);
  console.log("usuario", this.usuario);
  

}
  

 
}
