import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import OfferCard from '../offer-card/offer-card.jsx';

class SuggestionsList extends Component {
  constructor() {
    super();

    this.state = {
      activeCard: null
    };

    this.onActiveCardMouseEnter = (cardId) => {
      this.setState(() => {
        return {
          activeCard: cardId
        };
      });
    };
  }

  render() {
    const {func, isNeighbourhood, places, city} = this.props;
    let divClassName = `cities__places-list places__list tabs__content`;

    if (isNeighbourhood === true) {
      divClassName = `near-places__list places__list`;
    }

    return (
      <div className={divClassName}>
        {places[city].map((el, i) =>
          <OfferCard
            key={el.description + i}
            func={func}
            cardInfo={el}
            currentActiveCard={this.onActiveCardMouseEnter}
          />)}
      </div>
    );
  }
}

SuggestionsList.propTypes = {
  func: PropTypes.func,
  isNeighbourhood: PropTypes.bool.isRequired,
  places: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.object)),
  city: PropTypes.string.isRequired
};


const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  city: state.city
});

export {SuggestionsList};

export default connect(mapStateToProps)(SuggestionsList);
