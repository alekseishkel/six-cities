import React, {Component} from 'react';
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
    console.log(places[city].offers);
    return (
      <div className={divClassName}>
        {places[city].offers.map((el, i) =>
          <OfferCard
            key={el.description + i}
            func={func}
            cardInfo={el}
            currentActiveCard={this.onActiveCardMouseEnter}
          />
        )
        }
      </div>
    );
  }
}

SuggestionsList.propTypes = {
  func: PropTypes.func,
  isNeighbourhood: PropTypes.bool.isRequired,
  places: PropTypes.object.isRequired,
  city: PropTypes.string.isRequired,
};

export default SuggestionsList;
