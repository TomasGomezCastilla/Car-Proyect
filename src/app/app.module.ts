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
import { MainComponent } from './main/main.component';
// PIPES
import { CarFilter } from "../Classes/CarFilter";
import { CarViewComponent } from './car-view/car-view.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCarComponent,
    MainComponent,
    CarFilter,
    CarViewComponent
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
