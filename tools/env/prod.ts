import { argv } from 'yargs';
import {EnvConfig} from './env-config.interface';

const ProdConfig: EnvConfig = {
  ENV: 'PROD',
  API: 'http://190.143.64.171:8090/api/'
};

export = ProdConfig;

