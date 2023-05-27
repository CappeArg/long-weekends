import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HolidaysComponent } from './components/holidays/holidays.component';
import { LongWeekendsComponent } from './components/long-weekends/long-weekends.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'holidays', component: HolidaysComponent},
  {path: 'long-weekends', component: LongWeekendsComponent},
  {path:'**', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
