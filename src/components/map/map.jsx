import React, {Component} from 'react';
import leaflet from 'leaflet';

import citiesCoords from '../../mocks/citiesCoords';

// import './map.css';

export default class Map extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const city = [52.38333, 4.9];
    const zoom = 12;
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });

    map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    citiesCoords.forEach((coords) => {
      leaflet.marker(coords, {icon}).addTo(map);
    });
  }

  render() {
    return <div id="map" style={{width: `100%`, height: `100%`}}></div>;
  }
}


