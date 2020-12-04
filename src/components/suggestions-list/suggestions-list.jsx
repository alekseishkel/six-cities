import React from 'react';
import PropTypes from 'prop-types';

import OfferCard from '../offer-card/offer-card.jsx';

const SuggestionsList = ({func, isNeighbourhood, offers}) => {
  let divClassName = `cities__places-list places__list tabs__content`;

  if (isNeighbourhood === true) {
    divClassName = `near-places__list places__list`;
  }

  return (
    <div className={divClassName}>
      {offers.map((el, i) =>
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
  isNeighbourhood: PropTypes.bool.isRequired,
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SuggestionsList;
