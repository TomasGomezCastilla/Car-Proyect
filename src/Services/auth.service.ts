import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  // ATRIBUTES
  public sessionActived:boolean;

  // CONSTRUCTOR
  constructor() {
    this.sessionActived = false;
   }

   // METHODS

}
