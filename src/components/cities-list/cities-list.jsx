import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import offers from '../../mocks/offers';
import {ActionCreator} from '../../reducer';

class CitiesList extends Component {
  render() {
    const {city, onCityClick} = this.props;

    return (
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Object.keys(offers).map((el, i) => {
            let isActiveClassName;

            if (el === city) {
              isActiveClassName = `tabs__item--active`;
            }

            return (
              <li className="locations__item" key={el + i}>
                <a onClick={() => onCityClick(el)} className={`locations__item-link tabs__item ` + isActiveClassName} href="#">
                  <span>{el}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </section >
    );
  }
}

CitiesList.propTypes = {
  city: PropTypes.string,
  onCityClick: PropTypes.func
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  city: state.city
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick: (city) => {
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.changeCityCoords(offers[city].cityCoords));
    dispatch(ActionCreator.changeZoom(offers[city].mapZoom));
  },
});


export {CitiesList};

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
