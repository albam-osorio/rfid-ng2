import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Config } from '../common/config/index';

//const API_HOST: string = "http://localhost:8080";
const API_HOST: string = "http://10.1.2.81:8080";
const API_URL: string = "/rfid/api/sync";

@Injectable()
export class IntegracionesService {

  constructor(private http: Http) {

  }

  syncAll(): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let url = `${API_HOST}${API_URL}/all`;
    console.log(`syncAll`);
    console.log(url);
    return this.http.post(url, {}, options)
      .map((res: Response) => res.status)
      .catch(this.handleError);
  }

  syncLocaciones(): Observable<any> {
    let url = `${API_HOST}${API_URL}/locaciones`;
    console.log(url);
    return this.http.post(url, {})
      .map((res: Response) => res.status)
      .catch(this.handleError);
  }

  syncProductos(): Observable<any> {
    let url = `${API_HOST}${API_URL}/productos`;
    console.log(url);
    return this.http.post(url, {})
      .map((res: Response) => res.status)
      .catch(this.handleError);
  }

  syncDespachosCreate(): Observable<any> {
    let url = `${API_HOST}${API_URL}/despachos`;
    console.log(url);
    return this.http.post(url, {})
      .map((res: Response) => res.status)
      .catch(this.handleError);
  }

  syncDespachosUpdate(externalId: string[]): Observable<any> {
    let url = `${API_HOST}${API_URL}/despachos`;
    console.log(url);
    console.log(JSON.stringify(externalId));

    return this.http.put(url, externalId)
      .map((res: Response) => res.status)
      .catch(this.handleError);
  }

  syncSalidasTiendas(): Observable<any> {
    let url = `${API_HOST}${API_URL}/salidas`;
    console.log(url);
    return this.http.post(url, {})
      .map((res: Response) => res.status)
      .catch(this.handleError);
  }

  syncOrdenesProduccion(): Observable<any> {
    let url = `${API_HOST}${API_URL}/ordenes`;
    console.log(url);
    return this.http.post(url, {})
      .map((res: Response) => res.status)
      .catch(this.handleError);
  }

  syncEntradasProductosTerminado(): Observable<any> {
    let url = `${API_HOST}${API_URL}/entradas`;
    console.log(url);
    return this.http.post(url, {})
      .map((res: Response) => res.status)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    console.error(JSON.stringify(error));
    let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
} 