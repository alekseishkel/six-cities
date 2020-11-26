import {ActionCreator, reducer} from './reducer';

describe(`Reducer works correctly`, () => {
  it(`Reducer without additional paramerters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      city: `Paris`,
      cityCoords: [48.8680266086781, 2.351173200195321],
      mapZoom: 11,
    });
  });

  it(`Reducer should correctly change city`, () => {
    expect(reducer({
      city: `Paris`,
      cityCoords: [48.8680266086781, 2.351173200195321],
      mapZoom: 11
    }, {
      type: `CHANGE_CITY`,
      payload: `Amsterdam`
    })).toEqual({
      city: `Amsterdam`,
      cityCoords: [48.8680266086781, 2.351173200195321],
      mapZoom: 11,
    });
  });

  it(`Reducer should correctly change city coords`, () => {
    expect(reducer({
      city: `Paris`,
      cityCoords: [48.8680266086781, 2.351173200195321],
      mapZoom: 11
    }, {
      type: `CHANGE_CITY_COORDS`,
      payload: [52.38333, 4.9]
    })).toEqual({
      city: `Paris`,
      cityCoords: [52.38333, 4.9],
      mapZoom: 11,
    });
  });

  it(`Reducer should correctly change zoom`, () => {
    expect(reducer({
      city: `Paris`,
      cityCoords: [48.8680266086781, 2.351173200195321],
      mapZoom: 11
    }, {
      type: `CHANGE_ZOOM`,
      payload: 12
    })).toEqual({
      city: `Paris`,
      cityCoords: [48.8680266086781, 2.351173200195321],
      mapZoom: 12,
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

  it(`Action creator for changing city coords returns correct action`, () => {
    expect(ActionCreator.changeCity([52.38333, 4.9])).toEqual(
        {
          type: `CHANGE_CITY`,
          payload: [52.38333, 4.9]
        }
    );
  });

  it(`Action creator for changing zoom returns correct action`, () => {
    expect(ActionCreator.changeCity(12)).toEqual(
        {
          type: `CHANGE_CITY`,
          payload: 12
        }
    );
  });
});
