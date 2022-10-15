import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Weather } from '../models/weather';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<Weather> {
    return this.http.get<Weather>(environment.baseWeatherUrl, {
      headers: new HttpHeaders()
        .set(environment.XRapidAPIHostHeader, environment.XRapidAPIHostValue)
        .set(environment.XRapidAPIKeyHeader, environment.XRapidAPIKeyValue),
      params: new HttpParams().set('q', city),
    });
  }
}
