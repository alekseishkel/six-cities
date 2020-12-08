import React, {Component} from 'react';
import {connect} from 'react-redux';
import leaflet from 'leaflet';

import PropTypes from 'prop-types';

// import './map.css';

class Map extends Component {
  constructor() {
    super();

    this.map = null;

    this.state = {
      zoom: null,
      cityCoords: null
    };
  }

  componentDidMount() {
    this.setState(
        {
          zoom: this.props.zoom,
          cityCoords: this.props.cityCoords
        }, () => {
          this.renderMap();
        }
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.city !== prevProps.city) {
      this.map.remove();

      this.setState(
          {
            zoom: this.props.zoom,
            cityCoords: this.props.cityCoords
          }, () => {
            this.renderMap();
          }
      );
    }

    if (this.props.activeCard !== prevProps.activeCard) {
      this.map.eachLayer((layer) => {
        if (this.props.activeCard !== null &&
          layer._latlng &&
          layer._latlng.lat === this.props.activeCard.coords[0] &&
          layer._latlng.lng === this.props.activeCard.coords[1]) {
          layer._icon.src = `img/pin-active.svg`;
        }

        if (this.props.activeCard === null &&
              layer._latlng &&
              layer._latlng.lat === prevProps.activeCard.coords[0] &&
              layer._latlng.lng === prevProps.activeCard.coords[1]) {
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
      center: this.state.cityCoords,
      zoom: this.state.zoom,
      zoomControl: false,
      marker: true
    });

    this.map.setView(this.state.cityCoords, this.state.zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);

    offers.forEach((offer) => {
      leaflet
        .marker(offer.coords, {icon, alt: `Marker with coodrs ${offer.coords[0]}, ${offer.coords[1]}`})
        .addTo(this.map);
    });

  }

  render() {
    return <div id="map" style={{width: `100%`, height: `100%`}}></div>;
  }
}

Map.propTypes = {
  city: PropTypes.string.isRequired,
  zoom: PropTypes.number.isRequired,
  cityCoords: PropTypes.arrayOf(PropTypes.number).isRequired,
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeCard: PropTypes.object
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  city: state.city,
  activeCard: state.activeCard
});

export {Map};

export default connect(mapStateToProps)(Map);


