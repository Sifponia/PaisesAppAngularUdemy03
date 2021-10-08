import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CapitalComponent} from './page/capital/capital.component';
import {PaisComponent} from './page/pais/pais.component';
import {RegionComponent} from './page/region/region.component';
import {VerPaisComponent} from './page/ver-pais/ver-pais.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from '@angular/router';
import { TablaPaisComponent } from './components/tabla-pais/tabla-pais.component';
import { PaisInputComponent } from './components/pais-input/pais-input.component';


@NgModule({
  declarations: [
    CapitalComponent,
    PaisComponent,
    RegionComponent,
    VerPaisComponent,
    TablaPaisComponent,
    PaisInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    CapitalComponent,
    PaisComponent,
    RegionComponent,
    VerPaisComponent
  ]
})
export class PaisModule {
}
