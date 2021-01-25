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

  changeMarkerToActive() {
    this.map.eachLayer((layer) => {
      if (layer._latlng &&
        layer._latlng.lat === this.props.activeCard.location.latitude &&
        layer._latlng.lng === this.props.activeCard.location.longitude) {
        layer._icon.src = `img/pin-active.svg`;
      }
    });
  }

  changeMarkerToPassive(prevProps) {
    this.map.eachLayer((layer) => {
      if (
        layer._latlng &&
          layer._latlng.lat === prevProps.activeCard.location.latitude &&
          layer._latlng.lng === prevProps.activeCard.location.longitude) {
        layer._icon.src = `img/pin.svg`;
      }
    });
  }

  componentDidMount() {
    this.renderMap();

    if (this.props.activeCard !== null) {
      this.changeMarkerToActive();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentCity !== prevProps.currentCity) {
      this.map.remove();
      this.renderMap();
    }

    if (this.props.pageId !== prevProps.pageId) {
      this.map.remove();
      this.renderMap();
    }

    if (this.props.activeCard !== null) {
      this.changeMarkerToActive();
    }

    if (prevProps.activeCard !== null &&
        this.props.activeCard !== prevProps.activeCard) {
      this.changeMarkerToPassive(prevProps);
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

    offers.forEach((offer, i) => {

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
  activeCard: PropTypes.object,
  pageId: PropTypes.number
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  activeCard: state.userState.activeCard
});

export {Map};

export default connect(mapStateToProps)(Map);


