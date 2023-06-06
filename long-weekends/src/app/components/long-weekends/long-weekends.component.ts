import { Component, OnInit } from '@angular/core';
import { HolidaysProvService } from '../../services/holidays-prov.service';
import { CalendarComponent } from '../calendar/calendar.component';

@Component({
  selector: 'app-long-weekends',
  templateUrl: './long-weekends.component.html',
  styleUrls: ['./long-weekends.component.css']
})
export class LongWeekendsComponent extends CalendarComponent {

  longweekend:any = {}


  ngAfterViewInit(): void {
    this.getLongWeekends(2023,"AR")
  }

  getLongWeekends(year:number, countryCode:string){
    this.holidayService.getLongWeekend(year,countryCode).subscribe(weekends=>{
      this.longweekend = weekends
      console.log(this.longweekend)
    })
      
  }

}
