import { Injectable } from '@angular/core';
import { restService } from './restService';

@Injectable({
  providedIn: 'root'
})
export class PublicHolidayService extends restService {


getPublicHolidays(year: number, countryCode: string) {
  const endpoint = `PublicHolidays/${year}/${countryCode}`;
  return this.get(endpoint);
}

getNextPublicHolidays(countryCode: string) {
  const endpoint = `NextPublicHolidays/${countryCode}`;
  return this.get(endpoint);
}

}
