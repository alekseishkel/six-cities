import React, {Component} from 'react';
import PropTypes from 'prop-types';

import OfferCard from '../offer-card/offer-card.jsx';

export default class SuggestionsList extends Component {
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
    const {func, isNeighbourhood, places} = this.props;

    let divClassName = `cities__places-list places__list tabs__content`;

    if (isNeighbourhood === true) {
      divClassName = `near-places__list places__list`;
    }

    return (
      <div className={divClassName}>
        {places.map((el, i) =>
          <OfferCard
            key={el.description + i}
            func={func}
            cardInfo={places[i]}
            currentActiveCard={this.onActiveCardMouseEnter}
          />)}
      </div>
    );
  }
}

SuggestionsList.propTypes = {
  func: PropTypes.func,
  isNeighbourhood: PropTypes.bool.isRequired,
  places: PropTypes.arrayOf(PropTypes.object)
};
