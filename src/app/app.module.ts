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
// ROUTING
import { RouterModule} from '@angular/router';

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
    FormsModule,
    RouterModule.forRoot([
      {path:"carDetails/:id",component:CarViewComponent}, // CAR_DETAILS View
      {path:"",component:MainComponent}, // MAIN view
      
    ])
 
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
