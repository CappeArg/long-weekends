import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HolidaysProvService {

  baseURL= "https://date.nager.at/api/v3/";

  constructor(private http: HttpClient) { }

//Countries
  getCountries(): Observable<any>{
    const endpoint = `${this.baseURL}AvailableCountries`;
    return this.http.get(endpoint);
  }

  getCountryInfo(countryCode:string){
    const endpoint = `${this.baseURL}/CountryInfo/${countryCode}`;
    return this.http.get(endpoint);
  }

//Long Weekend
getLongWeekend(year:number,countryCode:string){
  const endpoint = `${this.baseURL}LongWeekend/${year}/${countryCode}`;
  return this.http.get(endpoint);
}

//Public Holiday
getPublicHoliday(year:number,countryCode:string){
  const endpoint = `${this.baseURL}PublicHolidays/${year}/${countryCode}`;
  return this.http.get(endpoint)
}

getNextPublicHoliday(year:number,countryCode:string){
  const endpoint = `${this.baseURL}NextPublicHolidays/${countryCode}`;
  return this.http.get(endpoint)

}

}