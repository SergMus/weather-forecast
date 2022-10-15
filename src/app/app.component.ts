import { Component, OnInit } from '@angular/core';
import { Weather } from './models/weather';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  weather?: Weather;
  cityName: string = 'London';

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherSearch(this.cityName);
    this.cityName = '';
  }

  private weatherSearch(city: string) {
    this.weatherService.getWeather(city).subscribe({
      next: (resp) => (this.weather = resp),
      error: (err) => console.log(err),
    });
  }

  onSubmit(city: string) {
    this.weatherSearch(city);
    this.cityName = '';
  }
}
