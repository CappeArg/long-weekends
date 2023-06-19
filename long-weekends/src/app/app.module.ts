import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';

import { HolidaysCalendarModule } from './modules/holidays-calendar/holidays-calendar.module';

import { H1Component } from './common/atoms/h1/h1.component';
import { ParagraphComponent } from './common/atoms/paragraph/paragraph.component';
import { LinkComponent } from './common/atoms/link/link.component';
import { ImageComponent } from './common/atoms/image/image.component';
import { CalendarpageComponent } from './pages/calendarpage/calendarpage.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    H1Component,
    ParagraphComponent,
    LinkComponent,
    ImageComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HolidaysCalendarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

