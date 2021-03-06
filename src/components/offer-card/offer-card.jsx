import React from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

import FavoritesButton from '../favorites-button/favorites-button.jsx';

import ActionCreator from '../../action-creator/action-creator';

const OfferCard = (props) => {
  const {cardInfo, changeActiveCard, match} = props;

  const {title, preview_image: img, price, type, id,
    is_premium: isPremium, rating, city} = cardInfo;

  const premiumLayout = () => {
    return (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    );
  };

  let offerCardArticeClassName = `cities__place-card`;
  let offerCardClassName = `cities`;
  let offerImageParams = {
    width: 260,
    height: 200
  };
  let favoritesInfoClassName = null;

  if (match.url === `/favorites`) {
    offerCardArticeClassName = `favorites__card`;
    offerCardClassName = `favorites`;
    offerImageParams.width = 150;
    offerImageParams.height = 150;
    favoritesInfoClassName = `favorites__card-info `;
  }

  const MAX_RATING = 5;

  return (
    <article
      className={`${offerCardArticeClassName} place-card`}
      onMouseEnter={() => changeActiveCard(cardInfo)}
      onMouseLeave={() => changeActiveCard(null)}>
      {isPremium ? premiumLayout() : null}
      <Link to={`/${city.name}/${id}`} className="place-card__link" onClick={() => {
        document.documentElement.scrollTop = 0;
      }}>
        <div className={`${offerCardClassName}__image-wrapper place-card__image-wrapper`}>
          <img className="place-card__image" src={img} width={offerImageParams.width} height={offerImageParams.height} alt="Place image" />
        </div>
      </Link>
      <div className={favoritesInfoClassName + `place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoritesButton cardInfo={cardInfo} type={`offer`}/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: ((rating / MAX_RATING) * 100) + `%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          {title}
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  cardInfo: PropTypes.object.isRequired,
  changeActiveCard: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  changeActiveCard: (cardInfo) => {
    dispatch(ActionCreator.changeActiveCard(cardInfo));
  }
});

export {OfferCard};

export default withRouter(connect(null, mapDispatchToProps)(OfferCard));
