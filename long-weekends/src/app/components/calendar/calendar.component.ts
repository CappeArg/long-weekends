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
  longweekend:any = {}
  actualYear= new Date().getFullYear()
  holidays:any={};
  countryCode:string;



  constructor( protected countriesPovider   : CountriesService,
               protected holidaysProvider   : PublicHolidayService,
               protected longweekendProvider: LongWeekendsService,
               private   router             : Router ) {
                }
ngOnInit(): void {
    this.changeInitialView()
}

  getPublicHolidays(year:number,countryCode:string){
    this.holidaysProvider.getPublicHolidays(year,countryCode).subscribe(holidays=>{
       this.holidays = holidays
       this.holidays= this.localNameToTitle(this.holidays)
       this.calendarConfig.events = this.holidays
    })
  }

  localNameToTitle(list:any[]){
    return list = list.map(item => ({
      ...item,
      title: item.localName,

    }));
  }

  getNextPublicHolidays(countryCode:string){
    this.holidaysProvider.getNextPublicHolidays(countryCode).subscribe(nextHolidays=>{
      this.holidays = nextHolidays;
    })
  }


  getLongWeekends(year:number, countryCode:string){
      this.longweekendProvider.getLongWeekend(year,countryCode).subscribe(weekends=>{
        this.longweekend = weekends
        this.longweekend = this.startDateEndDateToStartEnd(this.longweekend)
        this.calendarConfig.events = this.longweekend
      })
  }

  startDateEndDateToStartEnd(list:any[]){
    return list = list.map(item => ({
      ...item,
      title: 'LongWeekend - ' + item.dayCount + ' days',
      start: item.startDate,
      end  :  this.correctDate(item.endDate)

    }));
  }

  //I think this is the better way to change the end date and improve the Calendar view (list)
  correctDate(date){
    let newDate = new Date(date);
    
    newDate.setDate( newDate.getDate()+1)

    let stringDate = newDate.toISOString().slice(0, 10)
    return stringDate
  }

  ifLongweekends(path:string){
    return path == '/long-weekends'?true : false
  }    

  changeInitialView(){
    this.calendarConfig.initialView = (this.ifLongweekends(this.route)) ? 'listMonth' : 'dayGridMonth';
    this.calendarConfig.events = (this.ifLongweekends(this.route)) ? this.longweekend : this.holidays;

    }
  


}