import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Config } from '../common/config/index';
import { Vista } from '../common/dto/Vista';

@Injectable()
export class SecundariaService {

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
// import {Vista} from '../common/Vista';
// import {ResumenClienteEstadoOrigen} from '../common/resumen-cliente-estado-origen';
// import {AceptacionOrdenes} from '../common/aceptacion-ordenes';

// //const API_HOST: string = "http://192.170.250.240:8080";
// //const API_HOST: string = "http://192.168.11.246:8080";
// const API_URL: string = "/oms/ordenes";

// @Injectable()
// export class SecundariaService {

//

//     getDespachosResumenEstadoOrdenesPorOrigen(
//         usuarioId: number,
//         fechaDesde: String,
//         fechaHasta: String): Promise<ResumenClienteEstadoOrigen> {
//         //return this.http.get('resources/data/tms-s/resumenes/despachos.json')
//         return this.http.get(`${API_HOST}${API_URL}/tms-s/despachos/resumenes/estado-ordenes-origen?usuarioId=${usuarioId}&fechaDesde=${fechaDesde}&fechaHasta=${fechaHasta}`)
//             .toPromise()
//             .then(res => res.json())
//             .then(data => { return ResumenClienteEstadoOrigenPivotHelper.getResumenClienteEstadoOrigen(data); });
//     }


//     getSolicitudesDespacho(
//         usuarioId: number,
//         fechaDesde: string,
//         fechaHasta: string,
//         clienteId: number,
//         estadoOrdenId: string,
//         bodegaOrigenId: number) {
//         //return this.http.get('resources/data/tms-s/test-ordenes.json')
//         return this.http.get(`${API_HOST}${API_URL}/tms-s/despachos/ordenes/solicitudes-despacho?usuarioId=${usuarioId}&fechaDesde=${fechaDesde}&fechaHasta=${fechaHasta}&clienteId=${clienteId}&estadoOrdenId=${estadoOrdenId}&bodegaOrigenId=${bodegaOrigenId}`)
//             .toPromise()
//             .then(res => res.json());
//     }

//     getLineasOrdenDeDespacho(
//         ordenId: number) {
//         return this.http.get(`${API_HOST}${API_URL}/tms-s/despachos/ordenes/lineas-orden-despacho?ordenId=${ordenId}`)
//             .toPromise()
//             .then(res => res.json());
//     }

//     getExcepcionesDespacho(
//         usuarioId: number,
//         fechaDesde: string,
//         fechaHasta: string,
//         clienteId: number,
//         estadoOrdenId: string,
//         bodegaOrigenId: number) {
//         return this.http.get(`${API_HOST}${API_URL}/tms-s/despachos/ordenes/excepciones-despacho?usuarioId=${usuarioId}&fechaDesde=${fechaDesde}&fechaHasta=${fechaHasta}&clienteId=${clienteId}&estadoOrdenId=${estadoOrdenId}&bodegaOrigenId=${bodegaOrigenId}`)
//             .toPromise()
//             .then(res => res.json());
//     }

//     getEntregasDeDespacho(
//         usuarioId: number,
//         fechaDesde: string,
//         fechaHasta: string,
//         clienteId: number,
//         estadoOrdenId: string,
//         bodegaOrigenId: number) {
//         return this.http.get(`${API_HOST}${API_URL}/tms-s/despachos/ordenes/entregas-despacho?usuarioId=${usuarioId}&fechaDesde=${fechaDesde}&fechaHasta=${fechaHasta}&clienteId=${clienteId}&estadoOrdenId=${estadoOrdenId}&bodegaOrigenId=${bodegaOrigenId}`)
//             .toPromise()
//             .then(res => res.json());
//     }



//     aceptarOrdenes(data: AceptacionOrdenes) {
//         return this.http.post(`${API_HOST}${API_URL}/aceptar`, data)
//             .toPromise()
//             .then(res => res.json());
//     }
// }

// class ResumenClienteEstadoOrigenPivotHelper {
//     public static getResumenClienteEstadoOrigen(data: any[]): ResumenClienteEstadoOrigen {
//         let bodegas = PivotHelper.getPivotBodegas(data);
//         let ciudades = PivotHelper.getPivotCiudades(bodegas);
//         let rows = ResumenClienteEstadoOrigenPivotHelper.getPivotRows(data, bodegas);

//         let headers = ResumenClienteEstadoOrigenPivotHelper.getPivotHeaders(data, ciudades, bodegas);
//         let colsRows = ResumenClienteEstadoOrigenPivotHelper.getPivotColsRow();
//         let colsPivot = ResumenClienteEstadoOrigenPivotHelper.getPivotColsPivot(bodegas);

//         // console.log(JSON.stringify(ciudades));
//         // console.log("----------------------------------------------------");
//         // console.log(JSON.stringify(bodegas));
//         // console.log("----------------------------------------------------");
//         // console.log(JSON.stringify(rows));
//         // console.log("----------------------------------------------------");
//         // console.log(JSON.stringify(headers));
//         // console.log("----------------------------------------------------");
//         // console.log(JSON.stringify(colsRows));
//         // console.log("----------------------------------------------------");
//         // console.log(JSON.stringify(colsPivot));

//         return new ResumenClienteEstadoOrigen(headers, colsRows, colsPivot, rows);
//     }

//     private static getPivotRows(data: any[], bodegas: any[]): any[] {
//         let array = [];
//         data.forEach(row => {
//             let e = array.find(a => a.id == row.id_row);

//             if (!e) {
//                 e = {
//                     id: row.id_row,
//                     id_cliente: row.id_cliente,
//                     cliente_codigo: row.cliente_codigo,
//                     id_estado_orden: row.id_estado_orden,
//                     estado_orden_nombre: row.estado_orden_nombre,
//                 };
//                 bodegas.forEach(a => {
//                     e[a.columna] = 0;
//                 });
//                 array.push(e);
//             }
//             e[row.bodega_columna] = row.n;
//         });

//         array.sort((a, b) => {
//             if (a.id == b.id) {
//                 return 0;
//             } else {
//                 if (a.id < b.id) {
//                     return -1;
//                 } else {
//                     return 1;
//                 }
//             }
//         });

//         return array;
//     }

//     private static getPivotHeaders(data: any[], ciudades: any[], bodegas: any[]): any[] {
//         let headers = [];

//         //--Primera linea de encabezados
//         {
//             let columns = [];
//             columns.push({ header: 'Cliente', rowspan: 2, style: { 'font-weight': 'bold', 'text-align': 'center', width: '150px' } });
//             columns.push({ header: 'Estado', rowspan: 2, style: { 'font-weight': 'bold', 'text-align': 'center', width: '150px' } });

//             ciudades.forEach(c => {
//                 columns.push({ header: c.nombre, colspan: c.n, style: { 'font-weight': 'bold', 'text-align': 'center', 'font-size': 'small', 'word-wrap': 'break-word' } })
//             });
//             headers.push({ columns: columns });
//         }

//         //--Segunda linea de encabezados
//         {
//             let columns = [];
//             columns = [];
//             bodegas.forEach(c => {
//                 //columns.push({ header: c.nombre, style: { width: '150px', 'text-align': 'center', 'font-size': 'small', 'word-wrap': 'break-word' } })
//                 columns.push({ header: c.nombre, style: { 'text-align': 'center', 'font-size': 'small', 'word-wrap': 'break-word' } })
//             });
//             headers.push({ columns: columns });
//         }
//         return headers;
//     }

//     private static getPivotColsRow(): any[] {
//         let cols = [];

//         cols.push({ field: 'cliente_codigo', header: 'Cliente' });
//         cols.push({ field: 'estado_orden_nombre', header: 'Estado' });

//         return cols;
//     }

//     private static getPivotColsPivot(bodegas: any[]): any[] {
//         let cols = [];

//         bodegas.forEach(c => {
//             cols.push({ field: c.columna, header: c.nombre });
//         });

//         return cols;
//     }
// }

// class PivotHelper {
//     public static getPivotBodegas(data: any[]): any[] {
//         let array = [];
//         data.forEach(row => {
//             let e = array.find(a => a.id == row.id_bodega);

//             if (!e) {
//                 array.push({
//                     id_ciudad: row.id_ciudad,
//                     ciudad_nombre: row.ciudad_nombre,
//                     ciudad_columna: row.ciudad_columna,

//                     id: row.id_bodega,
//                     nombre: row.bodega_nombre,
//                     columna: row.bodega_columna,

//                     n: 1
//                 });
//             } else {
//                 e.n++;
//             }
//         });

//         array.sort((a, b) => {
//             if (a.columna == b.columna) {
//                 return 0;
//             } else {
//                 if (a.columna < b.columna) {
//                     return -1;
//                 } else {
//                     return 1;
//                 }
//             }
//         });
//         return array;
//     }

//     public static getPivotCiudades(data: any[]): any[] {
//         let array = [];
//         data.forEach(row => {
//             let e = array.find(a => a.id == row.id_ciudad);

//             if (!e) {
//                 array.push({
//                     id: row.id_ciudad,
//                     nombre: row.ciudad_nombre,
//                     columna: row.ciudad_columna,

//                     n: 1
//                 });
//             } else {
//                 e.n++;
//             }
//         });

//         array.sort((a, b) => {
//             if (a.columna == b.columna) {
//                 return 0;
//             } else {
//                 if (a.columna < b.columna) {
//                     return -1;
//                 } else {
//                     return 1;
//                 }
//             }
//         });
//         return array;
//     }

// }
