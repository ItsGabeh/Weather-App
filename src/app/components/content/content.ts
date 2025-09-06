import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {WeatherService} from '../../service/weather.service';

@Component({
  selector: 'app-content',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './content.html',
  styleUrl: './content.css'
})
export class Content {
  constructor(public weatherService: WeatherService) {}
}
