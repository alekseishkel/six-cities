import React, {Component} from 'react';
import PropTypes from 'prop-types';

import offersCardsInfo from '../mocks/offers';
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
    const {func} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offersCardsInfo.map((el, i) =>
          <OfferCard
            key={el.description + i}
            func={func}
            cardInfo={offersCardsInfo[i]}
            currentActiveCard={this.onActiveCardMouseEnter}
          />)}
      </div>
    );
  }
}

SuggestionsList.propTypes = {
  func: PropTypes.func.isRequired
};
