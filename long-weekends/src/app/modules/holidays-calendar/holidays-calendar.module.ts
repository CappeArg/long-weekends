import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FullCalendarModule } from '@fullcalendar/angular';

import { LongWeekendsComponent } from 'src/app/components/long-weekends/long-weekends.component';
import { HolidaysComponent } from 'src/app/components/holidays/holidays.component';
import { CalendarComponent } from 'src/app/components/calendar/calendar.component';
import { CountriesComponent } from 'src/app/components/countries/countries.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LongWeekendsComponent,
    HolidaysComponent,
    CalendarComponent,
    CountriesComponent],
  imports: [
    CommonModule,
    FullCalendarModule,
    HttpClientModule,
    FormsModule
  ]
})
export class HolidaysCalendarModule { }
