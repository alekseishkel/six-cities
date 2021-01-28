import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

import FavoritesButton from '../favorites-button/favorites-button.jsx';
import MainEmpty from '../main-empty/main-empty.jsx';
import Map from '../map/map.jsx';
import ReviewForm from '../review-form/review-form.jsx';
import ReviewsList from '../reviews-list/reviews-list.jsx';
import SuggestionsList from '../suggestions-list/suggestions-list.jsx';

import ActionCreator from '../../action-creator/action-creator';
import Operations from '../../operations/operations';

import {getCurrentCityOffers} from '../../utils/utils';

class Property extends Component {
  constructor() {
    super();

    this.currentOffer = null;
  }

  componentDidMount() {
    if (this.props.activeCard === null && this.currentOffer !== undefined) {
      this.props.changeActiveCard(this.currentOffer);
    }
    this.props.loadReviews(this.props.pageId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.pageId !== this.props.pageId) {
      this.props.loadReviews(this.props.pageId);
    }
  }

  getNeighbourhoodOffers() {
    const currentCityOffers = getCurrentCityOffers(this.props.offers, this.props.currentCity);

    currentCityOffers.forEach((offer) => {
      const coordsDiff = Math.sqrt(Math.pow((offer.location.latitude - this.currentOffer.location.latitude), 2) +
      Math.pow((offer.location.longitude - this.currentOffer.location.longitude), 2));
      offer.coordsDiff = coordsDiff;
    });

    const NEIGHBOURHOOD_OFFERS = 4;

    currentCityOffers.sort((a, b) => a.coordsDiff - b.coordsDiff).splice(NEIGHBOURHOOD_OFFERS);

    return currentCityOffers;
  }

  render() {
    const {currentCityOffers, match, pageId} = this.props;

    this.currentOffer = currentCityOffers.filter((offer) => offer.id === parseInt(match.params.id, 10))[0];

    if (this.currentOffer === undefined) {
      return (
        <MainEmpty />
      );
    }

    const {bedrooms, description, goods, host, id, images, is_premium: isPremium,
      max_adults: maxAdults, price, rating, title, type} = this.currentOffer;

    const IMAGES_ON_PAGE = 6;
    const MAX_RATING = 5;

    const neighbourhoodOffers = this.getNeighbourhoodOffers();

    return (
      <div className="page">
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {images.slice(0, IMAGES_ON_PAGE).map((img, i) => {
                  return (
                    <div key={id + i} className="property__image-wrapper">
                      <img className="property__image" src={img} alt="Photo studio" />
                    </div>
                  );
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
                  {<FavoritesButton cardInfo={this.currentOffer} key={this.currentOffer.id} type={`property`} />}
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
                        <li className="property__inside-item" key={good + i}>
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
              {<Map offers={neighbourhoodOffers} pageId={pageId}/>}
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
  activeCard: PropTypes.object,
  changeActiveCard: PropTypes.func.isRequired,
  currentCity: PropTypes.string.isRequired,
  currentCityOffers: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadReviews: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageId: PropTypes.number.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  activeCard: state.userState.activeCard,
  currentCity: state.userState.city,
  offers: state.data.offers,
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Property));
