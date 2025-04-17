import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey = '38e4c8142ddcccd6a4212c2824b11ada';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

    getWeather(city: string): Observable<any> {
    const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric&lang=pt_br`;
    return this.http.get(url);
  }
}
