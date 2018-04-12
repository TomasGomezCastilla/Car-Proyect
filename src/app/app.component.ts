import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
// SERVICES
import { AuthService } from "../Services/auth.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // CONSTRUCTOR
  constructor(private authService:AuthService){
  }

  // METHODS
  logout(){
    this.authService.sessionActived = false;
  }

}
