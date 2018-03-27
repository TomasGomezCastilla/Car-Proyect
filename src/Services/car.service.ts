import { Injectable } from '@angular/core';
// HTTP
import { HttpClient } from '@angular/common/http'
import { HttpParams } from '@angular/common/http'
// CLASSES
import { Car } from "../Classes/Car";

@Injectable()
export class CarService {

  public lastGotCar: Car;
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

  public getAllCars():Car[]{
    var cars: Car[] = [];
    this.http.get("http://localhost:3004/cars").subscribe(
      (data:any) => {
        for (const object of data) {
          console.log(object);
          var car = new Car(object.id,object.brand,object.registration,
                            object.country,object.created_at,object.last_update);
          cars.push(car);
        }
      },
      error => {
        console.log(error);
      });
      return cars;
  }

  public getCarId(id:string){

    let params = new HttpParams().set('id',id);

    this.http.get("http://localhost:3004/cars",{params}).subscribe(
      (data:any) => {
          var car = new Car(data[0].id,data[0].brand,data[0].registration,
            data[0].country,data[0].created_at,data[0].last_update);     
            console.log(car);
            
          this.lastGotCar = car;
      },
      result => {
        
      });
  }

  removeCar(id:string){

    this.http.delete("http://localhost:3004/cars/"+id).subscribe(
      (data:any) => {
      },
      result => {     
      });

  } 

  modifyCar(id:string,brand:string,registration:string,country:string,created:string,updated:string){
    var car = new Car("",brand,registration,country,created,updated);

    this.http.patch("http://localhost:3004/cars/"+id,car).subscribe(
      (data:any) => {
      },
      result => {     
      });

  } 


}