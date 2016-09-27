import { Routes } from '@angular/router';

import { SecundariaComponent } from './tms-s/index';

import { PrimariaRoutes } from './tms-p/index';
import { SecundariaRoutes } from './tms-s/index';
import { OperacionesRoutes } from './wms/index';
import { PrimengRoutes } from './_seed/primeng/index';

export const appRoutes: Routes = [
  ...PrimariaRoutes,
  ...SecundariaRoutes,
  ...OperacionesRoutes,
  ...PrimengRoutes,
  {
    path: '',
    component: SecundariaComponent
  }
];

export const appRoutingProviders: any[] = [

];
