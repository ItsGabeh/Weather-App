import {inject, Injectable, signal} from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface WeatherData {
  coord: {
    lon: number
    lat: number
  }
  weather: Array<{
    id: number
    main: string
    description: string
    icon: string
  }>
  base: string
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
    sea_level: number
    grnd_level: number
  }
  visibility: number
  wind: {
    speed: number
    deg: number
    gust: number
  }
  rain: {
    "1h": number
  }
  clouds: {
    all: number
  }
  dt: number
  sys: {
    type: number
    id: number
    country: string
    sunrise: number
    sunset: number
  }
  timezone: number
  id: number
  name: string
  cod: number
}

@Injectable({providedIn: 'root'})
export class WeatherService {
  private apiKey = 'Your Api Key'
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather'

  private _city = signal('')
  private _data = signal<WeatherData | null>(null);
  private _error = signal<boolean>(false);

  public city = this._city.asReadonly();
  public data = this._data.asReadonly();
  public error = this._error.asReadonly();

  private http : HttpClient = inject(HttpClient);

  getByCityName(cityName: string): void {
    const url = `${this.apiUrl}?q=${encodeURIComponent(cityName)}&appid=${this.apiKey}&units=metric`;
    this.http.get<WeatherData>(url).subscribe({
      next: data => {this._data.set(data); this._error.set(false)},
      error: error => {this._error.set(true)},
    })
  }
}
