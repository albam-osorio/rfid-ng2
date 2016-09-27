import { Injectable } from '@angular/core';
import {SelectItem} from 'primeng/primeng';

@Injectable()
export class LocalStorageService {

    getDefaultSelectItem(key: string, array: SelectItem[]) {
        let value = localStorage.getItem(key);

        if (!value) {
            value = null;
            if (array.length > 0) {
                value = array[0].value;
            }
        } else {
            let test = array.find(a => {
                return Object.is(a.value, value);
            });
            if (!test) {
                value = null;
            }
        }

        localStorage.setItem(key, value);

        return value;
    }

    getDefaultJSONSelectItem(key: string, array: SelectItem[]) {
        let value = this.readJSON(key);

        if (!value) {
            value = null;
            if (array.length > 0) {
                value = array[0].value;
            }
        }

        let test = array.find(a => {
            // console.log(`a.value = ${JSON.stringify(a.value)}`);
            // console.log(`value = ${JSON.stringify(value)}`);
            // console.log(`Object.is(a.value, value) = ${Object.is(JSON.stringify(a.value), JSON.stringify(value))}`);
            return Object.is(JSON.stringify(a.value), JSON.stringify(value));
        });

        if (!test) {
            value = null;
        }

        localStorage.setItem(key, JSON.stringify(value));

        return value;
    }

    readJSON(key: string): any {
        return JSON.parse(localStorage.getItem(key));
    }

    saveJSON(key: string, value: any) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    getDefaultTabIndex(key: string) {
        let value = localStorage.getItem(key);

        if (!value) {
            value = 0;
        }
        localStorage.setItem(key, `${value}`);

        return +value;
    }
}
