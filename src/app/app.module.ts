import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
// import { PrimeNGModule } from './prime-ng/prime-ng.module'; este ya no se importa aqui sino que se importara en cada modulo que nesesite algo de primeNG
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

// cambiar el locale de la app

import localeEs from '@angular/common/locales/es-CL'; // esto es para pner el idioma chile
import { registerLocaleData } from "@angular/common"; // estos es una funcion 

registerLocaleData( localeEs ); // esto esta llamando tomando la funcion pasandole el idioma

@NgModule({
  
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRouterModule,
    VentasModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CL' } // esto es para cambiar el idioma de forma global
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
