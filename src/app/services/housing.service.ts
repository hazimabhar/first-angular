import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  url = 'http://localhost:3000/locations';

  constructor(private http: HttpClient) {}

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
