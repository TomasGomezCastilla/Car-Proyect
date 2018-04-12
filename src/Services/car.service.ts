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
  public postCar(id:string,brand:string,registration:string,country:string,createdAt:string,lastUpdate:string){
    var car = new Car(id,brand,registration,country,createdAt,lastUpdate);
    // MOCK http://localhost:3004/cars
    this.http.post("http://10.114.106.93:8080/postgre_test/cars",car,{headers:{'Content-Type': 'application/json' }}).subscribe(
      (data:any) => {
      },
      error => {
        console.log(error); 
      });
  }

  public getAllCars():Car[]{
    var cars: Car[] = [];
    // MOCKED http://localhost:3004/cars
        var config = {headers: {
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3JwYWV6YmFzLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1YWNiOTM0NTQzYzg3ZjExNDllZmRiMWMiLCJhdWQiOiJ4Nm1FcTF4cVdrcjczMEVLTUQ0M043Z1kyMjdDWm1wZSIsImlhdCI6MTUyMzUxNzM2OCwiZXhwIjoxNTIzNTUzMzY4fQ.VSgvchmYZ_sdsmkNRUBFHVhBZMS-PZBFbO1HgFkEsuw',
      }
    };
    this.http.get("http://10.114.106.93:8080/postgre_test/cars",config).subscribe(
      (data:any) => {
        for (const object of data) {
          var car = new Car(object.id,object.brand,object.registration,
                            object.country,object.createdAt,object.lastUpdated);
          cars.push(car);
        }
      },
      error => {
        console.log(error)
      });
      return cars;
  }

  public getCarId(id:string){

    this.lastGotCar = new Car("","","","","","");  

    let params = new HttpParams().set('id',id);
    // MOCK http://localhost:3004/cars ,{params}
    this.http.get("http://10.114.106.93:8080/postgre_test/cars/"+id).subscribe(
      (data:any) => {
          console.log("PRUEBA: " + data.lastUpdated);
          
          var car = new Car(data.id,data.brand,data.registration,
            data.country,data.createdAt,data.lastUpdated);     
            
          this.lastGotCar = car;
      },
      result => {  
      });
  }

  removeCar(id:string){
    // MOCK "http://localhost:3004/cars/ + id"
    this.http.delete("http://10.114.106.93:8080/postgre_test/cars/"+id).subscribe(
      (data:any) => {
      },
      result => {     
      });

  } 

  modifyCar(id:string,brand:string,registration:string,country:string,createdAt:string,lastUpdate:string){
    var car = new Car("",brand,registration,country,createdAt,lastUpdate);
    // MOCK http://localhost:3004/cars/
    
    this.http.put("http://10.114.106.93:8080/postgre_test/cars/"+id,car).subscribe(
      (data:any) => {
      },
      result => {     
      });
  } 

  /* ----- CODIGOS DE ERROR -----
  Si haces la peticion de un coche con una id que no existe, te responde con un 404
  Si si que existe, con un 201
  Y si hay un error del servidor, con un 500
  */

  
}