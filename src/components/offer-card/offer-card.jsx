import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';

import ActionCreator from '../../action-creator/action-creator';

const OfferCard = (props) => {
  const {func, cardInfo, currentActiveCard, match} = props;

  console.log(match);

  const {title, preview_image: img, price, type, id,
    is_premium: isPremium, is_favourite: isFavourite, rating, city} = cardInfo;

  const MAX_RATING = 5;

  const premiumLayout = () => {
    return (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    );
  };

  const bookmarkLayout = () => {
    let buttonClassName;

    if (isFavourite === true) {
      buttonClassName = `place-card__bookmark-button place-card__bookmark-button--active button`;
    } else {
      buttonClassName = `place-card__bookmark-button button`;
    }

    return (
      <button className={buttonClassName} type="button">
        <svg className="place-card__bookmark-icon" width="18" height="19">
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">To bookmarks</span>
      </button>
    );
  };

  let offerCardClassName;
  console.log(match);

  if (match.url.startsWith === `/favorites`) {
    offerCardClassName = `favorites`;
  }

  console.log(match.path);

  if (match.path.startsWith(`/:city?`)) {
    offerCardClassName = `cities`;
  }

  return (
    <Link to={`/${city.name}/${id}`} onClick={() => {
      document.documentElement.scrollTop = 0;
    }}>
      <article
        className="cities__place-card place-card"
        onMouseEnter={() => currentActiveCard(cardInfo)}
        onMouseLeave={() => currentActiveCard(null)}>
        {isPremium ? premiumLayout() : null}
        <div className={`${offerCardClassName}__image-wrapper place-card__image-wrapper`}>
          <img className="place-card__image" src={img} width="260" height="200" alt="Place image" />
        </div>
        <div className={`${offerCardClassName}__info`} onClick={func}>
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">€{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            {bookmarkLayout()}
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
    </Link>
  );
};

OfferCard.propTypes = {
  func: PropTypes.func,
  cardInfo: PropTypes.object.isRequired,
  currentActiveCard: PropTypes.func,
  history: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  currentActiveCard: (cardInfo) => {
    dispatch(ActionCreator.changeActiveCard(cardInfo));
  },
});

export {OfferCard};

export default withRouter(connect(null, mapDispatchToProps)(OfferCard));
