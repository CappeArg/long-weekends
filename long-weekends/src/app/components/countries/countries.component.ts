import { Component, OnInit } from '@angular/core';
import { HolidaysProvService } from 'src/app/services/holidays-prov.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  constructor( private holidayService: HolidaysProvService ) { }
  
  countries:any[] =[]
  countryInfo:any = {}

  ngOnInit() {

    this.getCountries()
    this.getCountryInfo("AR")
 
  }

  getCountries(){
    this.holidayService.getCountries().subscribe(countries=>{
      this.countries = countries
      console.log(this.countries)
    })
  }

  getCountryInfo(codeCountry:string){
    this.holidayService.getCountryInfo(codeCountry).subscribe(info=>{
      this.countryInfo = info
         console.log(this.countryInfo)
    })
  }

}
