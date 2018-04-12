import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
// SERVICES
import { AuthService } from "../Services/auth.service"
// COOKIE
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private view:boolean;
  
  // CONSTRUCTOR
  constructor(private authService:AuthService,private activatedRoute:ActivatedRoute){

    authService.handleAuthentication();

   if(localStorage.getItem("id_token") != null && localStorage.getItem("id_token") != "")
   {
     this.view = true;
   } else {this.view = false;}
  }

  // METHODS
  logout(){
    this.authService.logout();
  }

  login(){
    this.authService.login();
  }

}
