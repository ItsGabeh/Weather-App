import {Component, signal} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {WeatherService} from '../../service/weather.service';

@Component({
  selector: 'app-location',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './location.html',
  styleUrl: './location.css'
})
export class Location {
  constructor(public weatherService: WeatherService) {
  }
}
