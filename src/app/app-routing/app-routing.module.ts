import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {PaisComponent} from 'src/app/pais/page/pais/pais.component';
import {RegionComponent} from "../pais/page/region/region.component";
import {CapitalComponent} from "../pais/page/capital/capital.component";
import {VerPaisComponent} from 'src/app/pais/page/ver-pais/ver-pais.component';

const routes: Routes = [
  {path: '', component: PaisComponent, pathMatch: 'full'},
  {path: 'region', component: RegionComponent},
  {path: 'capital', component: CapitalComponent},
  {path: 'pais/:id', component: VerPaisComponent},
  {path: '**', redirectTo: ''}, //redirecto: '404-component'


];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
