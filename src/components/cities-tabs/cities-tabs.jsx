import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {ActionCreator} from '../../reducer/reducer';

class CitiesTabs extends Component {
  render() {
    const {cities, currentCity, onCityClick} = this.props;

    return (
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((el, i) => {
            let isActiveClassName;

            if (el === currentCity) {
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

CitiesTabs.propTypes = {
  cities: PropTypes.array.isRequired,
  currentCity: PropTypes.string.isRequired,
  onCityClick: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onCityClick: (city) => {
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.changeSorting(`Popular`));
  },
});


export {CitiesTabs};

export default connect(null, mapDispatchToProps)(CitiesTabs);
