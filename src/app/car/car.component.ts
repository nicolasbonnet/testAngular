import { Component, OnInit } from '@angular/core';
import { CarDataService } from './car-data.service';
import {Car} from './car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  providers: [CarDataService]
})
export class CarComponent implements OnInit {

  currentCar: Car = new Car();

  constructor(private carDataService: CarDataService) {

  }

  ngOnInit() {

  }

  get cars() {
    return this.carDataService.getAllCar();
  }

  addCar(){
    this.carDataService.addCar(this.currentCar);
    this.currentCar = new Car();
  }

  removeCar(id: number){
    this.carDataService.removeCar(id);
  }


}
