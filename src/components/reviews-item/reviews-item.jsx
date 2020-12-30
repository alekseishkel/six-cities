import React from 'react';
import PropTypes from 'prop-types';

const ReviewsItem = ({review}) => {
  console.log(review);
  let avatarUrl = review.user.avatar_url;
  const MAX_RATING = 5;
  const reviewDate = new Date(review.date).toLocaleDateString(`ru-RU`, {
    month: `long`,
    year: `numeric`,
  });

  const getAvatarUrl = (url) => {
    if (!avatarUrl.startsWith(`https://htmlacademy-react-2.appspot.com/six-cities/`)) {
      url = `https://htmlacademy-react-2.appspot.com/six-cities${avatarUrl}`;
    }

    return url;
  };

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={getAvatarUrl(avatarUrl)} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {review.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: ((review.rating / MAX_RATING) * 100) + `%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime={review.date}>{reviewDate}</time>
      </div>
    </li>
  );
};

ReviewsItem.propTypes = {
  review: PropTypes.object.isRequired
};

export default ReviewsItem;
