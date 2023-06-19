import { Injectable } from '@angular/core';
import { restService } from './restService';

@Injectable({
  providedIn: 'root'
})
export class LongWeekendsService extends restService {


getLongWeekend(year: number, countryCode: string) {
  const endpoint = `LongWeekend/${year}/${countryCode}`;
  return this.get(endpoint);
}
}