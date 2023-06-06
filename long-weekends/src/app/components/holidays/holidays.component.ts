import { Component, OnInit } from '@angular/core';
import { CalendarComponent } from '../calendar/calendar.component';


@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css']
})
export class HolidaysComponent extends CalendarComponent {

  holidays:any={};

  ngAfterViewInit(): void {
    this.getPublicHolidays(2023,"AR")
    this.getNextPublicHolidays("AR")
    
  }

  getPublicHolidays(year:number,countryCode:string){
    this.holidayService.getPublicHolidays(year,countryCode).subscribe(holidays=>{
      this.holidays = holidays
      console.log(this.holidays)
    })

  }

  getNextPublicHolidays(countryCode:string){
    this.holidayService.getNextPublicHolidays(countryCode).subscribe(nextHolidays=>{
      this.holidays = nextHolidays;
      console.log(this.holidays)
    })

  }



}
