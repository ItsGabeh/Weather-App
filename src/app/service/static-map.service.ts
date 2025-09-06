import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StaticMapService {
	private apiUrl: string = 'https://maps.geoapify.com/v1/staticmap'
	private apiKey: string = 'Your Api Key'

	public loading = signal<boolean>(false);

	buildUrl(latitude: number, longitude: number): string {
		return `${this.apiUrl}?center=lonlat:${longitude},${latitude}&zoom=10&marker=lonlat:${longitude},${latitude};size:48` + `&apiKey=${this.apiKey}`;
	}
}
