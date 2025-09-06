import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './components/header/header';
import {Location} from './components/location/location';
import {Content} from './components/content/content';
import {Citymap} from './components/citymap/citymap';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Location, Content, Citymap],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Weather App');
}
