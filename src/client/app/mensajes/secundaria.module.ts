import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { RouterModule } from '@angular/router';

import {AccordionModule} from 'primeng/primeng';
import {AutoCompleteModule} from 'primeng/primeng';
import {BreadcrumbModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {CalendarModule} from 'primeng/primeng';
import {CarouselModule} from 'primeng/primeng';
import {ChartModule} from 'primeng/primeng';
import {CheckboxModule} from 'primeng/primeng';
import {CodeHighlighterModule} from 'primeng/primeng';
import {SharedModule} from 'primeng/primeng';
//import {ConfirmDialogModule} from 'primeng/primeng';
import {ContextMenuModule} from 'primeng/primeng';
import {DataGridModule} from 'primeng/primeng';
import {DataListModule} from 'primeng/primeng';
import {DataScrollerModule} from 'primeng/primeng';
import {DataTableModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import {DragDropModule} from 'primeng/primeng';
import {DropdownModule} from 'primeng/primeng';
import {EditorModule} from 'primeng/primeng';
import {FieldsetModule} from 'primeng/primeng';
import {FileUploadModule} from 'primeng/primeng';
import {GalleriaModule} from 'primeng/primeng';
import {GMapModule} from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';
import {InputMaskModule} from 'primeng/primeng';
import {InputSwitchModule} from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';
import {InputTextareaModule} from 'primeng/primeng';
import {LightboxModule} from 'primeng/primeng';
import {ListboxModule} from 'primeng/primeng';
import {MegaMenuModule} from 'primeng/primeng';
import {MenuModule} from 'primeng/primeng';
import {MenubarModule} from 'primeng/primeng';
import {MessagesModule} from 'primeng/primeng';
import {MultiSelectModule} from 'primeng/primeng';
import {OrderListModule} from 'primeng/primeng';
import {OverlayPanelModule} from 'primeng/primeng';
import {PaginatorModule} from 'primeng/primeng';
import {PanelModule} from 'primeng/primeng';
import {PanelMenuModule} from 'primeng/primeng';
import {PasswordModule} from 'primeng/primeng';
import {PickListModule} from 'primeng/primeng';
import {ProgressBarModule} from 'primeng/primeng';
import {RadioButtonModule} from 'primeng/primeng';
import {RatingModule} from 'primeng/primeng';
import {ScheduleModule} from 'primeng/primeng';
import {SelectButtonModule} from 'primeng/primeng';
import {SlideMenuModule} from 'primeng/primeng';
import {SliderModule} from 'primeng/primeng';
import {SpinnerModule} from 'primeng/primeng';
import {SplitButtonModule} from 'primeng/primeng';
import {TabMenuModule} from 'primeng/primeng';
import {TabViewModule} from 'primeng/primeng';
import {TerminalModule} from 'primeng/primeng';
import {TieredMenuModule} from 'primeng/primeng';
import {ToggleButtonModule} from 'primeng/primeng';
import {ToolbarModule} from 'primeng/primeng';
import {TooltipModule} from 'primeng/primeng';
import {TreeModule} from 'primeng/primeng';
import {TreeTableModule} from 'primeng/primeng';

import { SecundariaComponent } from './secundaria.component';
import { DespachosSecundariaComponent } from './despachos/despachos-secundaria.component';
import { RecogidasSecundariaComponent } from './recogidas/recogidas-secundaria.component';

import { LocalStorageService } from '../common/services/local-storage.service';
import { SecundariaService } from './secundaria.service';

import { SecundariaRoutes } from './secundaria.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    //
    AccordionModule,
    AutoCompleteModule,
    BreadcrumbModule,
    ButtonModule,
    CalendarModule,
    CarouselModule,
    ChartModule,
    CheckboxModule,
    CodeHighlighterModule,
    SharedModule,
    ContextMenuModule,
    DataGridModule,
    DataListModule,
    DataScrollerModule,
    DataTableModule,
    DialogModule,
    // ConfirmDialogModule,
    DragDropModule,
    DropdownModule,
    EditorModule,
    FieldsetModule,
    FileUploadModule,
    GalleriaModule,
    GMapModule,
    GrowlModule,
    InputMaskModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    LightboxModule,
    ListboxModule,
    MegaMenuModule,
    MenuModule,
    MenubarModule,
    MessagesModule,
    MultiSelectModule,
    OrderListModule,
    OverlayPanelModule,
    PaginatorModule,
    PanelModule,
    PanelMenuModule,
    PasswordModule,
    PickListModule,
    ProgressBarModule,
    RadioButtonModule,
    RatingModule,
    ScheduleModule,
    SelectButtonModule,
    SlideMenuModule,
    SliderModule,
    SpinnerModule,
    SplitButtonModule,
    TabMenuModule,
    TabViewModule,
    TerminalModule,
    TieredMenuModule,
    ToggleButtonModule,
    ToolbarModule,
    TooltipModule,
    TreeModule,
    TreeTableModule,
    //
    RouterModule.forChild(SecundariaRoutes)
  ],
  declarations: [
    SecundariaComponent,
    DespachosSecundariaComponent,
    RecogidasSecundariaComponent
  ],
  exports: [SecundariaComponent],
  providers: [LocalStorageService, SecundariaService]
})
export class SecundariaModule { }



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
//         secundariaRouting,
//     ],
//     declarations: [
//         SecundariaComponent,

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

