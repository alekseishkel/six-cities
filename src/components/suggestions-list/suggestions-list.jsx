import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import OfferCard from '../offer-card/offer-card.jsx';

import {changeSortingSelector} from "../../selectors/sorting-selector";

const SuggestionsList = ({offers, state}) => {
  let divClassName = `cities__places-list places__list tabs__content`;
  const places = changeSortingSelector(state, offers);

  return (
    <div className={divClassName}>
      {places.map((offer) =>
        <OfferCard
          key={offer.title + offer.id}
          cardInfo={offer}
        />
      )}
    </div>
  );
};

SuggestionsList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object),
  state: PropTypes.object
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  state
});

export {SuggestionsList};

export default connect(mapStateToProps)(SuggestionsList);

