import { Injectable } from '@angular/core';
// HTTP
import { HttpClient } from '@angular/common/http'
// CLASSES
import { Car } from "../Classes/Car";

@Injectable()
export class CarService {

  // CONSTRUCTOR
  constructor(private http:HttpClient) {
    
   }

   // METHODS
  public postCar(id:string,brand:string,registration:string,country:string,created:string,updated:string){

    var car = new Car(id,brand,registration,country,created,updated);

    this.http.post("http://localhost:3004/cars",car).subscribe(
      (data:any) => {
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }
}
