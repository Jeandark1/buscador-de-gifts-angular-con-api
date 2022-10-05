import { Component, OnInit } from '@angular/core';
import { country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {
    
  terminoC : string = '';
  hayErrorC: boolean= false;
  paises  : country[] = [];
  
  constructor( private PaisService: PaisService ) {}

  buscar( termino: string){
    this.hayErrorC = false;
    this.terminoC= termino;

    this.PaisService.buscarCapital(termino)
    .subscribe( paises => {
      console.log(paises);
      this.paises= paises;
    }, (err) => {
      this.hayErrorC = true;
      this.paises=[];
    });
  }
  sugerenciasC( termino: string){
    this.hayErrorC= false;
  }


}
