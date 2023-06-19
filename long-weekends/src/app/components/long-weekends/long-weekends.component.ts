import { Component } from '@angular/core';
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
    this.longweekendProvider.getLongWeekend(year,countryCode).subscribe(weekends=>{
      this.longweekend = weekends
    })
      
  }

}
