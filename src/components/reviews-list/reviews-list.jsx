import React from 'react';
import {connect} from 'react-redux';

import PropTypes from 'prop-types';

import ReviewsItem from '../reviews-item/reviews-item.jsx';

const ReviewsList = ({reviews}) => {
  if (reviews === null) {
    return null;
  }

  return (
    <ul className="reviews__list">
      {reviews.map((review) =>
        <ReviewsItem
          key={review.id}
          review={review}
        />)}
    </ul>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  reviews: state.data.reviews
});

export {ReviewsList};

export default connect(mapStateToProps)(ReviewsList);
