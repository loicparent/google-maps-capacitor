import { Component, ElementRef, ViewChild } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

	map: GoogleMap;
	@ViewChild('mapRef') mapRef: ElementRef<HTMLElement>;

  	constructor() {}

	ngAfterViewInit() {
		this.createMap();
	}

	async createMap() {
		this.map = await GoogleMap.create({
			id: 'mapRef',
			element: this.mapRef.nativeElement,
			apiKey: 'MY-API-KEY',
			config: {
				center: {
					lat: 33.6,
					lng: -117.9
				},
				zoom: 8,
			},
			forceCreate: true
		});
	}

}
