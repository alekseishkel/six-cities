import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import ReviewsList from '../reviews-list/reviews-list.jsx';
import ReviewForm from '../review-form/review-form.jsx';
import SuggestionsList from '../suggestions-list/suggestions-list.jsx';
import Map from '../map/map.jsx';
import FavoritesButton from '../favorites-button/favorites-button.jsx';
import MainEmpty from '../main-empty/main-empty.jsx';

import Operations from '../../operations/operations';
import ActionCreator from '../../action-creator/action-creator';

import {getCurrentCityOffers} from '../../utils/utils';

class Property extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    if (this.props.activeCard === null && this.props.offer !== undefined) {
      this.props.changeActiveCard(this.props.offer);
    }
    this.props.loadReviews(this.props.pageId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.pageId !== this.props.pageId) {
      this.props.loadReviews(this.props.pageId);
    }
  }

  getNeighbourhoodOffers() {
    const currentCityOffers = JSON.parse(JSON.stringify(getCurrentCityOffers(this.props.offers, this.props.currentCity)));

    currentCityOffers.forEach((el) => {
      const coordsDiff = Math.sqrt(Math.pow((el.location.latitude - this.props.offer.location.latitude), 2) +
        Math.pow((el.location.longitude - this.props.offer.location.longitude), 2));
      el.coordsDiff = coordsDiff;
    });

    currentCityOffers.sort((a, b) => a.coordsDiff - b.coordsDiff).splice(4);

    return currentCityOffers;
  }

  render() {
    const {offer, currentCity, pageId} = this.props;

    if (offer === undefined) {
      return (
        <MainEmpty />
      );
    }

    const {id, images, is_premium: isPremium, description, title, rating,
      bedrooms, max_adults: maxAdults, type, price, goods, host} = offer;

    const MAX_RATING = 5;

    const neighbourhoodOffers = this.getNeighbourhoodOffers();

    return (
      <div className="page">
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {images.map((img, i) => {
                  if (i < 6) {
                    return (
                      <div key={id + i} className="property__image-wrapper">
                        <img className="property__image" src={img} alt="Photo studio" />
                      </div>
                    );
                  }
                })}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {isPremium ?
                  (<div className="property__mark">
                    <span>Premium</span>
                  </div>) : null}
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {title}
                  </h1>
                  {<FavoritesButton key={offer.id} cardInfo={offer} type={`property`} pageId={pageId} />}
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: ((rating / MAX_RATING) * 100) + `%`}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {type[0].toUpperCase() + type.slice(1)}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                Max {maxAdults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {goods.map((good, i) => {
                      return (
                        <li className="property__inside-item" key={goods + i}>
                          {good}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="property__avatar user__avatar" src={host.avatar_url} width="74" height="74" alt="Host avatar" />
                    </div>
                    <span className="property__user-name">
                      {host.name}
                    </span>
                    {host.is_pro ?
                      (<span className="property__user-status">
                      Pro
                      </span>) : null}
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {description}
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  {<ReviewsList />}
                  {<ReviewForm />}
                </section>
              </div>
            </div>
            <section className="property__map map">
              {<Map offers={neighbourhoodOffers} currentCity={currentCity} pageId={pageId}/>}
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              {<SuggestionsList offers={neighbourhoodOffers.slice(1)} sorting={`Popular`} />}
            </section >
          </div >
        </main >
      </div >
    );
  }
}

Property.propTypes = {
  offer: PropTypes.object.isRequired,
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeCard: PropTypes.object,
  changeActiveCard: PropTypes.func.isRequired,
  currentCity: PropTypes.string.isRequired,
  pageId: PropTypes.number.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  currentCity: state.userState.city,
  offers: state.data.offers,
  activeCard: state.userState.activeCard,
  reviews: state.data.reviews
});

const mapDispatchToProps = (dispatch) => ({
  changeActiveCard: (offer) => {
    dispatch(ActionCreator.changeActiveCard(offer));
  },
  loadReviews: (id) => {
    dispatch(Operations.loadReviews(id));
  }
});

export {Property};

export default connect(mapStateToProps, mapDispatchToProps)(Property);
