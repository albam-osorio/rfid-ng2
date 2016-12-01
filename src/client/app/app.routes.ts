import { Routes } from '@angular/router';

import { IntegracionesComponent } from './integraciones/index';

import { IntegracionesRoutes } from './integraciones/index';
import { MensajesRoutes } from './mensajes/index';
import { PrimengRoutes } from './_seed/primeng/index';

export const appRoutes: Routes = [
  ...IntegracionesRoutes,
  ...MensajesRoutes,
  ...PrimengRoutes,
  {
    path: '',
    component: IntegracionesComponent
  }
];

export const appRoutingProviders: any[] = [

];
