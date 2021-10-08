import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PaisService} from "../../services/pais.service";
import {switchMap, tap} from "rxjs/operators";
import {Country} from "../../interfaces/pais";

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais: Country [] = [];


  constructor(private activatedRoute: ActivatedRoute,
              private serviPais: PaisService) {
  }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(switchMap(({id}) => this.serviPais.getPaisCode(id)), tap(console.log))
      .subscribe(pais => {
        console.log(pais)
        this.pais = pais;

      })

    /*this.activatedRoute.params
      .subscribe(params => {
          console.log(params.id)

          this.serviPais.getPaisCode(params.id).subscribe(
            pais => {
              console.log(pais)
            }
          )

        }
      )*/


  }


}
