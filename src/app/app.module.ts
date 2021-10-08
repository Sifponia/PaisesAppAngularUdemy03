import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {SheareModule} from "./sheare/sheare.module";
import {PaisModule} from "./pais/pais.module";
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SheareModule,
    PaisModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
