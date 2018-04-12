import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
// ROUTER
import { Router } from '@angular/router';
// SERVICES
import { AuthService } from "../Services/auth.service"

@Injectable()
export class AuthGuard implements CanActivate {

 // CONSTRUCTOR
 constructor(private router:Router,private authService:AuthService){
 }

  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot):boolean {
    if(localStorage.getItem("id_token") != null && localStorage.getItem("id_token") != ""){
      console.log(localStorage.getItem("id_token"));
      
       return true;
      }
    else {
      this.router.navigateByUrl("");
      return false;
     }
  }
}
