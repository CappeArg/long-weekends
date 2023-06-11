import { Injectable } from '@angular/core';
import { exececuteService } from './execRequest';

@Injectable({
  providedIn: 'root'
})
export class PublicHolidayService {

constructor(private service : exececuteService) { }

getPublicHolidays(year: number, countryCode: string) {
  const endpoint = `PublicHolidays/${year}/${countryCode}`;
  return this.service.get(endpoint);
}

getNextPublicHolidays(countryCode: string) {
  const endpoint = `NextPublicHolidays/${countryCode}`;
  return this.service.get(endpoint);
}

}
