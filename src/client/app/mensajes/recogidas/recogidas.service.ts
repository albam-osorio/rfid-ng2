import { Injectable } from '@angular/core';

import {MensajesService} from '../mensajes.service';

@Injectable()
export class RecogidasService {
  constructor(private mesnsajesService: MensajesService) {
  }
}
