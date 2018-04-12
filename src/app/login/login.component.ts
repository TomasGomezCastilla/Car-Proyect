import { Component, OnInit } from '@angular/core';
// CLASSES
import { User } from '../../Classes/User';
// SERVICES
import { AuthService } from "../../Services/auth.service"
// ROUTING
import { Router, ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // ATRIBUTES
  private view:boolean;
  // CONSTRUCTOR
  constructor(private authService:AuthService){
    console.log(localStorage.getItem("id_token"));
   }
  ngOnInit() {
  }

  // METHODS

}
