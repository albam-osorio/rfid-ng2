import { Injectable } from '@angular/core';

import {MensajesService} from '../mensajes.service';

@Injectable()
export class DespachosService {
  constructor(private mensajesService: MensajesService) {
  }
}
