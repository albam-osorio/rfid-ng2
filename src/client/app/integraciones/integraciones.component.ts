import { Component, OnInit } from '@angular/core';
import { IntegracionesService } from './integraciones.service';

@Component({
  moduleId: module.id,
  selector: 'integraciones',
  templateUrl: 'integraciones.component.html',
})
export class IntegracionesComponent implements OnInit {
  externalId: string;
  externalIdCount: number = 0;
  externalIdDistinctCount: number = 0;

  locked: boolean = false;
  constructor(private integracionesService: IntegracionesService) {

  }

  ngOnInit() {
  }

  syncAll() {
    this.lock();
    this.integracionesService.syncAll()
      .subscribe(data => {
        this.unlock();
      });
  }

  syncLocaciones() {
    this.lock();
    this.integracionesService.syncLocaciones()
      .subscribe(data => {
        this.unlock();
      });
  }

  syncProductos() {
    this.lock();
    this.integracionesService.syncProductos()
      .subscribe(data => {
        this.unlock();
      });
  }

  syncDespachosCreate() {
    this.lock();
    this.integracionesService.syncDespachosCreate()
      .subscribe(data => {
        this.unlock();
      });
  }

  syncDespachosUpdate() {
    this.lock();
    this.integracionesService.syncDespachosUpdate(this.externalId.split("\n"))
      .subscribe(data => {
        this.unlock();
      });
  }

  clearExternalId() {
    this.externalId = "";
  }

  onChangeExternalId() {
    if (this.externalId) {
      let a = this.externalId.split("\n");
      this.externalIdCount = a.length;

      let b = [];
      a.forEach(function (item: string) {
        if (item !== "") {
          if (b.indexOf(item) < 0) {
            b.push(item);
          }
        }
      });
      this.externalIdDistinctCount = b.length;
    } else {
      this.externalIdCount = 0;
      this.externalIdDistinctCount = 0;
    }
  }

  syncSalidasTiendas() {
    this.lock();
    this.integracionesService.syncSalidasTiendas()
      .subscribe(data => {
        this.unlock();
      });
  }

  syncOrdenesProduccion() {
    this.lock();
    this.integracionesService.syncOrdenesProduccion()
      .subscribe(data => {
        this.unlock();
      });
  }

  syncEntradasProductosTerminado() {
    this.lock();
    this.integracionesService.syncEntradasProductosTerminado()
      .subscribe(data => {
        this.unlock();
      });
  }

  lock() {
    this.locked = true;
  }

  unlock() {
    this.locked = false;
  }

  isLocked() {
    return this.locked;
  }
}
