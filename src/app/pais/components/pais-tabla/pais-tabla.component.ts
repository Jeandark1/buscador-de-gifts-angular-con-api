import { Component, Input, OnInit } from '@angular/core';
import { country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html'
})
export class PaisTablaComponent  {

  constructor() { }
  @Input() paises: country[]=[];
  
}
