import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CalendarpageComponent } from './pages/calendarpage/calendarpage.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'holidays', component: CalendarpageComponent},
  {path: 'long-weekends', component: CalendarpageComponent},
  {path:'**', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
