import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// SERVICES IMPORTS
import { CarService } from "../Services/car.service";
// HTTP IMPORTS
import { HttpClientModule } from '@angular/common/http';
// ROUTING IMPORTS
import { RouterModule} from '@angular/router';
// COMPONENTS IMPORTS
import { AppComponent } from './app.component';
import { AddCarComponent } from './add-car/add-car.component'
import { MainComponent } from './main/main.component';
import { CarViewComponent } from './car-view/car-view.component';


@NgModule({
  declarations: [
    AppComponent,
    AddCarComponent,
    MainComponent,
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
