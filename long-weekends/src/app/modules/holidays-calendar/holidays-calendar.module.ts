import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FullCalendarModule } from '@fullcalendar/angular';

import { CalendarComponent } from 'src/app/components/calendar/calendar.component';
import { CountriesComponent } from 'src/app/components/countries/countries.component';
import { FormsModule } from '@angular/forms';
import { SelectComponent } from 'src/app/common/molecules/select/select.component';
import { ButtonComponent } from 'src/app/common/atoms/button/button.component';
import { CalendarpageComponent } from 'src/app/pages/calendarpage/calendarpage.component';



@NgModule({
  declarations: [
    CalendarComponent,
    CountriesComponent,
    SelectComponent,
    ButtonComponent,
    CalendarpageComponent],
  imports: [
    CommonModule,
    FullCalendarModule,
    HttpClientModule,
    FormsModule
  ]
})
export class HolidaysCalendarModule { }
