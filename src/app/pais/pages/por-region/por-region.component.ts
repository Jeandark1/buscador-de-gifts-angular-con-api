import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {

  regiones: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU',
  'USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC'];

  regionActiva: string='';
  hayErrorR: boolean= false;
  paisesr: country[]=[];
  


  constructor( private PaisService: PaisService) { }

  getClaseCSS( region: string): string{
    return (region=== this.regionActiva) 
    ? 'btn btn-primary'
    : 'btn btn-outline-primary';
  }
  
  activarRegion( region:string){

    if(region === this.regionActiva){
      return;
    }
     this.regionActiva = region;
     this.paisesr= [];
     // hacer el llamado del sevicio
     this.PaisService.buscarregion( region)
     .subscribe( paisesr => {
      console.log(paisesr);
      this.paisesr= paisesr;
    }, (err) => {
      this.hayErrorR = true;
      this.paisesr=[];
    });
  }
}
