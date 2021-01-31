import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import leaflet from 'leaflet';

import './map.css';

class Map extends Component {
  constructor() {
    super();
    this.map = null;
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

  renderMap() {
    const {offers} = this.props;

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

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const aaa = (offer) => {
      return (
        `<div style="font-size: 13px">
          <h3 style="text-align: center; margin: 0 5px">${offer.title}</h3>
          <img src="${offer.preview_image}" width="150px">
          <div>Price: €${offer.price}/night</div>
          <div>Type: ${offer.type}</div>
          <a style="font-size: 14px; text-decoration: underline" href="${`/${offer.city.name}/${offer.id}`}" />See more</a>
        <div>`
      );
    };

    offers.forEach((offer) => {
      leaflet
        .marker([offer.location.latitude, offer.location.longitude], {icon, alt: `Marker with coodrs ${offer.location.latitude}, ${offer.location.longitude}`})
        .bindPopup(aaa(offer))
        .addTo(this.map);
    });
  }

  render() {
    return <div id="map"></div>;
  }
}

Map.propTypes = {
  activeCard: PropTypes.object,
  currentCity: PropTypes.string,
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageId: PropTypes.number
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  activeCard: state.userState.activeCard,
  currentCity: state.userState.city
});

export {Map};

export default connect(mapStateToProps)(Map);


