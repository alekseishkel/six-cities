import React from 'react';
import PropTypes from 'prop-types';

import OfferCard from '../offer-card/offer-card.jsx';
import changeSorting from '../../utils/change-sorting';

const SuggestionsList = ({func, offers, sorting}) => {
  let divClassName = `cities__places-list places__list tabs__content`;

  const places = changeSorting(offers, sorting);

  return (
    <div className={divClassName}>
      {places.map((el, i) =>
        <OfferCard
          key={el.title + el.id + i}
          func={func}
          cardInfo={el}
        />
      )}
    </div>
  );
};

SuggestionsList.propTypes = {
  func: PropTypes.func,
  sorting: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SuggestionsList;
