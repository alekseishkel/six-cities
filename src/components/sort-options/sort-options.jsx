import React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/reducer';
import PropTypes from 'prop-types';

const SortOptions = ({sortingOpened, sorting, togglePopup, changeSorting}) => {
  let sortingClassName = `places__options places__options--custom`;

  if (sortingOpened) {
    sortingClassName += ` places__options--opened`;
  }

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" onClick={() => togglePopup(sortingOpened)}>
        {sorting}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={sortingClassName}>
        <li
          className={`places__option` + (sorting === `Popular` ? ` places__option--active` : ``)}
          onClick={() => {
            changeSorting(`Popular`);
            togglePopup(sortingOpened);
          }}
          tabIndex="0">Popular</li>
        <li
          className={`places__option` + (sorting === `Price: low to high` ? ` places__option--active` : ``)}
          onClick={() => {
            changeSorting(`Price: low to high`);
            togglePopup(sortingOpened);
          }}
          tabIndex="0">Price: low to high</li>
        <li
          className={`places__option` + (sorting === `Price: high to low` ? ` places__option--active` : ``)}
          onClick={() => {
            changeSorting(`Price: high to low`);
            togglePopup(sortingOpened);
          }}
          tabIndex="0">Price: high to low</li>
        <li
          className={`places__option` + (sorting === `Top rated first` ? ` places__option--active` : ``)}
          onClick={() => {
            changeSorting(`Top rated first`);
            togglePopup(sortingOpened);
          }}
          tabIndex="0">Top rated first</li>
      </ul>
    </form>
  );
};

SortOptions.propTypes = {
  sortingOpened: PropTypes.bool.isRequired,
  sorting: PropTypes.string.isRequired,
  togglePopup: PropTypes.func.isRequired,
  changeSorting: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  sortingOpened: state.sortingOpened,
  sorting: state.sorting
});

const mapDispatchToProps = (dispatch) => ({
  togglePopup: (sortingOpened) => {
    dispatch(ActionCreator.toggleSorting(sortingOpened));
  },
  changeSorting: (sorting) => {
    dispatch(ActionCreator.changeSorting(sorting));
  }
});

export {SortOptions};

export default connect(mapStateToProps, mapDispatchToProps)(SortOptions);
