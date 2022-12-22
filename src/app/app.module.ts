import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { PrimeNGModule } from './prime-ng/prime-ng.module'; este ya no se importa aqui sino que se importara en cada modulo que nesesite algo de primeNG
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
