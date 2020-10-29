import React from 'react';
import PropTypes from 'prop-types';

const OfferCard = (props) => {
  const {func, cardInfo, currentActiveCard} = props;
  const {description, img, price, type, isPremium, isBookmark} = cardInfo;

  const premiumLayout = () => {
    return (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    );
  };

  const bookmarkLayout = () => {
    let buttonClassName;

    isBookmark === true ?
      buttonClassName = `place-card__bookmark-button place-card__bookmark-button--active button` :
      buttonClassName = `place-card__bookmark-button button`;

    return (
      <button className={buttonClassName} type="button">
        <svg className="place-card__bookmark-icon" width="18" height="19">
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">To bookmarks</span>
      </button>
    );
  };

  return (
    <article className="cities__place-card place-card" onMouseEnter={() => currentActiveCard(cardInfo)}>
      {isPremium ? premiumLayout() : null}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={img} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info" onClick={func}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          {bookmarkLayout()}
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `93%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{description}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  func: PropTypes.func,
  cardInfo: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.bool])).isRequired,
  currentActiveCard: PropTypes.func.isRequired
};

export default OfferCard;
