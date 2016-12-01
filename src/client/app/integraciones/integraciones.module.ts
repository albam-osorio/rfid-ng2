import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ButtonModule } from 'primeng/primeng';
import { InputTextareaModule } from 'primeng/primeng';
import { TabViewModule } from 'primeng/primeng';

import { IntegracionesComponent } from './integraciones.component';
import { IntegracionesService } from './integraciones.service';
import { IntegracionesRoutes } from './integraciones.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TabViewModule,

    RouterModule.forChild(IntegracionesRoutes)
  ],
  declarations: [
    IntegracionesComponent
  ],
  exports: [IntegracionesComponent],
  providers: [IntegracionesService]
})
export class IntegracionesModule { }