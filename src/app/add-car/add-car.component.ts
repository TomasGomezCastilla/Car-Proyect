import { Component, OnInit } from '@angular/core';
// SERVICES
import { CarService } from "../../Services/car.service";
// ROUTING
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  // ATRIBUTES
  private country:string;
  private brand:string;
  private carId:string;

  // CONSTRUCTOR
  constructor(private carService:CarService,private router:Router) { }
  ngOnInit() {
  }

  // METHODS
  private createNewCar():void {
  
   var date = new Date(Date.now());
   this.carService.postCar(this.carId,this.brand,date.toISOString(),
                            this.country,date.toISOString(),date.toISOString());
    this.router.navigate([""]);
  }
}
