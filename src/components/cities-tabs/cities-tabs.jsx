import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

import ActionCreator from '../../action-creator/action-creator';

import {getUniqueCitiesNames} from '../../utils/utils';

class CitiesTabs extends Component {
  componentDidMount() {
    window.onpopstate = () => {
      this.props.onCityClick(this.props.match.params.city);
    };
  }

  render() {
    const {currentCity, history, onCityClick, offers} = this.props;

    const updateHistory = (evt, city) => {
      evt.preventDefault();
      history.push(city);
    };

    const cities = getUniqueCitiesNames(offers);

    return (
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city, i) => {
            let isActiveClassName;

            if (city === currentCity) {
              isActiveClassName = `tabs__item--active`;
            }

            return (
              <li className="locations__item" key={city + i}>
                <a
                  className={`locations__item-link tabs__item ` + isActiveClassName}
                  href="#"
                  onClick={(evt) => {
                    updateHistory(evt, city);
                    onCityClick(city);
                  }
                  }>
                  <span>{city}</span>
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
  currentCity: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  onCityClick: PropTypes.func.isRequired,
  offers: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  currentCity: state.userState.city,
  offers: state.data.offers
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick: (city) => {
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.changeSorting(`Popular`));
  },
});

export {CitiesTabs};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CitiesTabs));
