import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent,
  ],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  housingLocationList: HousingLocation[] = []

  housingService : HousingService = inject(HousingService)

  constructor(){
    this.housingLocationList = this.housingService.getAllHousingLocations()
  }
}
