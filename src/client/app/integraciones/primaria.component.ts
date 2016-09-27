import { Component, OnInit} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'tms-p',
  templateUrl: 'primaria.component.html',

})
export class PrimariaComponent implements OnInit {
  tabIndex: number = 0;
  constructor() {
    //
  }

  ngOnInit() {
    //this.tabIndex = this.localStorageService.getDefaultTabIndex(LS_KEY_TABINDEX);
  }

  tabPanelChanged(event) {
    this.tabIndex = event.index;
    //localStorage.setItem(LS_KEY_TABINDEX, `${this.tabIndex}`);
  }
}
