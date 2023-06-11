import { Injectable } from '@angular/core';
import { exececuteService } from './execRequest';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

constructor(private service:exececuteService) { }

getCountries(): Observable<any> {
  const endpoint = "AvailableCountries";
  return this.service.get(endpoint);
}

getCountryInfo(countryCode: string) {
  const endpoint = `CountryInfo/${countryCode}`;
  return this.service.get(endpoint);
}

}
