import {Component, input, signal} from '@angular/core';
import {WeatherData, WeatherService} from '../../service/weather.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  public readonly appTitle = input.required<string>();

  private city = signal('')

  constructor(public weatherService: WeatherService) {}

  saveCity(city: string): void {
    this.city.set(city);
    this.search()
  }

  search() : void {
    this.weatherService.getByCityName(this.city());
  }
}
