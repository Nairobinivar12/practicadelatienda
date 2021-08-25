
import { Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import{RopaComponent} from './components/ropa/ropa.component';
import{CarritoComponent} from './components/carrito/carrito.component'
import { PagoComponent } from './components/pago/pago.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

export const  ROUTES: Routes = [ 

    {path: 'home',component: HomeComponent },  
    {path: 'ropa',component: RopaComponent}, 
    {path: 'pago',component: PagoComponent}, 
    {path: 'buscador/:termino',component: BuscadorComponent},  
    {path: 'carrito/:id',component: CarritoComponent},  
    
    {path: '',pathMatch:'full', redirectTo:'home'},
    {path: '**',pathMatch:'full', redirectTo:' home'}
];

