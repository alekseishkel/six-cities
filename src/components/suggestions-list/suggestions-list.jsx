import React from 'react';
import PropTypes from 'prop-types';

import OfferCard from '../offer-card/offer-card.jsx';

const SuggestionsList = ({func, isNeighbourhood, offers, sorting}) => {
  let places = offers.slice();

  if (sorting === `Popular`) {
    places = offers;
  }

  if (sorting === `Price: low to high`) {
    places.sort((a, b) => a.price - b.price);
  }

  if (sorting === `Price: high to low`) {
    places.sort((a, b) => b.price - a.price);
  }
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
          cardInfo={el}
        />
      )
      }
    </div>
  );
};

SuggestionsList.propTypes = {
  func: PropTypes.func,
  sorting: PropTypes.string.isRequired,
  isNeighbourhood: PropTypes.bool.isRequired,
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SuggestionsList;
