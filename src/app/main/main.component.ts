import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
  import { NgModule }      from '@angular/core';
// SERVICES
import { CarService } from "../../Services/car.service";
// CLASSES
import { Car } from "../../Classes/Car";
// ROUTING
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  // VARIABLES
  private cars: Car[] = [];
  private idFilter:string = "";
  private brandFilter:string = "ALL";

  // CONSTRUCTOR
  constructor(private carService:CarService,private router:Router,private route: ActivatedRoute) {
    this.cars = this.carService.getAllCars();
    this.carFilter();
   }
  ngOnInit() {
  }

  // METHODS
  private carFilter():Car[]{
    var carsFilter: Car[] = [];

    for (const object of this.cars) {
  
        if((object.brand == this.brandFilter || this.brandFilter == "ALL") 
        && (object.id == this.idFilter || this.idFilter == ""))
        {
          var car = new Car(object.id,object.brand,object.registration,
                            object.country,object.createdAt,object.lastUpdated);
          carsFilter.push(car);
        }
    }
    return carsFilter;
  }

  private resetSearch():void{
    this.brandFilter="ALL";
    this.idFilter="";
  }


}
