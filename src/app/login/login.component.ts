import { Component, OnInit } from '@angular/core';
// CLASSES
import { User } from '../../Classes/User';
// SERVICES
import { AuthService } from "../../Services/auth.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // ATRIBUTOS
  private user:string = "";
  private password:string = "";

  // CONSTRUCTOR
  constructor(private authService:AuthService) {
   }
  ngOnInit() {
  }

  // METODOS
  login(){
    var user = new User(this.user,this.password);
    this.authService.sessionActived = true;
  }

}
