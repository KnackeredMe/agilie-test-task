import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassTransformerService {

  constructor() { }

  transform<T>(obj: T): T {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }
    if (Array.isArray(obj)) {
      return obj.map(item => this.transform(item)) as T;
    }
    const transformed: any = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const newKey = this.snakeToCamelCase(key);
        transformed[newKey] = this.transform(obj[key]);
      }
    }

    return transformed as T;
  }

  snakeToCamelCase(key: string) {
    return key.replace(/(_\w)/g, s => s[1].toUpperCase());
  }
}
