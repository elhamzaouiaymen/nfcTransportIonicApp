import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';


@Injectable()
export class MapProvider {
MAPBOX_ACCESS_TOKEN = "pk.eyJ1IjoiZWxoYW16YW91aWF5bWVuIiwiYSI6ImNqb3NrN25ydjBhMTIzcHM1d3AxZncxcTgifQ.FSMth9z4WzrcJIeq-sWBJA"
 constructor() {
  	(mapboxgl as any).accessToken = this.MAPBOX_ACCESS_TOKEN;
  }

}
