import { Component, OnInit } from '@angular/core';
// SERVICES
import { CarService } from "../../Services/car.service";

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  private country:string;
  private brand:string;
  private carId:string;


  // CONSTRUCTOR
  constructor(private carService:CarService) { }
  ngOnInit() {
  }

  // METHODS
  private createNewCar():void {
   this.carService.postCar(this.carId,this.brand,new Date().toLocaleDateString(),
                            this.country,new Date().toLocaleDateString(),new Date().toLocaleDateString());
  }

}
