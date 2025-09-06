import {Component, computed, inject} from '@angular/core';
import {WeatherService} from '../../service/weather.service';
import {StaticMapService} from '../../service/static-map.service';

@Component({
  selector: 'app-citymap',
  imports: [],
  templateUrl: './citymap.html',
  styleUrl: './citymap.css'
})
export class Citymap {
  weatherService : WeatherService = inject(WeatherService)
  staticMapService : StaticMapService = inject(StaticMapService)

  mapUrl = computed(() => {
    const weather = this.weatherService.data();
    if (!weather) {
      return ''
    }
    return this.staticMapService.buildUrl(weather.coord.lat, weather.coord.lon);
  })
}
