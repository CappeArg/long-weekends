import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import { HolidaysProvService } from 'src/app/services/holidays-prov.service';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, listPlugin, bootstrap5Plugin],
    headerToolbar: {
      left: '',
      center: 'title',
      right: 'dayGridMonth,listMonth'
    },
    themeSystem: 'bootstrap5',
    events: [
      { title: 'event 1', date: '2023-05-26' },
      { title: 'event 2', date: '2023-05-27' }
    ],
    eventColor: 'orange'
  };
  
  constructor( protected holidayService: HolidaysProvService  ) { }



  ngOnInit() {

  }

}
