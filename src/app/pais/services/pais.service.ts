import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";

import {Country} from "../interfaces/pais";


@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  // private apiUrl: string = 'https://restcountries.com/v3.1/name/honduras';


  constructor(private http: HttpClient) {
  }


  buscarPais(ternimo: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/name/${ternimo}`;
    return this.http.get<Country[]>(url);
    // return this.http.get(`https://restcountries.com/v3.1/name/${ternimo}`);


  }

  buscarCapital(termino: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url);
    // return this.http.get(`https://restcountries.com/v3.1/capital/${ternimo}`);

  }


  getPaisCode(id: string): Observable<Country> {
    const url: string = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  getRegion(region: string): Observable<Country []> {
    const url: string = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country []>(url);

    // https://restcountries.com/v3.1/region/europe
  }


}
