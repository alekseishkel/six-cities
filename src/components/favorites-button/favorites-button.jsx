import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

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
    const {cardInfo, onFavoritesButtonAddClick, onFavoritesButtonRemoveClick} = this.props;

    let isActiveModifier = null;

    if (isActive === true) {
      isActiveModifier = `--active`;
    }

    return (
      <button
        className={`place-card__bookmark-button place-card__bookmark-button${isActiveModifier} button`}
        type="button"
        onClick={() => {
          cardInfo.is_favorite = !isActive;

          this.setState((state) => {
            return {
              isActive: !state.isActive
            };
          });

          if (isActive === false) {
            onFavoritesButtonAddClick(cardInfo);
          }

          if (isActive === true) {
            onFavoritesButtonRemoveClick(cardInfo.id);
          }
          console.log(cardInfo);
        }}>
        <svg className="place-card__bookmark-icon" width="18" height="19">
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">In bookmarks</span>
      </button>
    );
  }
}

FavoritesButton.propTypes = {
  cardInfo: PropTypes.object.isRequired,
  // onFavoritesButtonClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onFavoritesButtonAddClick: (offer) => {
    dispatch(ActionCreator.addOfferToFavorites(offer));
  },
  onFavoritesButtonRemoveClick: (offer) => {
    dispatch(ActionCreator.removeOfferFromFavorites(offer));
  },
});

export {FavoritesButton};

export default connect(null, mapDispatchToProps)(FavoritesButton);
