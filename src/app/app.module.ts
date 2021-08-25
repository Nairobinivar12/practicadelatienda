import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//RUTAS 
import{ROUTES }from './app.routes';
import {RouterModule  } from '@angular/router';

//SERVICIOS
import{RopaService} from './servicios/ropa.service'

//formularios
import{FormsModule, ReactiveFormsModule} from'@angular/forms';

// COMPONENTES
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { RopaComponent } from './components/ropa/ropa.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { PagoComponent } from './components/pago/pago.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    RopaComponent,
    CarritoComponent,
    PagoComponent,
    BuscadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     RouterModule.forRoot(ROUTES,{useHash:true}),
     FormsModule,
     ReactiveFormsModule
    
    
  ],
  providers: [
    RopaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
