import {ActionCreator, reducer} from './reducer';
import offers from '../mocks/offers';

describe(`Reducer works correctly`, () => {
  it(`Reducer without additional paramerters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      city: `Paris`,
      offers,
      sorting: `Popular`,
      activeCard: null
    });
  });

  it(`Reducer should correctly change city`, () => {
    expect(reducer({
      city: `Paris`,
      offers,
      sorting: `Popular`,
      activeCard: null
    }, {
      type: `CHANGE_CITY`,
      payload: `Amsterdam`
    })).toEqual({
      city: `Amsterdam`,
      offers,
      sorting: `Popular`,
      activeCard: null
    });
  });

  // it(`Reducer should correctly change city coords`, () => {
  //   expect(reducer({
  //     city: `Paris`,
  //     offers: offers.Paris.offers,
  //     cityCoords: [48.8680266086781, 2.351173200195321],
  //     mapZoom: 11,
  //     sortingOpened: false,
  //     sorting: `Popular`,
  //     activeCard: null
  //   }, {
  //     type: `CHANGE_CITY_COORDS`,
  //     payload: [52.38333, 4.9]
  //   })).toEqual({
  //     city: `Paris`,
  //     offers: offers.Paris.offers,
  //     cityCoords: [52.38333, 4.9],
  //     mapZoom: 11,
  //     sortingOpened: false,
  //     sorting: `Popular`,
  //     activeCard: null
  //   });
  // });

  // it(`Reducer should correctly change zoom`, () => {
  //   expect(reducer({
  //     city: `Paris`,
  //     offers: offers.Paris.offers,
  //     cityCoords: [48.8680266086781, 2.351173200195321],
  //     mapZoom: 11,
  //     sortingOpened: false,
  //     sorting: `Popular`,
  //     activeCard: null
  //   }, {
  //     type: `CHANGE_ZOOM`,
  //     payload: 12
  //   })).toEqual({
  //     city: `Paris`,
  //     offers: offers.Paris.offers,
  //     cityCoords: [48.8680266086781, 2.351173200195321],
  //     mapZoom: 12,
  //     sortingOpened: false,
  //     sorting: `Popular`,
  //     activeCard: null
  //   });
  // });

  // it(`Reducer should correctly change toggle sorting`, () => {
  //   expect(reducer({
  //     city: `Paris`,
  //     offers: offers.Paris.offers,
  //     cityCoords: [48.8680266086781, 2.351173200195321],
  //     mapZoom: 11,
  //     sortingOpened: false,
  //     sorting: `Popular`,
  //     activeCard: null
  //   }, {
  //     type: `TOGGLE_SORTING`,
  //     payload: true
  //   })).toEqual({
  //     city: `Paris`,
  //     offers: offers.Paris.offers,
  //     cityCoords: [48.8680266086781, 2.351173200195321],
  //     mapZoom: 11,
  //     sortingOpened: true,
  //     sorting: `Popular`,
  //     activeCard: null
  //   });
  // });

  it(`Reducer should correctly change sorting`, () => {
    expect(reducer({
      city: `Paris`,
      offers,
      sorting: `Popular`,
      activeCard: null
    }, {
      type: `CHANGE_SORTING`,
      payload: `Price: low to high`
    })).toEqual({
      city: `Paris`,
      offers,
      sorting: `Price: low to high`,
      activeCard: null
    });
  });

  it(`Reducer should correctly change active card`, () => {
    expect(reducer({
      city: `Paris`,
      offers,
      sorting: `Popular`,
      activeCard: null
    }, {
      type: `CHANGE_ACTIVE_CARD`,
      payload: {
        description: `Wood and stone place`,
        img: `img/room.jpg`,
        price: `80`,
        type: `Private room`,
        isPremium: false,
        isBookmark: false,
        coords: [48.91291, 2.273364]
      }
    })).toEqual({
      city: `Paris`,
      offers,
      sorting: `Popular`,
      activeCard: {
        description: `Wood and stone place`,
        img: `img/room.jpg`,
        price: `80`,
        type: `Private room`,
        isPremium: false,
        isBookmark: false,
        coords: [48.91291, 2.273364]
      }
    });
  });
});

describe(`Action creators works correctly`, () => {
  it(`Action creator for changing city returns correct action`, () => {
    expect(ActionCreator.changeCity(`Paris`)).toEqual(
        {
          type: `CHANGE_CITY`,
          payload: `Paris`
        }
    );
  });

  // it(`Action creator for changing city coords returns correct action`, () => {
  //   expect(ActionCreator.changeCity([52.38333, 4.9])).toEqual(
  //       {
  //         type: `CHANGE_CITY`,
  //         payload: [52.38333, 4.9]
  //       }
  //   );
  // });

  // it(`Action creator for changing zoom returns correct action`, () => {
  //   expect(ActionCreator.changeCity(12)).toEqual(
  //       {
  //         type: `CHANGE_CITY`,
  //         payload: 12
  //       }
  //   );
  // });

  // it(`Action creator for toggling sorting returns correct action`, () => {
  //   expect(ActionCreator.toggleSorting(true)).toEqual(
  //       {
  //         type: `TOGGLE_SORTING`,
  //         payload: false
  //       }
  //   );
  // });

  it(`Action creator for changing sorting returns correct action`, () => {
    expect(ActionCreator.changeSorting(`Price: low to high`)).toEqual(
        {
          type: `CHANGE_SORTING`,
          payload: `Price: low to high`
        }
    );
  });

  it(`Action creator for changing active  returns correct action`, () => {
    expect(ActionCreator.changeActiveCard({
      description: `Wood and stone place`,
      img: `img/room.jpg`,
      price: `80`,
      type: `Private room`,
      isPremium: false,
      isBookmark: false,
      coords: [48.91291, 2.273364]
    })).toEqual(
        {
          type: `CHANGE_ACTIVE_CARD`,
          payload: {
            description: `Wood and stone place`,
            img: `img/room.jpg`,
            price: `80`,
            type: `Private room`,
            isPremium: false,
            isBookmark: false,
            coords: [48.91291, 2.273364]
          }
        }
    );
  });
});
