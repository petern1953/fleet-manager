import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  cols = {
    drivers: [
      { key: 'id', text: '#', type: 'plain' },
      { key: 'name', text: 'Name', type: 'text' },
      { key: 'email', text: 'Email', type: 'email' },
      { key: 'phone', text: 'Phone', type: 'number' },
      {
        key: 'city', text: 'City', type: 'select', options: [
        {value: 'la', text: 'LA'},
        {value: 'bp', text: 'Budapest'},
      ] },
      { key: 'address', text: 'Address', type: 'text' },
    ],
    vehicles: [
      { key: 'id', text: '#', type: 'plain' },
      { key: 'lp', text: 'LP.', type: 'text' },
      { key: 'year', text: 'Year', type: 'number' },
      { key: 'manufacturer', text: 'Man.', type: 'text' },
      { key: 'consumption', text: 'Cons.', type: 'text' },
      { key: 'engine', text: 'Eng.', type: 'text' },
    ],
    fuelings: [
      { key: 'id', text: '#', type: 'plain' },
      { key: 'vehicle', text: 'Vehicle', type: 'text' },
      { key: 'driver', text: 'Driver', type: 'text' },
      { key: 'amount', text: 'Amount', type: 'number' },
      { key: 'date', text: 'Date', type: 'text' },
    ],
  };

  constructor() {}
}
