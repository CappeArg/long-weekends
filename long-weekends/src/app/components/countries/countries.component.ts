import { Component } from '@angular/core';
import { CalendarComponent } from '../calendar/calendar.component';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent extends CalendarComponent {
  
  countries:any[] =[]
  countryInfo:any = {}
  select: string="";

  ngAfterViewInit(): void {
    this.getCountries() 
    
 }

  getCountries(){
    this.countriesPovider.getCountries().subscribe(countries=>{
      this.countries = countries
      console.log(this.countries)
    })
  }

  getCountryInfo(codeCountry:string){
    this.countriesPovider.getCountryInfo(codeCountry).subscribe(info=>{
      this.countryInfo = info
         console.log(this.countryInfo)
    })
  }

}
