import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/reducer';
import PropTypes from 'prop-types';

class SortOptions extends Component {
  constructor() {
    super();

    this.state = {
      sortingOpened: false,
    };
  }

  togglePopup() {
    this.setState({
      sortingOpened: !this.state.sortingOpened
    });
  }

  render() {
    const {sortingOpened} = this.state;
    const {sorting, changeSorting} = this.props;

    let sortingClassName = `places__options places__options--custom`;

    if (sortingOpened) {
      sortingClassName += ` places__options--opened`;
    }

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex="0" onClick={() => this.togglePopup(sortingOpened)}>
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
              this.togglePopup(sortingOpened);
            }}
            tabIndex="0">Popular</li>
          <li
            className={`places__option` + (sorting === `Price: low to high` ? ` places__option--active` : ``)}
            onClick={() => {
              changeSorting(`Price: low to high`);
              this.togglePopup(sortingOpened);
            }}
            tabIndex="0">Price: low to high</li>
          <li
            className={`places__option` + (sorting === `Price: high to low` ? ` places__option--active` : ``)}
            onClick={() => {
              changeSorting(`Price: high to low`);
              this.togglePopup(sortingOpened);
            }}
            tabIndex="0">Price: high to low</li>
          <li
            className={`places__option` + (sorting === `Top rated first` ? ` places__option--active` : ``)}
            onClick={() => {
              changeSorting(`Top rated first`);
              this.togglePopup(sortingOpened);
            }}
            tabIndex="0">Top rated first</li>
        </ul>
      </form>
    );
  }
}

SortOptions.propTypes = {
  sorting: PropTypes.string.isRequired,
  changeSorting: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  sorting: state.sorting
});

const mapDispatchToProps = (dispatch) => ({
  changeSorting: (sorting) => {
    dispatch(ActionCreator.changeSorting(sorting));
  }
});

export {SortOptions};

export default connect(mapStateToProps, mapDispatchToProps)(SortOptions);
