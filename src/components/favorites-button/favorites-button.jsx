import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

import ActionCreator from '../../action-creator/action-creator';

class FavoritesButton extends Component {
  constructor() {
    super();

    this.state = {
      isActive: false
    };
  }

  componentDidMount() {
    if (this.props.cardInfo.is_favorite === true) {
      this.setState({isActive: true});
    }
  }

  render() {
    const {isActive} = this.state;
    const {cardInfo, onFavoritesButtonAddClick, onFavoritesButtonRemoveClick, type, isAuthorizationRequired, history} = this.props;

    let favoritesButtonClassName = `place-card__bookmark-button`;
    let buttonWidth = 18;
    let buttonHeight = 19;
    let isActiveModifier = null;

    if (isActive === true) {
      isActiveModifier = `--active`;
    }

    if (type === `property`) {
      favoritesButtonClassName = `property__bookmark-button`;
      buttonWidth = 31;
      buttonHeight = 33;
    }

    return (
      <button
        className={`${favoritesButtonClassName} place-card__bookmark-button${isActiveModifier} button`}
        type="button"
        onClick={() => {
          if (isAuthorizationRequired) {
            history.push(`/login`);
          } else {
            cardInfo.is_favorite = !isActive;

            this.setState(({isActive: !isActive}), () => {
              if (isActive === false) {
                onFavoritesButtonAddClick(cardInfo);
              }

              if (isActive === true) {
                onFavoritesButtonRemoveClick(cardInfo.id);
              }
            });
          }
        }}>
        <svg className="place-card__bookmark-icon" width={buttonWidth} height={buttonHeight}>
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">In bookmarks</span>
      </button>
    );
  }
}

FavoritesButton.propTypes = {
  cardInfo: PropTypes.object.isRequired,
  onFavoritesButtonAddClick: PropTypes.func.isRequired,
  onFavoritesButtonRemoveClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  isAuthorizationRequired: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  isAuthorizationRequired: state.userState.isAuthorizationRequired,
});

const mapDispatchToProps = (dispatch) => ({
  onFavoritesButtonAddClick: (offer) => {
    dispatch(ActionCreator.addOfferToFavorites(offer));
  },
  onFavoritesButtonRemoveClick: (offer) => {
    dispatch(ActionCreator.removeOfferFromFavorites(offer));
  },
});

export {FavoritesButton};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FavoritesButton));
