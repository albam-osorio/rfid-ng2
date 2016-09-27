import { Injectable } from '@angular/core';

import {SecundariaService} from '../secundaria.service';

@Injectable()
export class DespachosService {
  constructor(private secundariaService: SecundariaService) {
  }
}
