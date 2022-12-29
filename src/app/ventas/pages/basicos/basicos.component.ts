import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent  {

  nombreLower: string = 'fernando';

  nombreUpper: string = 'MARCELA';

  nombreCompleto: string = 'FerNanDo ZApalla';

  fecha: Date = new Date(); //el dia de hoy


}
