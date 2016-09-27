import { argv } from 'yargs';
import {EnvConfig} from './env-config.interface';

const BaseConfig: EnvConfig = {
  // Sample API url
  API: 'http://localhost:'+(argv['port'] || 3000)+'/'
};

export = BaseConfig;

