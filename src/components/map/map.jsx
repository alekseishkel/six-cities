import React, {Component} from 'react';
import {connect} from 'react-redux';
import leaflet from 'leaflet';

import PropTypes from 'prop-types';

// import './map.css';

class Map extends Component {
  constructor() {
    super();

    this.map = null;
  }

  componentDidMount() {
    this.renderMap();
  }

  componentDidUpdate(prevProps) {
    if (this.props.cityCoords !== prevProps.cityCoords) {
      this.map.remove();
      this.renderMap();
    }
  }

  renderMap() {
    const {city, cityCoords, places, zoom} = this.props;

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });


    this.map = leaflet.map(`map`, {
      center: cityCoords,
      zoom,
      zoomControl: false,
      marker: true
    });

    this.map.setView(cityCoords, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);

    places[city].offers.forEach((offer) => {
      leaflet.marker(offer.coords, {icon}).addTo(this.map);
    });
  }

  render() {
    return <div id="map" style={{width: `100%`, height: `100%`}}></div>;
  }
}

Map.propTypes = {
  zoom: PropTypes.number.isRequired,
  cityCoords: PropTypes.arrayOf(PropTypes.number).isRequired,
  city: PropTypes.string.isRequired,
  places: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  cityCoords: state.cityCoords,
  zoom: state.mapZoom,
});

export {Map};

export default connect(mapStateToProps)(Map);


