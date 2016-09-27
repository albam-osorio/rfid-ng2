import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {PanelModule, DataTableModule, SharedModule, DropdownModule, ContextMenuModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {SplitButtonModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import {InputTextareaModule} from 'primeng/primeng';
import {DataListModule} from 'primeng/primeng';
import {DataScrollerModule} from 'primeng/primeng';
import {DataGridModule} from 'primeng/primeng';
import {MessagesModule} from 'primeng/primeng';

import { PrimengComponent } from './primeng.component';
import { CarService } from './cars/carservice';

@NgModule({
  imports: [
    CommonModule, FormsModule,
    PanelModule, DataTableModule, SharedModule, DropdownModule, ContextMenuModule,
    ButtonModule, SplitButtonModule,
    DialogModule,
    InputTextareaModule,
    DataListModule,
    DataScrollerModule,
    DataGridModule,
    MessagesModule,
  ],
  declarations: [PrimengComponent],
  exports: [PrimengComponent],
  providers: [CarService]
})
export class PrimengModule { }
