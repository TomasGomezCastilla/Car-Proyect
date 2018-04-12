import { Injectable } from '@angular/core';
// HTTP
import { HttpClient } from '@angular/common/http'
import { HttpParams } from '@angular/common/http'
// CLASSES
import { Car } from "../Classes/Car";
import { AuthService } from './auth.service';

@Injectable()
export class CarService {

  // ATRIBUTES
  public lastGotCar: Car;
  private config = {headers: {
    'Authorization': 'Bearer ' + localStorage.id_token,
  }
  };

  // CONSTRUCTOR
  constructor(private http:HttpClient,private authService:AuthService) {
  }

   // METHODS
  public postCar(id:string,brand:string,registration:string,country:string,createdAt:string,lastUpdate:string){
    var car = new Car(id,brand,registration,country,createdAt,lastUpdate);
    this.http.post("http://10.114.106.93:8080/postgre_test/cars",car,this.config).subscribe(
      (data:any) => {
      },
      error => {
        console.log(error); 
      });
  }

  public getAllCars():Car[]{
    var cars: Car[] = [];
    
    this.http.get("http://10.114.106.93:8080/postgre_test/cars",this.config).subscribe(
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
    this.http.get("http://10.114.106.93:8080/postgre_test/cars/"+id,this.config).subscribe(
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
    this.http.delete("http://10.114.106.93:8080/postgre_test/cars/"+id,this.config).subscribe(
      (data:any) => {
      },
      result => {     
      });

  } 

  modifyCar(id:string,brand:string,registration:string,country:string,createdAt:string,lastUpdate:string){
    var car = new Car("",brand,registration,country,createdAt,lastUpdate);
    
    this.http.put("http://10.114.106.93:8080/postgre_test/cars/"+id,car,this.config).subscribe(
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