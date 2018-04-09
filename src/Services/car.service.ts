import { Injectable } from '@angular/core';
// HTTP
import { HttpClient } from '@angular/common/http'
import { HttpParams } from '@angular/common/http'
// CLASSES
import { Car } from "../Classes/Car";

@Injectable()
export class CarService {

  // ATRIBUTES
  public lastGotCar: Car;

  // CONSTRUCTOR
  constructor(private http:HttpClient) {
   }

   // METHODS
  public postCar(id:string,brand:string,registration:number,country:string,createdAt:number,lastUpdate:number){
    var car = new Car(id,brand,registration,country,createdAt,lastUpdate);
    this.http.post("http://localhost:3004/cars",car).subscribe(
      (data:any) => {
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
          var car = new Car(object.id,object.brand,object.registration,
                            object.country,object.createdAt,object.lastUpdate);
          cars.push(car);
        }
      },
      error => {
      });
      return cars;
  }

  public getCarId(id:string){

    this.lastGotCar = new Car("","",0,"",0,0);  

    let params = new HttpParams().set('id',id);
    this.http.get("http://localhost:3004/cars",{params}).subscribe(
      (data:any) => {
          var car = new Car(data[0].id,data[0].brand,data[0].registration,
            data[0].country,data[0].createdAt,data[0].lastUpdate);     
            
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

  modifyCar(id:string,brand:string,registration:number,country:string,createdAt:number,lastUpdate:number){
    var car = new Car(id,brand,registration,country,createdAt,lastUpdate);

    this.http.patch("http://localhost:3004/cars/"+id,car).subscribe(
      (data:any) => {
      },
      result => {     
      });
  } 


  
}