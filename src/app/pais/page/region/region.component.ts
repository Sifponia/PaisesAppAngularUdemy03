import {Component, OnInit} from '@angular/core';
import {Country} from '../../interfaces/pais';
import {PaisService} from "../../services/pais.service";

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  regiones: string[] = ['america', 'africa', 'europe', 'asia', 'oceania',];
  datoRegions: string = '';
  paises: Country[] = [];

  constructor(private buscarRegion: PaisService) {
  }

  ngOnInit(): void {
  }

  regionActiva(region: string) {

    this.datoRegions = region
    console.log(this.datoRegions)
    //TODO Hacer llamado al servicio

    this.buscarRegion.getRegion(this.datoRegions).subscribe(regiones => {
      this.paises = regiones;
      console.log(this.paises);
    })

  }


}
