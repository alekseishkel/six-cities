import React, {Component} from 'react';
import {connect} from 'react-redux';
import leaflet from 'leaflet';

import PropTypes from 'prop-types';

import './map.css';

class Map extends Component {
  constructor() {
    super();
    this.map = null;
  }

  componentDidMount() {
    this.renderMap();
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentCity !== prevProps.currentCity) {
      this.map.remove();
      this.renderMap();
    }

    if (this.props.activeCard !== prevProps.activeCard) {
      this.map.eachLayer((layer) => {
        if (this.props.activeCard !== null &&
            layer._latlng &&
            layer._latlng.lat === this.props.activeCard.location.latitude &&
            layer._latlng.lng === this.props.activeCard.location.longitude) {
          layer._icon.src = `img/pin-active.svg`;
        }

        if (prevProps.activeCard !== null &&
            layer._latlng &&
            layer._latlng.lat === prevProps.activeCard.location.latitude &&
            layer._latlng.lng === prevProps.activeCard.location.longitude) {
          layer._icon.src = `img/pin.svg`;
        }
      });
    }
  }

  renderMap() {
    const {offers} = this.props;

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    this.map = leaflet.map(`map`, {
      center: [offers[0].city.location.latitude, offers[0].city.location.longitude],
      zoom: offers[0].city.location.zoom,
      zoomControl: false,
      marker: true
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);

    offers.forEach((offer) => {
      leaflet
        .marker([offer.location.latitude, offer.location.longitude], {icon, alt: `Marker with coodrs ${offer.location.latitude}, ${offer.location.longitude}`})
        .addTo(this.map);
    });

  }

  render() {
    return <div id="map"></div>;
  }
}

Map.propTypes = {
  currentCity: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeCard: PropTypes.object
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  activeCard: state.userState.activeCard
});

export {Map};

export default connect(mapStateToProps)(Map);


