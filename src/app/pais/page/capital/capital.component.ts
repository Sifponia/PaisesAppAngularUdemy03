import {Component, OnInit} from '@angular/core';
import {Country} from "../../interfaces/pais";
import {PaisService} from "../../services/pais.service";

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.css']
})
export class CapitalComponent implements OnInit {

  termino: string = 'Honduras';
  isError: boolean = false;
  capital: Country[] = [];


  constructor(private buscarCapital: PaisService) {
  }


  buscar(termino: string) {
    this.isError = false;
    this.termino = termino

    this.buscarCapital.buscarCapital(this.termino).subscribe(
      (capital) => {
        this.capital = capital;

        console.log(capital)
      }, (err) => {
        this.isError = true;
        this.capital = [];


      }
    );

    this.termino = ' ';


  }

  sugerencias(termino: string) {
    this.isError = false;

  }

  ngOnInit(): void {
  }

}
