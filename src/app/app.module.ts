import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// SERVICES IMPORTS
import { CarService } from "../Services/car.service"
import { AuthService } from "../Services/auth.service"
// HTTP IMPORTS
import { HttpClientModule } from '@angular/common/http';
// ROUTING IMPORTS
import { RouterModule} from '@angular/router';
// COMPONENTS IMPORTS
import { AppComponent } from './app.component';
import { AddCarComponent } from './add-car/add-car.component'
import { MainComponent } from './main/main.component';
import { CarViewComponent } from './car-view/car-view.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
// GUARDS
import { AuthGuard } from "./auth.guard";
// JWT
import { JwtModule } from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent,
    AddCarComponent,
    MainComponent,
    CarViewComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([ //app-login
      {path:"carDetails/:id",component:CarViewComponent,canActivate: [AuthGuard]}, // CAR_DETAILS View
      {path:"list",component:MainComponent,canActivate: [AuthGuard]},
      {path:"login",component:LoginComponent}, 
      {path:"",component:HomeComponent},
    ]),
  ], // END OF IMPORTS
  providers: [CarService,AuthGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
