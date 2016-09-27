import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {TabViewModule} from 'primeng/primeng';

import { PrimariaComponent } from './primaria.component';
import { PrimariaService } from './primaria.service';
import { PrimariaRoutes } from './primaria.routes';

@NgModule({
  imports: [
    CommonModule,

    TabViewModule,

    RouterModule.forChild(PrimariaRoutes)
  ],
  declarations: [
    PrimariaComponent
  ],
  exports: [PrimariaComponent],
  providers: [PrimariaService]
})
export class PrimariaModule { }



// import {PanelModule, DataTableModule, SharedModule, DropdownModule, ContextMenuModule} from 'primeng/primeng';
// import {ButtonModule} from 'primeng/primeng';
// import {SplitButtonModule} from 'primeng/primeng';
// import {DialogModule} from 'primeng/primeng';
// import {InputTextareaModule} from 'primeng/primeng';
// import {DataListModule} from 'primeng/primeng';
// import {DataScrollerModule} from 'primeng/primeng';
// import {DataGridModule} from 'primeng/primeng';
// import {MessagesModule} from 'primeng/primeng';

// import { ResumenEstadoOrdenesOrigenComponent } from './despachos/resumenes/estado-ordenes-origen.component';
// import { ResumenEstadoEntregasOrigenComponent } from './despachos/resumenes/estado-entregas-origen.component';
// import { ResumenReprogramacionesPendientesComponent } from './despachos/resumenes/reprogramaciones-pendientes.component';

// import { SolicitudesDespachosComponent } from './despachos/ordenes/solicitudes-despachos.component';
// import { LineasSolicitudDespachoComponent } from './despachos/ordenes/lineas-solicitud-despacho.component';
// import { ExcepcionesDespachosComponent } from './despachos/ordenes/excepciones-despachos.component';
// import { EntregasDespachosComponent } from './despachos/ordenes/entregas-despachos.component';
// import { NovedadesDespachosComponent } from './despachos/ordenes/novedades-despachos.component';
// import { CumplidosDespachosComponent } from './despachos/ordenes/cumplidos-despachos.component';
// import { OtifDespachosComponent } from './despachos/ordenes/otif-despachos.component';


// import { ListasOmsService } from '../common/listas-oms.service';
// import { LocalStorageService } from '../common/local-storage.service';
// import { UserService } from '../common/user.service';
//
// import { DespachosService } from './despachos/despachos.service';

// @NgModule({
//     imports: [
//         CommonModule,
//         FormsModule,
//         PanelModule, DataTableModule, SharedModule, DropdownModule, ContextMenuModule,
//         ButtonModule, SplitButtonModule,
//         DialogModule,
//         InputTextareaModule,
//         DataListModule,
//         DataScrollerModule,
//         DataGridModule,
//         MessagesModule,
//         primariaRouting,
//     ],
//     declarations: [
//         primariaComponent,

//         ResumenEstadoOrdenesOrigenComponent,
//         ResumenEstadoEntregasOrigenComponent,
//         ResumenReprogramacionesPendientesComponent,

//         SolicitudesDespachosComponent,
//         LineasSolicitudDespachoComponent,

//         ExcepcionesDespachosComponent,
//         EntregasDespachosComponent,
//         NovedadesDespachosComponent,
//         CumplidosDespachosComponent,
//         OtifDespachosComponent

//     ],
//     providers: [
//         LocalStorageService,
//         UserService,
//         ListasOmsService,
//         DespachosService
//     ]
// })

