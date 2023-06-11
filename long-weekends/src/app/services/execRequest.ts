import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class exececuteService {

  //Armar un metodo que me traiga la URL exect_get, guardar la URL en enviroment.-
    private baseURL = environment.baseURL;
  
    constructor(private http: HttpClient) { }
  
    get(endpoint: string): Observable<any> {
      const url = `${this.baseURL}${endpoint}`;
      return this.http.get(url);
    }
  }