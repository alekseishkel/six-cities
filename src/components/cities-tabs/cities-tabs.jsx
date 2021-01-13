import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

import ActionCreator from '../../action-creator/action-creator';

class CitiesTabs extends Component {
  componentDidMount() {
    window.onpopstate = () => {
      this.props.onCityClick(this.props.match.params.city);
    };
  }

  render() {
    const {cities, currentCity, onCityClick, history} = this.props;

    const updateHistory = (evt, city) => {
      evt.preventDefault();
      history.push(city);
    };

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
                <a
                  className={`locations__item-link tabs__item ` + isActiveClassName}
                  href="#"
                  onClick={(evt) => {
                    updateHistory(evt, el);
                    onCityClick(el);
                  }
                  }>
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
  cities: PropTypes.array,
  currentCity: PropTypes.string,
  onCityClick: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onCityClick: (city) => {
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.changeSorting(`Popular`));
  },
});

export {CitiesTabs};

export default withRouter(connect(null, mapDispatchToProps)(CitiesTabs));
