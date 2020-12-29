import {createSelector} from 'reselect';

const sortingTypeSelector = (state) => state.userState.sorting;
const offersItemsSelector = (_, offers) => offers;

export const changeSortingSelector = createSelector(
    sortingTypeSelector,
    offersItemsSelector,
    (sorting, offers) => {
      let places = offers.slice();

      if (sorting === `Popular`) {
        places = offers;
      }

      if (sorting === `Price: low to high`) {
        places.sort((a, b) => a.price - b.price);
      }

      if (sorting === `Price: high to low`) {
        places.sort((a, b) => b.price - a.price);
      }

      if (sorting === `Top rated first`) {
        places.sort((a, b) => b.rating - a.rating);
      }

      return places;
    }
);
