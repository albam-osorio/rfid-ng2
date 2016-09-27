import { Component, OnInit } from '@angular/core';
import {Car} from './cars/car';
import {CarService} from './cars/carservice';

class PrimeCar implements Car {

  constructor(public vin?: any, public year?: any, public brand?: any, public color?: any) { }
}

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'primeng-home',
  templateUrl: 'primeng.component.html',
  styleUrls: ['primeng.component.css'],
})

export class PrimengComponent implements OnInit {
  displayDialog: boolean;

  car: Car = new PrimeCar();

  selectedCar: Car;

  newCar: boolean;

  cars: Car[];

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getCarsMedium()
      .subscribe(
      cars => this.cars = cars
      );
  }

  showDialogToAdd() {
    this.newCar = true;
    this.car = new PrimeCar();
    this.displayDialog = true;
  }

  save() {
    if (this.newCar) {
      this.cars.push(this.car);
    } else {
      this.cars[this.findSelectedCarIndex()] = this.car;
    }

    this.car = null;
    this.displayDialog = false;
  }

  delete() {
    this.cars.splice(this.findSelectedCarIndex(), 1);
    this.car = null;
    this.displayDialog = false;
  }

  onRowSelect(event: any) {
    this.newCar = false;
    this.car = this.cloneCar(event.data);
    this.displayDialog = true;
  }

  cloneCar(c: Car): Car {
    let car = new PrimeCar();
    for (var prop in c) {
      if (c.hasOwnProperty(prop)) {
        //car[prop] = c[prop];
      }
    }
    return car;
  }

  findSelectedCarIndex(): number {
    return this.cars.indexOf(this.selectedCar);
  }

}
