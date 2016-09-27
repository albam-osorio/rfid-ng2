
import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Car} from './car';
import { Config } from '../../../common/config/index';

@Injectable()
export class CarService {

    constructor(private http: Http) {}

    getCarsMedium(): Observable<Car[]> {
        return this.http.get(`${Config.API}app/primeng/resources/data/cars-medium.json`)
                    .map((res: Response) => <Car[]>res.json().data)
                    .catch(this.handleError);
    }

    private handleError (error: any) {
      // In a real world app, we might use a remote logging infrastructure
      // We'd also dig deeper into the error to get a better message
      let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
      return Observable.throw(errMsg);
  }
}
