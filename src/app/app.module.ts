// BASICS IMPORTS 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
// SERVICES
import { CarService } from "../Services/car.service";
// HTTP
import { HttpClientModule } from '@angular/common/http';
import { AddCarComponent } from './add-car/add-car.component'

@NgModule({
  declarations: [
    AppComponent,
    AddCarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
