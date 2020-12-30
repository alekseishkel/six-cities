import React, {Component} from 'react';
import {connect} from 'react-redux';

import PropTypes from 'prop-types';

import Operations from '../../operations/operations';

class ReviewForm extends Component {
  constructor() {
    super();

    this.state = {
      comment: ``,
      rating: null
    };

    this.submitButton = React.createRef();
  }

  render() {
    const {reviews, user, onSubmit} = this.props;
    const {comment, rating} = this.state;

    const checkValitidy = () => {
      if (comment.length >= 50 && rating !== null) {
        this.submitButton.current.disabled = false;
      }

      if (comment.length < 50 || rating === null) {
        this.submitButton.current.disabled = true;
      }
    };

    const getRating = (evt) => {
      this.setState({rating: evt.target.value}, checkValitidy);
    };

    const changeComment = (evt) => {
      this.setState({comment: evt.target.value}, checkValitidy);
    };

    const submitReview = (evt) => {
      evt.preventDefault();

      const id = reviews.length + 1;
      const date = new Date().toISOString();

      const review = {
        id,
        user,
        rating: Number(rating),
        comment,
        date
      };

      onSubmit(review, id);
    };

    if (user === null) {
      return null;
    }

    return (
      <React.Fragment>

        <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
        <form className="reviews__form form" action="#" method="post">
          <label className="reviews__label form__label" htmlFor="review">Your review</label>
          <div className="reviews__rating-form form__rating">
            <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" onChange={getRating}/>
            <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>

            <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" onChange={getRating}/>
            <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>

            <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" onChange={getRating}/>
            <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>

            <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" onChange={getRating}/>
            <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>

            <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" onChange={getRating}/>
            <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </div>
          <textarea
            className="reviews__textarea form__textarea"
            id="review"
            name="review"
            placeholder="Tell how was your stay, what you like and what can be improved"
            value={comment}
            ref={this.commentTextarea}
            onChange={(evt) => {
              changeComment(evt);
            }}>
          </textarea>
          <div className="reviews__button-wrapper">
            <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
            </p>
            <button
              className="reviews__submit form__submit button"
              type="submit"
              disabled=""
              minLength="50"
              ref={this.submitButton}
              onClick={submitReview}>
              Submit
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

ReviewForm.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  user: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  reviews: state.data.reviews,
  user: state.data.user,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (review, id) => {
    dispatch(Operations.sendReview(review, id));
  }
});

export {ReviewForm};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
