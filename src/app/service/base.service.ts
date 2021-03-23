import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  data = {
    'drivers': [
      {
        id: 1,
        name: 'Philip',
        email: 'p@.com',
        phone: 362145874,
        city: 'Los Angeles',
        address: 'my address',
      },
      {
        id: 2,
        name: 'John Doe',
        email: 'jd@.com',
        phone: 3999999999,
        city: 'Tel Aviv',
        address: 'Rabbi street 55.',
      },
      {
        id: 3,
        name: 'Jane Eire',
        email: 'jeire@.com',
        phone: 344444444,
        city: 'Honolulu',
        address: 'Star Alley 44.',
      },
    ],
    'vehicles': [
      {
        id: 1,
        name: 'GOD-258',
        year: '2015',
        manufacturer: 'VW',
        consumption: 7,
        engine: 'diesel',
      }
    ],
    'fuelings': [
      {
        id: 1,
        vehicle: 1,
        driver: 1,
        amount: 40,
        date: '2019-04-02',
      }
    ],
  }

  constructor() { }

  getAll(datatype: string): any[] {
    if (datatype === 'drivers')
      return this.data.drivers;
    return [];
  }
}
