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
  selectedValue: string = '';
  choose: string = "choose a country"
  value:string = 'countryCode'
  name:string = 'name'

  //cargo primero la vista para evitar errores
  ngAfterViewInit(): void {
    this.getCountries() 
    
 }

   onSelectedValueChange(value: string) {
    this.selectedValue = value;
  // Utiliza el valor seleccionado en el componente receptor
}

 handleButtonClick() {

  if(this.ifLongweekends(this.route)){
    this.getLongWeekends(this.actualYear, this.selectedValue);


  }
  else{
 this.getPublicHolidays(this.actualYear, this.selectedValue );

  }
 this.getCountryInfo()
    
}

  getCountries(){
    this.countriesPovider.getCountries().subscribe(countries=>{
      this.countries = countries
    })
  }

  getCountryInfo() {
    this.countriesPovider.getCountryInfo(this.selectedValue).subscribe(info => {
      this.countryInfo = info;
    });
    
  }




}



  

