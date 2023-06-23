import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { restService } from './restService';

@Injectable({
  providedIn: 'root'
})
export class CountriesService extends restService {

getCountries(): Observable<any> {
  const endpoint = "AvailableCountries";
  return this.get(endpoint);
}

getCountryInfo(countryCode: string) {
  const endpoint = `CountryInfo/${countryCode}`;
  return this.get(endpoint);
}

}
