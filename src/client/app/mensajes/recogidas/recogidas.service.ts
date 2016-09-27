import { Injectable } from '@angular/core';

import {SecundariaService} from '../secundaria.service';

@Injectable()
export class RecogidasService {
  constructor(private secundariaService: SecundariaService) {
  }
}
