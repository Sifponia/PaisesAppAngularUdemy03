import {Component, OnInit} from '@angular/core';
import {PaisService} from "../../services/pais.service";
import {Country} from "../../interfaces/pais";

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {
  termino: string = '';
  isError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  isMostarSugeridos: boolean = false;


  constructor(private buscarPias: PaisService) {
  }

  ngOnInit(): void {
  }

  buscar(termino: string) {
    this.isError = false;
    this.termino = termino

    this.buscarPias.buscarPais(this.termino).subscribe(
      (paises) => {
        this.paises = paises;

        console.log(paises)
      }, (err) => {
        this.isError = true;
        this.paises = [];


      }
    );




  }

  sugerencias(termino: string) {

    this.isError = false;
    this.termino = termino
    this.isMostarSugeridos = true
    this.buscarPias.buscarPais(termino).subscribe(pais => {
      this.paisesSugeridos = pais.slice(0, 5);
    }, (err) => {
      this.paisesSugeridos = [];
    })

  }

  buscarSugeridos(termino: string) {
    this.buscar(termino);
    //this.isMostarSugeridos = false

  }
}
