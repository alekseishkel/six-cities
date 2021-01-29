import reducer from './user-state';

describe(`Reducer works correctly`, () => {
  it(`Reducer without additional paramerters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      activeCard: null,
      city: null,
      isAuthorized: false,
      sorting: `Popular`
    });
  });

  it(`Reducer should correctly change city`, () => {
    expect(reducer({
      userState:
        {
          activeCard: null,
          city: null,
          isAuthorized: false,
          sorting: `Popular`
        }}, {
      type: `CHANGE_CITY`,
      payload: `Amsterdam`
    })).toEqual({
      activeCard: null,
      isAuthorized: false,
      city: `Amsterdam`,
      sorting: `Popular`
    });
  });

  it(`Reducer should correctly change sorting`, () => {
    expect(reducer({
      userState:
        {
          activeCard: null,
          city: null,
          isAuthorized: false,
          sorting: `Popular`
        }}, {
      type: `CHANGE_SORTING`,
      payload: `Price: low to high`
    })).toEqual({
      activeCard: null,
      city: null,
      isAuthorized: false,
      sorting: `Price: low to high`
    });
  });

  it(`Reducer should correctly change active card`, () => {
    expect(reducer({
      userState:
        {
          activeCard: null,
          city: null,
          isAuthorized: false,
          sorting: `Popular`
        }}, {
      type: `CHANGE_ACTIVE_CARD`,
      payload: {
        "city":
        {
          "name": `Hamburg`,
          "location":
          {
            "latitude": 53.550341,
            "longitude": 10.000654,
            "zoom": 13
          }
        },
        "preview_image": `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/7.jpg`,
        "images": [`https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/1.jpg`,
          `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/19.jpg`,
          `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/6.jpg`,
          `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/14.jpg`,
          `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/7.jpg`,
          `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/17.jpg`,
          `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/9.jpg`,
          `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/18.jpg`,
          `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/2.jpg`,
          `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/11.jpg`,
          `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/10.jpg`,
          `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/20.jpg`,
          `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/12.jpg`,
          `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/13.jpg`],
        "title": `The Pondhouse - A Magical Place`,
        "is_favorite": false,
        "is_premium": false,
        "rating": 2.8,
        "type": `hotel`,
        "bedrooms": 3,
        "max_adults": 9,
        "price": 482,
        "goods": [`Washer`,
          `Air conditioning`,
          `Baby seat`,
          `Breakfast`,
          `Laptop friendly workspace`],
        "host": {
          "id": 25,
          "name": `Angelina`,
          "is_pro": true,
          "avatar_url": `img/avatar-angelina.jpg`
        },
        "description": `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
        "location": {
          "latitude": 53.558341000000006,
          "longitude": 10.001654,
          "zoom": 16
        },
        "id": 1
      },
    })).toEqual({
      activeCard: {
        "city":
        {
          "name": `Hamburg`,
          "location":
          {
            "latitude": 53.550341,
            "longitude": 10.000654,
            "zoom": 13
          }
        },
        "preview_image": `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/7.jpg`,
        "images": [`https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/1.jpg`,
          `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/19.jpg`,
          `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/6.jpg`,
          `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/14.jpg`,
          `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/7.jpg`,
          `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/17.jpg`,
          `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/9.jpg`,
          `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/18.jpg`,
          `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/2.jpg`,
          `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/11.jpg`,
          `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/10.jpg`,
          `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/20.jpg`,
          `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/12.jpg`,
          `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/13.jpg`],
        "title": `The Pondhouse - A Magical Place`,
        "is_favorite": false,
        "is_premium": false,
        "rating": 2.8,
        "type": `hotel`,
        "bedrooms": 3,
        "max_adults": 9,
        "price": 482,
        "goods": [`Washer`,
          `Air conditioning`,
          `Baby seat`,
          `Breakfast`,
          `Laptop friendly workspace`],
        "host": {
          "id": 25,
          "name": `Angelina`,
          "is_pro": true,
          "avatar_url": `img/avatar-angelina.jpg`
        },
        "description": `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
        "location": {
          "latitude": 53.558341000000006,
          "longitude": 10.001654,
          "zoom": 16
        },
        "id": 1
      },
      city: null,
      isAuthorized: false,
      sorting: `Popular`
    });
  });

  it(`Reducer should correctly change required authorization`, () => {
    expect(reducer({
      userState:
        {
          activeCard: null,
          isAuthorized: false,
          city: null,
          sorting: `Popular`
        }}, {
      type: `REQUIRE_AUTHORIZATION`,
      payload: true
    })).toEqual({
      activeCard: null,
      city: null,
      isAuthorized: true,
      sorting: `Popular`
    });
  });
});
