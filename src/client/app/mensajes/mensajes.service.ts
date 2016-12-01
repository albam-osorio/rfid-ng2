import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Config } from '../common/config/index';
import { Vista } from '../common/dto/Vista';

@Injectable()
export class MensajesService {

  constructor(private http: Http) { }

  getVistasDespachos() {
    return this.http.get(`${Config.API}assets/data/tms-s/despachos.json`)
      .map((res: Response) => <Vista[]>res.json().data)
      .catch(this.handleError);
  }

  getVistasRecogidas() {
    return this.http.get(`${Config.API}assets/data/tms-s/recogidas.json`)
      .map((res: Response) => <Vista[]>res.json().data)
      .catch(this.handleError);
  }

  // getTransicionesEstadoOrden() {
  //   return this.http.get(`${API_HOST}${API_URL}/transiciones/orden`)
  //     .toPromise()
  //     .then(res => res.json());
  // }

  /**
    * Handle HTTP error
    */
  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
