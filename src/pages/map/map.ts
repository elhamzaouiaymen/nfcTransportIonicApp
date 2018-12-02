import { Component, ViewChild , ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as mapboxgl from 'mapbox-gl';
import * as mapboxgeocoder from '@mapbox/mapbox-gl-geocoder';

import { MapProvider } from '../../providers/map/map';

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  geocoder: any;
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v8';
  lat = 37.75;
  lng = -122.41;

  @ViewChild('map') mapElement: ElementRef;

  constructor(public navCtrl: NavController, public navParams: NavParams, private mapService: MapProvider) {
  }

  ngOnInit() {
    this.initializeMap(); 
  }

  private initializeMap() {
    this.buildMap();
  }

  private buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 12,
      center: [this.lng, this.lat]
    });
  
    this.geocoder = new mapboxgeocoder({
      accessToken: mapboxgl.accessToken,
      zoom: 14,
      placeholder: "Enter search"
    }); 

    this.map.addControl(this.geocoder);
    this.geocoder.on('result', function(ev) {
        console.log(ev)
    });

  }

}
