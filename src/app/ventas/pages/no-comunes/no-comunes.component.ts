import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {

  // esto es para el pipes i18nselect
  nombre: string = 'Susana';

  genero: string = 'femenino';

  invitacionMapa = {
    // esta variables deben estar escritas igual que las de arriva si no no toma el pipes

    'masculino' : 'invitarlo', 

    'femenino' : 'invitarla'
  }

  // i18nplural

  clientes: string[] = ['maria','Pedro','juana','neil','nole'];

  clientesMapa = {

    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos 1 clientes esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'

  }

  
  cambiarCliente(){

    this.nombre = 'Malena';
    this.genero = 'femenino';

  }
  borrarCliente(){
    if (this.clientes.length !== 0 ){
      this.clientes.splice(0,1); // Aqui el .pop() igual servia elimina el ultimo 
      console.log(this.clientes);
    }

  }

  // keyValue pipe

  persona = {

    nombre:'Magda',
    edad: 30,
    direccion: 'Otawa, Canada'
  }
 // Json pipe
 
 heroes = [
  {
    nombre : 'Superman',
    vuela : true
  },
  {
    nombre : 'Robin',
    vuela : false
  },
  {
    nombre : 'Aquaman',
    vuela : false 
  }

 ]

  //  Async pipe

  miObservable = interval(1000); // obcerbable que emite numeros de 0,1,2,3 ...

  valorPromesa = new Promise( ( resolve, reject ) => {

  setTimeout(() => {
    resolve('Tenemos data de promesa');
    }, 3500);

    })

}
