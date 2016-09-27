import { argv } from 'yargs';
import {EnvConfig} from './env-config.interface';

const DevConfig: EnvConfig = {
  ENV: 'DEV',
  API: 'http://localhost:'+(argv['port'] || 3000)+'/',
};

export = DevConfig;

