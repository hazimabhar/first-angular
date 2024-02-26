import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../services/housing.service';
import { HousingLocation } from '../interfaces/housing-location';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,

  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute)
  housingLocationService = inject(HousingService)
  housingLocation: HousingLocation | undefined

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id'])

    this.housingLocation = this.housingLocationService.getHousingLocationById(housingLocationId)
  }
}

