import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';
import { PublicHolidayService } from '../../services/public-holiday.service';
import { LongWeekendsService } from 'src/app/services/long-weekends.service';
import { calendarOptions } from 'src/app/config/calendar.config';
import { Router } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/core';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  calendarConfig:CalendarOptions = calendarOptions;
  initialView: string = calendarOptions.initialView
  route:string = this.router.url


  constructor( protected countriesPovider: CountriesService,
               protected holidaysProvider: PublicHolidayService,
               protected longweekendProvider: LongWeekendsService,
               private   router: Router) {
                }
ngOnInit(): void {
    this.change()
}

change(){
  this.calendarConfig.initialView = (this.route === '/long-weekends') ? 'listMonth' : 'dayGridMonth';
  }

}
