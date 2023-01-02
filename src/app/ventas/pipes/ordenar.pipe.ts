import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform( heroes: Heroe[], orderPor: string = 'Sin valor'): Heroe[] {
    console.log('estas llegando a pipe');
    console.log(orderPor);
    
    switch( orderPor ){ 
     
      case 'nombre': 
        console.log('entra');
        
        return heroes = heroes.sort( (a,b) => (a.nombre > b.nombre) ? 1 : -1 );

      case 'vuela':
        return heroes = heroes.sort( (a,b) => (a.vuela > b.vuela) ? -1 : 1 ); // por defecto los booleanos se ordenenan por false y luego true

      case 'color':
        return heroes = heroes.sort( (a,b) => (a.color > b.color) ? 1 : -1 );

      default:
        return heroes;
    }

  // esta es una forma de hacerlo en parte pero la de arriba es algo es mas elevado 
  //   if( ordenaPor === 'Sin valor' ){

  //     return heroes;

  //   }else{

  //     heroes = heroes.sort( (a,b) => (a.nombre > b.nombre) ? 1 : -1 );

  //   }

  //   return heroes;


  }



}
