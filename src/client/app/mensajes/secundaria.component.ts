import { Component, OnInit} from '@angular/core';

import { LocalStorageService } from '../common/services/local-storage.service';

const KEY_TABINDEX: string = "tms-s.tabindex";

@Component({
  moduleId: module.id,
  selector: 'tms-s',
  templateUrl: 'secundaria.component.html',

})
export class SecundariaComponent implements OnInit {
  tabIndex: number = 0;
  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit() {
    this.tabIndex = this.localStorageService.getDefaultTabIndex(KEY_TABINDEX);
  }

  tabPanelChanged(event) {
    this.tabIndex = event.index;
    localStorage.setItem(KEY_TABINDEX, `${this.tabIndex}`);
  }
}
