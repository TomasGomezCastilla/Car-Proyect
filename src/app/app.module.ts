// BASICS IMPORTS 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// IMPORTS IN MEMORY WEB API
import { AppHttpModule } from './modules/app-http/app-http.module';
// SERVICES
import { CarService } from "../Services/car.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppHttpModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
