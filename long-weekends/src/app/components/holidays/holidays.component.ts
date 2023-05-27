import { Component, OnInit } from '@angular/core';
import { HolidaysProvService } from '../../services/holidays-prov.service';


@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css']
})
export class HolidaysComponent implements OnInit {

 

  constructor(private ApiHolidays: HolidaysProvService) { }

  ngOnInit() {
    this.getcountries()
  }

  getcountries(){

    this.ApiHolidays.getCountries().subscribe(data=>{
      console.log(data)
    },
    err=>{
      console.log(err)
    })


  }

}
