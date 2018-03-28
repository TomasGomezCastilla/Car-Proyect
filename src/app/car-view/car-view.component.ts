import { Component, OnInit, Input } from '@angular/core';
import { NgModule }      from '@angular/core';
import { NgIf } from '@angular/common';
// CLASSES
import { Car } from "../../Classes/Car";
// SERVICES
import { CarService } from "../../Services/car.service";
// ROUTING
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-view',
  templateUrl: './car-view.component.html',
  styleUrls: ['./car-view.component.css']
})
export class CarViewComponent implements OnInit {

  private id:string = "";
  private car:Car;
  private  countrySelect = "";
  private brandSelect = "";

  // CONSTRUTOR
  constructor(private route:ActivatedRoute,private carService:CarService,private router:Router) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.carService.getCarId(this.id);
  }
  ngOnInit() {
  }

  // METHODS
  removeCar(){
    this.carService.removeCar(this.id);
    this.router.navigateByUrl("");
  }

  modifyCar(brand:string){
    this.carService.modifyCar(this.carService.lastGotCar.id,this.brandSelect,this.carService.lastGotCar.registration
                              ,this.countrySelect,this.carService.lastGotCar.created_at,new Date().toLocaleDateString());
  }

}
