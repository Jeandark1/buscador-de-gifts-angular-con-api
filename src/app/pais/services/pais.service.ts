import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { country } from '../interfaces/pais.interface';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';
  private apiUrlv2: string = 'https://restcountries.com/v2';


  get httpParams(){
    return new HttpParams().set('fields','name,capital,alpha2code,flags,population,cioc,cca3,cca2,ccn3')
  }

  constructor( private http: HttpClient) { }

  
  buscarPais( termino: String ): Observable<country[]> {

    const url =`${ this.apiUrl}/name/${ termino }`;
    return this.http.get<country[]>( url, {params: this.httpParams});
  }

  buscarCapital( termino: String ): Observable<country[]> {
    const url =`${ this.apiUrl}/capital/${ termino }`;
    return this.http.get<country[]>( url, {params: this.httpParams} );
  }

  getPaisPorAlpha( id: String ): Observable<country> {
    const url =`${ this.apiUrl}/alpha/${ id }`;
    return this.http.get<country>( url );

   
  }
  

  buscarregion( termino: String ): Observable<country[]> {
    const url =`${ this.apiUrlv2}/regionalbloc/${ termino }`;
    return this.http.get<country[]>( url, {params: this.httpParams} );
  }

  
}

