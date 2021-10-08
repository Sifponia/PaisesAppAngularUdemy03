import {Component, Input, OnInit} from '@angular/core';
import {Country} from "../../interfaces/pais";

@Component({
  selector: 'app-tabla-pais',
  templateUrl: './tabla-pais.component.html',
  styleUrls: ['./tabla-pais.component.css']
})
export class TablaPaisComponent implements OnInit {

  @Input() paises : Country[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
