import { Component, OnInit } from '@angular/core';
import { flatMap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {
  termino : string = '';
  hayError: boolean= false;
  paises  : country[] = [];
  paisesSugeridos: country[]=[];
  mostrarSugerencias:boolean= false;

  constructor( private PaisService: PaisService) { }
   
  buscar( termino: string){

    this.mostrarSugerencias=false;
    this.hayError= false;
    this.termino=termino;
    
    this.PaisService.buscarPais(termino)
    .subscribe( paises => {
       console.log(paises);
       this.paises=paises;

    }, (err) =>{
          this.hayError= true;
          this.paises = [];
      });
  }
  sugerencias( termino: string){
     this.hayError =  false;
     this.termino= termino;
     this.mostrarSugerencias=true;
     
     
     this.PaisService.buscarPais(termino)
     .subscribe( 
       paises => this.paisesSugeridos= paises.splice(0,5),
     (err) => this.paisesSugeridos = []
     );
  }

  buscarSugerido( termino: string){
    this.buscar(termino);
    
  }

}
