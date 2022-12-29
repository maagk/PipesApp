import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent implements OnInit {

  enMayusculas: boolean = true;
  // enMayusculas: string = 'true'

  constructor() { }

  ngOnInit(): void {
  }

  valor(){
    
    // if (this.enMayusculas){
    //   this.enMayusculas = false
    // }else{
    //   this.enMayusculas = true
    // }

    // tambien sirve hacerlo de esta forma
    this.enMayusculas = !this.enMayusculas



  }

}
