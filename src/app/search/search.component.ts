import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../interfaces/housing-location';
import { HousingService } from '../services/housing.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  housingLocationList: HousingLocation[] = [];

  housingService: HousingService = inject(HousingService);

  filteredLocationList: HousingLocation[] = [];

  constructor() {
    this.housingService
      .getAllHousingLocations()
      .then((response: HousingLocation[]) => {
        this.housingLocationList = response;
        this.filteredLocationList = response;
      });
  }

  filterResult(filter: string) {
    if (!filter) this.filteredLocationList = this.housingLocationList;

    this.filteredLocationList = this.housingLocationList.filter(
      (housingLocation) =>
        housingLocation?.city.toLowerCase().includes(filter.toLowerCase())
    );
  }
}
