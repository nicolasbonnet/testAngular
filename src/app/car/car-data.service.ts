import { Injectable } from '@angular/core';
import {Car} from './car';

@Injectable({
  providedIn: 'root'
})
export class CarDataService {

  lastId: number;

  cars: Car[] = [];

  constructor() {

  }

  getAllCar() : Car[] {
    return this.cars;
  }

  addCar(car: Car) : CarDataService {
    if(!car.id){
      car.id = ++this.lastId;
    }

    // let convertedNbPort = parseInt(car.nbPort);
    //
    // if(!Number.isInteger(convertedNbPort)){
    //   return null;
    // }

    this.cars.push(car);

    return this;
  }

  removeCar(id: number) : CarDataService {
    this.cars.filter(car => car.id !== id);

    return this;
  }

  getCarById(id: number) : Car {
    return this.cars.filter(car => car.id === id).pop();
  }

  updateCarById (id: number, values: Object={}) : Car {
    let car = this.getCarById(id);

    if (!car.id){
      return null;
    }

    Object.assign(car, values);

    return car;
  }

}
