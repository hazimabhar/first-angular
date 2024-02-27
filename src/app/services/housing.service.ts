import { Injectable } from '@angular/core';
import { HousingLocation } from '../interfaces/housing-location';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  url = 'http://localhost:3000/locations';

  constructor(private http: HttpClient) {}

  // async getAllHousingLocations(): Promise<HousingLocation[]> {
  //   const data = await fetch(this.url);
  //   return (await data.json()) ?? [];
  // }

  // async getHousingLocationById(
  //   id: Number
  // ): Promise<HousingLocation | undefined> {
  //   const data = await fetch(`${this.url}/${id}`);
  //   return (await data.json()) ?? [];
  // }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }

  getAllHousingLocations(): Observable<any>{
    return this.http.get(this.url)
  }

  getHousingLocationById(id:number): Observable<any>{
    return this.http.get(this.url+`/${id}`)
  }
}
