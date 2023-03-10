import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent  {

  enMayusculas: boolean = true;

  ordenarPor: string = '';

  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color :  Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color :  Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color :  Color.verde
    },
    {
      nombre: 'Deredevil',
      vuela: false,
      color :  Color.rojo
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color :  Color.verde
    }

  ]

  valor(){
    
    // if (this.enMayusculas){
    //   this.enMayusculas = false
    // }else{
    //   this.enMayusculas = true
    // }

    // tambien sirve hacerlo de esta forma
    this.enMayusculas = !this.enMayusculas

  }

  cambiarOrden( valor:string ){
    this.ordenarPor = valor;
    console.log(valor);
    

  }

}
