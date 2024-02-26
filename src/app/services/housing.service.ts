import { Injectable } from '@angular/core';
import { HousingLocation } from '../interfaces/housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  protected housingLocationList : HousingLocation[] = [
    {
      id: 0,
      name: 'Test Home',
      city: 'Test city',
      state: 'ST',
      photo: `${this.baseUrl}/example-house.jpg`,
      availableUnits: 99,
      wifi: true,
      laundry: false,
    },
    {
      id: 1,
      name: 'Test House',
      city: 'Test Test',
      state: 'TS',
      photo: `${this.baseUrl}/example-house.jpg`,
      availableUnits: 120,
      wifi: true,
      laundry: true,
    },
    {
      id: 2,
      name: 'Test 123',
      city: 'Test TesTest',
      state: 'LB',
      photo: `${this.baseUrl}/example-house.jpg`,
      availableUnits: 140,
      wifi: false,
      laundry: true,
    },

  ]

  constructor() { }

  getAllHousingLocations() : HousingLocation[]{
    return this.housingLocationList
  }

  getHousingLocationById(id:Number): HousingLocation | undefined {
    return this.housingLocationList.find
    (
      housingLocation => housingLocation.id === id
    )
  }
}
