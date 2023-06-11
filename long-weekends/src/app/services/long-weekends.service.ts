import { Injectable } from '@angular/core';
import { exececuteService } from './execRequest';

@Injectable({
  providedIn: 'root'
})
export class LongWeekendsService {

constructor( private service: exececuteService) { }

getLongWeekend(year: number, countryCode: string) {
  const endpoint = `LongWeekend/${year}/${countryCode}`;
  return this.service.get(endpoint);
}
}