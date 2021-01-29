import reducer from './data';

describe(`Reducer works correctly`, () => {
  it(`Reducer without additional paramerters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      favorites: null,
      offers: null,
      reviews: null,
      user: null
    });
  });

  it(`Reducer should correctly change offers after loading`, () => {
    expect(reducer({
      data: {
        favorites: null,
        offers: null,
        reviews: null,
        user: null
      }
    }, {
      type: `LOAD_DATA`,
      payload: [
        {
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
        {
          "city": {
            "name": `Paris`,
            "location": {
              "latitude": 48.85661,
              "longitude": 2.351499,
              "zoom": 13
            }
          },
          "preview_image": `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/16.jpg`,
          "images": [`https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/7.jpg`],
          "title": `Penthouse, 4-5 rooms + 5 balconies`,
          "is_favorite": false,
          "is_premium": false,
          "rating": 4.2,
          "type": `room`,
          "bedrooms": 1,
          "max_adults": 3,
          "price": 203,
          "goods": [`Breakfast`,
            `Fridge`,
            `Washer`,
            `Baby seat`,
            `Towels`,
            `Air conditioning`,
            `Laptop friendly workspace`],
          "host": {
            "id": 25,
            "name": `Angelina`,
            "is_pro": true,
            "avatar_url": `img/avatar-angelina.jpg`
          },
          "description": `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
          "location": {
            "latitude": 48.861610000000006,
            "longitude": 2.340499,
            "zoom": 16
          },
          "id": 2
        },
        {
          "city": {
            "name": `Hamburg`,
            "location": {
              "latitude": 53.550341,
              "longitude": 10.000654,
              "zoom": 13
            }
          },
          "preview_image": `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/11.jpg`,
          "images": [`https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/19.jpg`],
          "title": `Amazing and Extremely Central Flat`,
          "is_favorite": false,
          "is_premium": false,
          "rating": 4.4,
          "type": `house`,
          "bedrooms": 3,
          "max_adults": 8,
          "price": 156,
          "goods": [`Washer`,
            `Air conditioning`,
            `Breakfast`,
            `Baby seat`,
            `Laptop friendly workspace`],
          "host": {
            "id": 25,
            "name": `Angelina`,
            "is_pro": true,
            "avatar_url": `img/avatar-angelina.jpg`
          },
          "description": `Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.`,
          "location": {
            "latitude": 53.563341,
            "longitude": 10.019654000000001,
            "zoom": 16
          },
          "id": 3
        },
        {
          "city": {
            "name": `Cologne`,
            "location": {
              "latitude": 50.938361,
              "longitude": 6.959974,
              "zoom": 13
            }
          },
          "preview_image": `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/1.jpg`,
          "images": [`https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/10.jpg`],
          "title": `Penthouse, 4-5 rooms + 5 balconies`,
          "is_favorite": false,
          "is_premium": false,
          "rating": 3.7,
          "type": `apartment`,
          "bedrooms": 3,
          "max_adults": 6,
          "price": 380,
          "goods": [`Towels`,
            `Laptop friendly workspace`,
            `Washer`,
            `Air conditioning`,
            `Breakfast`,
            `Baby seat`],
          "host": {
            "id": 25,
            "name": `Angelina`,
            "is_pro": true,
            "avatar_url": `img/avatar-angelina.jpg`
          },
          "description": `This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.`,
          "location": {
            "latitude": 50.954361,
            "longitude": 6.982974,
            "zoom": 16
          },
          "id": 4
        },
        {
          "city": {
            "name": `Cologne`,
            "location": {
              "latitude": 50.938361,
              "longitude": 6.959974,
              "zoom": 13
            }
          },
          "preview_image": `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/14.jpg`,
          "images": [`https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/19.jpg`],
          "title": `Wood and stone place`,
          "is_favorite": false,
          "is_premium": true,
          "rating": 3.4,
          "type": `apartment`,
          "bedrooms": 4,
          "max_adults": 9,
          "price": 232,
          "goods": [`Dishwasher`,
            `Laptop friendly workspace`,
            `Baby seat`,
            `Fridge`,
            `Washing machine`,
            `Air conditioning`,
            `Breakfast`,
            `Towels`,
            `Coffee machine`,
            `Washer`],
          "host": {
            "id": 25,
            "name": `Angelina`,
            "is_pro": true,
            "avatar_url": `img/avatar-angelina.jpg`
          },
          "description": `Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.`,
          "location": {
            "latitude": 50.959361,
            "longitude": 6.978974,
            "zoom": 16
          },
          "id": 5
        },
        {
          "city": {
            "name": `Cologne`,
            "location": {
              "latitude": 50.938361,
              "longitude": 6.959974,
              "zoom": 13
            }
          },
          "preview_image": `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/3.jpg`,
          "images": [`https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/2.jpg`],
          "title": `Penthouse, 4-5 rooms + 5 balconies`,
          "is_favorite": false,
          "is_premium": false,
          "rating": 3.7,
          "type": `house`,
          "bedrooms": 3,
          "max_adults": 9,
          "price": 226,
          "goods": [`Coffee machine`,
            `Breakfast`,
            `Laptop friendly workspace`,
            `Towels`,
            `Washer`,
            `Dishwasher`,
            `Air conditioning`,
            `Fridge`,
            `Baby seat`],
          "host": {
            "id": 25,
            "name": `Angelina`,
            "is_pro": true,
            "avatar_url": `img/avatar-angelina.jpg`
          },
          "description": `Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.`,
          "location": {
            "latitude": 50.932361,
            "longitude": 6.937974,
            "zoom": 16
          },
          "id": 6
        },
        {
          "city": {
            "name": `Amsterdam`,
            "location": {
              "latitude": 52.37454,
              "longitude": 4.897976,
              "zoom": 13
            }
          },
          "preview_image": `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/7.jpg`,
          "images": [`https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/12.jpg`],
          "title": `The house among olive `,
          "is_favorite": false,
          "is_premium": false,
          "rating": 3.2,
          "type": `room`,
          "bedrooms": 1,
          "max_adults": 2,
          "price": 170,
          "goods": [`Laptop friendly workspace`,
            `Breakfast`,
            `Washer`],
          "host": {
            "id": 25,
            "name": `Angelina`,
            "is_pro": true,
            "avatar_url": `img/avatar-angelina.jpg`
          },
          "description": `A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.`,
          "location": {
            "latitude": 52.37454,
            "longitude": 4.881976,
            "zoom": 16
          },
          "id": 7
        },
        {
          "city": {
            "name": `Cologne`,
            "location": {
              "latitude": 50.938361,
              "longitude": 6.959974,
              "zoom": 13
            }
          },
          "preview_image": `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/5.jpg`,
          "images": [`https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/1.jpg`],
          "title": `Perfectly located Castro`,
          "is_favorite": false,
          "is_premium": false,
          "rating": 4.6,
          "type": `apartment`,
          "bedrooms": 5,
          "max_adults": 8,
          "price": 165,
          "goods": [`Breakfast`,
            `Laptop friendly workspace`,
            `Washer`],
          "host": {
            "id": 25,
            "name": `Angelina`,
            "is_pro": true,
            "avatar_url": `img/avatar-angelina.jpg`
          },
          "description": `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
          "location": {
            "latitude": 50.950361,
            "longitude": 6.961974,
            "zoom": 16
          },
          "id": 8
        },
        {
          "city": {
            "name": `Dusseldorf`,
            "location": {
              "latitude": 51.225402,
              "longitude": 6.776314,
              "zoom": 13
            }
          },
          "preview_image": `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/7.jpg`,
          "images": [`https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/14.jpg`],
          "title": `The Joshua Tree House`,
          "is_favorite": false,
          "is_premium": false,
          "rating": 2.2,
          "type": `house`,
          "bedrooms": 4,
          "max_adults": 9,
          "price": 252,
          "goods": [`Breakfast`,
            `Fridge`,
            `Dishwasher`,
            `Laptop friendly workspace`,
            `Baby seat`,
            `Washer`,
            `Air conditioning`,
            `Towels`],
          "host": {
            "id": 25,
            "name": `Angelina`,
            "is_pro": true,
            "avatar_url": `img/avatar-angelina.jpg`
          },
          "description": `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
          "location": {
            "latitude": 51.250402,
            "longitude": 6.7853140000000005,
            "zoom": 16
          },
          "id": 9
        },
        {
          "city": {
            "name": `Brussels`,
            "location": {
              "latitude": 50.846557,
              "longitude": 4.351697,
              "zoom": 13
            }
          },
          "preview_image": `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/3.jpg`,
          "images": [`https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/14.jpg`],
          "title": `Waterfront with extraordinary view`,
          "is_favorite": false,
          "is_premium": false,
          "rating": 2,
          "type": `apartment`,
          "bedrooms": 4,
          "max_adults": 5,
          "price": 220,
          "goods": [`Towels`,
            `Fridge`,
            `Baby seat`,
            `Breakfast`,
            `Laptop friendly workspace`,
            `Washer`,
            `Air conditioning`],
          "host": {
            "id": 25,
            "name": `Angelina`,
            "is_pro": true,
            "avatar_url": `img/avatar-angelina.jpg`
          },
          "description": `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
          "location": {
            "latitude": 50.865556999999995,
            "longitude": 4.371696999999999,
            "zoom": 16
          },
          "id": 10
        },
        {
          "city": {
            "name": `Paris`,
            "location": {
              "latitude": 48.85661,
              "longitude": 2.351499,
              "zoom": 13
            }
          },
          "preview_image": `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/7.jpg`,
          "images": [`https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/14.jpg`],
          "title": `Loft Studio in the Central Area`,
          "is_favorite": false,
          "is_premium": false,
          "rating": 4.6,
          "type": `room`,
          "bedrooms": 1,
          "max_adults": 3,
          "price": 117,
          "goods": [`Washer`,
            `Laptop friendly workspace`,
            `Breakfast`],
          "host": {
            "id": 25,
            "name": `Angelina`,
            "is_pro": true,
            "avatar_url": `img/avatar-angelina.jpg`
          },
          "description": `This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.`,
          "location": {
            "latitude": 48.862610000000004,
            "longitude": 2.369499,
            "zoom": 16
          },
          "id": 11
        },
        {
          "city": {
            "name": `Hamburg`,
            "location": {
              "latitude": 53.550341,
              "longitude": 10.000654,
              "zoom": 13
            }
          },
          "preview_image": `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/14.jpg`,
          "images": [`https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/19.jpg`],
          "title": `House in countryside`,
          "is_favorite": false,
          "is_premium": false,
          "rating": 2.1,
          "type": `room`,
          "bedrooms": 1,
          "max_adults": 2,
          "price": 119,
          "goods": [`Breakfast`,
            `Dishwasher`,
            `Fridge`,
            `Coffee machine`,
            `Washing machine`,
            `Towels`,
            `Baby seat`,
            `Washer`,
            `Laptop friendly workspace`,
            `Air conditioning`],
          "host": {
            "id": 25,
            "name": `Angelina`,
            "is_pro": true,
            "avatar_url": `img/avatar-angelina.jpg`
          },
          "description": `Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.`,
          "location": {
            "latitude": 53.546341000000005,
            "longitude": 10.022654000000001,
            "zoom": 16
          },
          "id": 12
        },
        {
          "city": {
            "name": `Cologne`,
            "location": {
              "latitude": 50.938361,
              "longitude": 6.959974,
              "zoom": 13
            }
          },
          "preview_image": `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/2.jpg`,
          "images": [`https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/2.jpg`],
          "title": `Loft Studio in the Central Area`,
          "is_favorite": false,
          "is_premium": false,
          "rating": 2.4,
          "type": `room`,
          "bedrooms": 1,
          "max_adults": 2,
          "price": 111,
          "goods": [`Washer`,
            `Breakfast`,
            `Fridge`,
            `Air conditioning`,
            `Towels`,
            `Laptop friendly workspace`,
            `Baby seat`],
          "host": {
            "id": 25,
            "name": `Angelina`,
            "is_pro": true,
            "avatar_url": `img/avatar-angelina.jpg`
          },
          "description": `A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.`,
          "location": {
            "latitude": 50.949361,
            "longitude": 6.976974,
            "zoom": 16
          },
          "id": 13
        },
        {
          "city": {
            "name": `Paris`,
            "location": {
              "latitude": 48.85661,
              "longitude": 2.351499,
              "zoom": 13
            }
          },
          "preview_image": `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/12.jpg`,
          "images": [`https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/2.jpg`],
          "title": `Perfectly located Castro`,
          "is_favorite": false,
          "is_premium": true,
          "rating": 2.1,
          "type": `apartment`,
          "bedrooms": 4,
          "max_adults": 8,
          "price": 386,
          "goods": [`Dishwasher`,
            `Baby seat`,
            `Towels`,
            `Laptop friendly workspace`,
            `Fridge`,
            `Washer`,
            `Coffee machine`,
            `Breakfast`,
            `Air conditioning`],
          "host": {
            "id": 25,
            "name": `Angelina`,
            "is_pro": true,
            "avatar_url": `img/avatar-angelina.jpg`
          },
          "description": `Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.`,
          "location": {
            "latitude": 48.83961,
            "longitude": 2.342499,
            "zoom": 16
          },
          "id": 14
        },
        {
          "city": {
            "name": `Hamburg`,
            "location": {
              "latitude": 53.550341,
              "longitude": 10.000654,
              "zoom": 13
            }
          },
          "preview_image": `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/19.jpg`,
          "images": [`https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/6.jpg`],
          "title": `The house among olive `,
          "is_favorite": false,
          "is_premium": false,
          "rating": 3.5,
          "type": `room`,
          "bedrooms": 1,
          "max_adults": 1,
          "price": 243,
          "goods": [`Towels`,
            `Breakfast`,
            `Fridge`,
            `Air conditioning`,
            `Washer`,
            `Laptop friendly workspace`,
            `Baby seat`],
          "host": {
            "id": 25,
            "name": `Angelina`,
            "is_pro": true,
            "avatar_url": `img/avatar-angelina.jpg`
          },
          "description": `Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.`,
          "location": {
            "latitude": 53.555341000000006,
            "longitude": 9.975654,
            "zoom": 16
          },
          "id": 15
        },
        {
          "city": {
            "name": `Brussels`,
            "location": {
              "latitude": 50.846557,
              "longitude": 4.351697,
              "zoom": 13
            }
          },
          "preview_image": `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/19.jpg`,
          "images": [`https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/5.jpg`],
          "title": `Nice, cozy, warm big bed apartment`,
          "is_favorite": false,
          "is_premium": false,
          "rating": 3.4,
          "type": `room`,
          "bedrooms": 1,
          "max_adults": 2,
          "price": 178,
          "goods": [`Breakfast`,
            `Laptop friendly workspace`],
          "host": {
            "id": 25,
            "name": `Angelina`,
            "is_pro": true,
            "avatar_url": `img/avatar-angelina.jpg`
          },
          "description": `I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.`,
          "location": {
            "latitude": 50.860557,
            "longitude": 4.376697,
            "zoom": 16
          },
          "id": 16
        },
        {
          "city": {
            "name": `Cologne`,
            "location": {
              "latitude": 50.938361,
              "longitude": 6.959974,
              "zoom": 13
            }
          },
          "preview_image": `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/20.jpg`,
          "images": [`https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/13.jpg`],
          "title": `Penthouse, 4-5 rooms + 5 balconies`,
          "is_favorite": false,
          "is_premium": false,
          "rating": 2.5,
          "type": `house`,
          "bedrooms": 4,
          "max_adults": 9,
          "price": 159,
          "goods": [`Baby seat`,
            `Coffee machine`,
            `Dishwasher`,
            `Laptop friendly workspace`,
            `Washer`,
            `Breakfast`,
            `Fridge`,
            `Towels`,
            `Air conditioning`],
          "host": {
            "id": 25,
            "name": `Angelina`,
            "is_pro": true,
            "avatar_url": `img/avatar-angelina.jpg`
          },
          "description": `A new spacious villa, one floor. All commodities, acuzzi and beautiful scenery. Ideal for families or friends.`,
          "location": {
            "latitude": 50.945361,
            "longitude": 6.935974,
            "zoom": 16
          },
          "id": 17
        },
        {
          "city": {
            "name": `Amsterdam`,
            "location": {
              "latitude": 52.37454,
              "longitude": 4.897976,
              "zoom": 13
            }
          },
          "preview_image": `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/5.jpg`,
          "images": [`https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/11.jpg`],
          "title": `Canal View Prinsengracht`,
          "is_favorite": false,
          "is_premium": false,
          "rating": 2.2,
          "type": `hotel`,
          "bedrooms": 3,
          "max_adults": 7,
          "price": 310,
          "goods": [`Washer`,
            `Air conditioning`,
            `Breakfast`,
            `Baby seat`,
            `Laptop friendly workspace`],
          "host": {
            "id": 25,
            "name": `Angelina`,
            "is_pro": true,
            "avatar_url": `img/avatar-angelina.jpg`
          },
          "description": `I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!`,
          "location": {
            "latitude": 52.36854,
            "longitude": 4.887976,
            "zoom": 16
          },
          "id": 18},
        {
          "city": {
            "name": `Dusseldorf`,
            "location": {
              "latitude": 51.225402,
              "longitude": 6.776314,
              "zoom": 13
            }
          },
          "preview_image": `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/9.jpg`,
          "images": [`https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/11.jpg`],
          "title": `Waterfront with extraordinary view`,
          "is_favorite": false,
          "is_premium": false,
          "rating": 3.3,
          "type": `apartment`,
          "bedrooms": 3,
          "max_adults": 7,
          "price": 457,
          "goods": [`Breakfast`,
            `Laptop friendly workspace`],
          "host": {
            "id": 25,
            "name": `Angelina`,
            "is_pro": true,
            "avatar_url": `img/avatar-angelina.jpg`
          },
          "description": `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
          "location": {
            "latitude": 51.237402,
            "longitude": 6.797314,
            "zoom": 16
          },
          "id": 19
        }
      ]
    })).toEqual({
      favorites: null,
      offers: [
        {
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
        {
          "city": {
            "name": `Paris`,
            "location": {
              "latitude": 48.85661,
              "longitude": 2.351499,
              "zoom": 13
            }
          },
          "preview_image": `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/16.jpg`,
          "images": [`https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/7.jpg`],
          "title": `Penthouse, 4-5 rooms + 5 balconies`,
          "is_favorite": false,
          "is_premium": false,
          "rating": 4.2,
          "type": `room`,
          "bedrooms": 1,
          "max_adults": 3,
          "price": 203,
          "goods": [`Breakfast`,
            `Fridge`,
            `Washer`,
            `Baby seat`,
            `Towels`,
            `Air conditioning`,
            `Laptop friendly workspace`],
          "host": {
            "id": 25,
            "name": `Angelina`,
            "is_pro": true,
            "avatar_url": `img/avatar-angelina.jpg`
          },
          "description": `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
          "location": {
            "latitude": 48.861610000000006,
            "longitude": 2.340499,
            "zoom": 16
          },
          "id": 2
        },
        {
          "city": {
            "name": `Hamburg`,
            "location": {
              "latitude": 53.550341,
              "longitude": 10.000654,
              "zoom": 13
            }
          },
          "preview_image": `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/11.jpg`,
          "images": [`https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/19.jpg`],
          "title": `Amazing and Extremely Central Flat`,
          "is_favorite": false,
          "is_premium": false,
          "rating": 4.4,
          "type": `house`,
          "bedrooms": 3,
          "max_adults": 8,
          "price": 156,
          "goods": [`Washer`,
            `Air conditioning`,
            `Breakfast`,
            `Baby seat`,
            `Laptop friendly workspace`],
          "host": {
            "id": 25,
            "name": `Angelina`,
            "is_pro": true,
            "avatar_url": `img/avatar-angelina.jpg`
          },
          "description": `Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.`,
          "location": {
            "latitude": 53.563341,
            "longitude": 10.019654000000001,
            "zoom": 16
          },
          "id": 3
        },
        {
          "city": {
            "name": `Cologne`,
            "location": {
              "latitude": 50.938361,
              "longitude": 6.959974,
              "zoom": 13
            }
          },
          "preview_image": `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/1.jpg`,
          "images": [`https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/10.jpg`],
          "title": `Penthouse, 4-5 rooms + 5 balconies`,
          "is_favorite": false,
          "is_premium": false,
          "rating": 3.7,
          "type": `apartment`,
          "bedrooms": 3,
          "max_adults": 6,
          "price": 380,
          "goods": [`Towels`,
            `Laptop friendly workspace`,
            `Washer`,
            `Air conditioning`,
            `Breakfast`,
            `Baby seat`],
          "host": {
            "id": 25,
            "name": `Angelina`,
            "is_pro": true,
            "avatar_url": `img/avatar-angelina.jpg`
          },
          "description": `This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.`,
          "location": {
            "latitude": 50.954361,
            "longitude": 6.982974,
            "zoom": 16
          },
          "id": 4
        },
        {
          "city": {
            "name": `Cologne`,
            "location": {
              "latitude": 50.938361,
              "longitude": 6.959974,
              "zoom": 13
            }
          },
          "preview_image": `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/14.jpg`,
          "images": [`https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/19.jpg`],
          "title": `Wood and stone place`,
          "is_favorite": false,
          "is_premium": true,
          "rating": 3.4,
          "type": `apartment`,
          "bedrooms": 4,
          "max_adults": 9,
          "price": 232,
          "goods": [`Dishwasher`,
            `Laptop friendly workspace`,
            `Baby seat`,
            `Fridge`,
            `Washing machine`,
            `Air conditioning`,
            `Breakfast`,
            `Towels`,
            `Coffee machine`,
            `Washer`],
          "host": {
            "id": 25,
            "name": `Angelina`,
            "is_pro": true,
            "avatar_url": `img/avatar-angelina.jpg`
          },
          "description": `Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.`,
          "location": {
            "latitude": 50.959361,
            "longitude": 6.978974,
            "zoom": 16
          },
          "id": 5
        },
        {
          "city": {
            "name": `Cologne`,
            "location": {
              "latitude": 50.938361,
              "longitude": 6.959974,
              "zoom": 13
            }
          },
          "preview_image": `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/3.jpg`,
          "images": [`https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/2.jpg`],
          "title": `Penthouse, 4-5 rooms + 5 balconies`,
          "is_favorite": false,
          "is_premium": false,
          "rating": 3.7,
          "type": `house`,
          "bedrooms": 3,
          "max_adults": 9,
          "price": 226,
          "goods": [`Coffee machine`,
            `Breakfast`,
            `Laptop friendly workspace`,
            `Towels`,
            `Washer`,
            `Dishwasher`,
            `Air conditioning`,
            `Fridge`,
            `Baby seat`],
          "host": {
            "id": 25,
            "name": `Angelina`,
            "is_pro": true,
            "avatar_url": `img/avatar-angelina.jpg`
          },
          "description": `Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.`,
          "location": {
            "latitude": 50.932361,
            "longitude": 6.937974,
            "zoom": 16
          },
          "id": 6
        },
        {
          "city": {
            "name": `Amsterdam`,
            "location": {
              "latitude": 52.37454,
              "longitude": 4.897976,
              "zoom": 13
            }
          },
          "preview_image": `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/7.jpg`,
          "images": [`https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/12.jpg`],
          "title": `The house among olive `,
          "is_favorite": false,
          "is_premium": false,
          "rating": 3.2,
          "type": `room`,
          "bedrooms": 1,
          "max_adults": 2,
          "price": 170,
          "goods": [`Laptop friendly workspace`,
            `Breakfast`,
            `Washer`],
          "host": {
            "id": 25,
            "name": `Angelina`,
            "is_pro": true,
            "avatar_url": `img/avatar-angelina.jpg`
          },
          "description": `A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.`,
          "location": {
            "latitude": 52.37454,
            "longitude": 4.881976,
            "zoom": 16
          },
          "id": 7
        },
        {
          "city": {
            "name": `Cologne`,
            "location": {
              "latitude": 50.938361,
              "longitude": 6.959974,
              "zoom": 13
            }
          },
          "preview_image": `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/5.jpg`,
          "images": [`https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/1.jpg`],
          "title": `Perfectly located Castro`,
          "is_favorite": false,
          "is_premium": false,
          "rating": 4.6,
          "type": `apartment`,
          "bedrooms": 5,
          "max_adults": 8,
          "price": 165,
          "goods": [`Breakfast`,
            `Laptop friendly workspace`,
            `Washer`],
          "host": {
            "id": 25,
            "name": `Angelina`,
            "is_pro": true,
            "avatar_url": `img/avatar-angelina.jpg`
          },
          "description": `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
          "location": {
            "latitude": 50.950361,
            "longitude": 6.961974,
            "zoom": 16
          },
          "id": 8
        },
        {
          "city": {
            "name": `Dusseldorf`,
            "location": {
              "latitude": 51.225402,
              "longitude": 6.776314,
              "zoom": 13
            }
          },
          "preview_image": `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/7.jpg`,
          "images": [`https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/14.jpg`],
          "title": `The Joshua Tree House`,
          "is_favorite": false,
          "is_premium": false,
          "rating": 2.2,
          "type": `house`,
          "bedrooms": 4,
          "max_adults": 9,
          "price": 252,
          "goods": [`Breakfast`,
            `Fridge`,
            `Dishwasher`,
            `Laptop friendly workspace`,
            `Baby seat`,
            `Washer`,
            `Air conditioning`,
            `Towels`],
          "host": {
            "id": 25,
            "name": `Angelina`,
            "is_pro": true,
            "avatar_url": `img/avatar-angelina.jpg`
          },
          "description": `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
          "location": {
            "latitude": 51.250402,
            "longitude": 6.7853140000000005,
            "zoom": 16
          },
          "id": 9
        },
        {
          "city": {
            "name": `Brussels`,
            "location": {
              "latitude": 50.846557,
              "longitude": 4.351697,
              "zoom": 13
            }
          },
          "preview_image": `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/3.jpg`,
          "images": [`https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/14.jpg`],
          "title": `Waterfront with extraordinary view`,
          "is_favorite": false,
          "is_premium": false,
          "rating": 2,
          "type": `apartment`,
          "bedrooms": 4,
          "max_adults": 5,
          "price": 220,
          "goods": [`Towels`,
            `Fridge`,
            `Baby seat`,
            `Breakfast`,
            `Laptop friendly workspace`,
            `Washer`,
            `Air conditioning`],
          "host": {
            "id": 25,
            "name": `Angelina`,
            "is_pro": true,
            "avatar_url": `img/avatar-angelina.jpg`
          },
          "description": `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
          "location": {
            "latitude": 50.865556999999995,
            "longitude": 4.371696999999999,
            "zoom": 16
          },
          "id": 10
        },
        {
          "city": {
            "name": `Paris`,
            "location": {
              "latitude": 48.85661,
              "longitude": 2.351499,
              "zoom": 13
            }
          },
          "preview_image": `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/7.jpg`,
          "images": [`https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/14.jpg`],
          "title": `Loft Studio in the Central Area`,
          "is_favorite": false,
          "is_premium": false,
          "rating": 4.6,
          "type": `room`,
          "bedrooms": 1,
          "max_adults": 3,
          "price": 117,
          "goods": [`Washer`,
            `Laptop friendly workspace`,
            `Breakfast`],
          "host": {
            "id": 25,
            "name": `Angelina`,
            "is_pro": true,
            "avatar_url": `img/avatar-angelina.jpg`
          },
          "description": `This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.`,
          "location": {
            "latitude": 48.862610000000004,
            "longitude": 2.369499,
            "zoom": 16
          },
          "id": 11
        },
        {
          "city": {
            "name": `Hamburg`,
            "location": {
              "latitude": 53.550341,
              "longitude": 10.000654,
              "zoom": 13
            }
          },
          "preview_image": `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/14.jpg`,
          "images": [`https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/19.jpg`],
          "title": `House in countryside`,
          "is_favorite": false,
          "is_premium": false,
          "rating": 2.1,
          "type": `room`,
          "bedrooms": 1,
          "max_adults": 2,
          "price": 119,
          "goods": [`Breakfast`,
            `Dishwasher`,
            `Fridge`,
            `Coffee machine`,
            `Washing machine`,
            `Towels`,
            `Baby seat`,
            `Washer`,
            `Laptop friendly workspace`,
            `Air conditioning`],
          "host": {
            "id": 25,
            "name": `Angelina`,
            "is_pro": true,
            "avatar_url": `img/avatar-angelina.jpg`
          },
          "description": `Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.`,
          "location": {
            "latitude": 53.546341000000005,
            "longitude": 10.022654000000001,
            "zoom": 16
          },
          "id": 12
        },
        {
          "city": {
            "name": `Cologne`,
            "location": {
              "latitude": 50.938361,
              "longitude": 6.959974,
              "zoom": 13
            }
          },
          "preview_image": `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/2.jpg`,
          "images": [`https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/2.jpg`],
          "title": `Loft Studio in the Central Area`,
          "is_favorite": false,
          "is_premium": false,
          "rating": 2.4,
          "type": `room`,
          "bedrooms": 1,
          "max_adults": 2,
          "price": 111,
          "goods": [`Washer`,
            `Breakfast`,
            `Fridge`,
            `Air conditioning`,
            `Towels`,
            `Laptop friendly workspace`,
            `Baby seat`],
          "host": {
            "id": 25,
            "name": `Angelina`,
            "is_pro": true,
            "avatar_url": `img/avatar-angelina.jpg`
          },
          "description": `A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.`,
          "location": {
            "latitude": 50.949361,
            "longitude": 6.976974,
            "zoom": 16
          },
          "id": 13
        },
        {
          "city": {
            "name": `Paris`,
            "location": {
              "latitude": 48.85661,
              "longitude": 2.351499,
              "zoom": 13
            }
          },
          "preview_image": `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/12.jpg`,
          "images": [`https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/2.jpg`],
          "title": `Perfectly located Castro`,
          "is_favorite": false,
          "is_premium": true,
          "rating": 2.1,
          "type": `apartment`,
          "bedrooms": 4,
          "max_adults": 8,
          "price": 386,
          "goods": [`Dishwasher`,
            `Baby seat`,
            `Towels`,
            `Laptop friendly workspace`,
            `Fridge`,
            `Washer`,
            `Coffee machine`,
            `Breakfast`,
            `Air conditioning`],
          "host": {
            "id": 25,
            "name": `Angelina`,
            "is_pro": true,
            "avatar_url": `img/avatar-angelina.jpg`
          },
          "description": `Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.`,
          "location": {
            "latitude": 48.83961,
            "longitude": 2.342499,
            "zoom": 16
          },
          "id": 14
        },
        {
          "city": {
            "name": `Hamburg`,
            "location": {
              "latitude": 53.550341,
              "longitude": 10.000654,
              "zoom": 13
            }
          },
          "preview_image": `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/19.jpg`,
          "images": [`https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/6.jpg`],
          "title": `The house among olive `,
          "is_favorite": false,
          "is_premium": false,
          "rating": 3.5,
          "type": `room`,
          "bedrooms": 1,
          "max_adults": 1,
          "price": 243,
          "goods": [`Towels`,
            `Breakfast`,
            `Fridge`,
            `Air conditioning`,
            `Washer`,
            `Laptop friendly workspace`,
            `Baby seat`],
          "host": {
            "id": 25,
            "name": `Angelina`,
            "is_pro": true,
            "avatar_url": `img/avatar-angelina.jpg`
          },
          "description": `Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.`,
          "location": {
            "latitude": 53.555341000000006,
            "longitude": 9.975654,
            "zoom": 16
          },
          "id": 15
        },
        {
          "city": {
            "name": `Brussels`,
            "location": {
              "latitude": 50.846557,
              "longitude": 4.351697,
              "zoom": 13
            }
          },
          "preview_image": `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/19.jpg`,
          "images": [`https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/5.jpg`],
          "title": `Nice, cozy, warm big bed apartment`,
          "is_favorite": false,
          "is_premium": false,
          "rating": 3.4,
          "type": `room`,
          "bedrooms": 1,
          "max_adults": 2,
          "price": 178,
          "goods": [`Breakfast`,
            `Laptop friendly workspace`],
          "host": {
            "id": 25,
            "name": `Angelina`,
            "is_pro": true,
            "avatar_url": `img/avatar-angelina.jpg`
          },
          "description": `I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.`,
          "location": {
            "latitude": 50.860557,
            "longitude": 4.376697,
            "zoom": 16
          },
          "id": 16
        },
        {
          "city": {
            "name": `Cologne`,
            "location": {
              "latitude": 50.938361,
              "longitude": 6.959974,
              "zoom": 13
            }
          },
          "preview_image": `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/20.jpg`,
          "images": [`https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/13.jpg`],
          "title": `Penthouse, 4-5 rooms + 5 balconies`,
          "is_favorite": false,
          "is_premium": false,
          "rating": 2.5,
          "type": `house`,
          "bedrooms": 4,
          "max_adults": 9,
          "price": 159,
          "goods": [`Baby seat`,
            `Coffee machine`,
            `Dishwasher`,
            `Laptop friendly workspace`,
            `Washer`,
            `Breakfast`,
            `Fridge`,
            `Towels`,
            `Air conditioning`],
          "host": {
            "id": 25,
            "name": `Angelina`,
            "is_pro": true,
            "avatar_url": `img/avatar-angelina.jpg`
          },
          "description": `A new spacious villa, one floor. All commodities, acuzzi and beautiful scenery. Ideal for families or friends.`,
          "location": {
            "latitude": 50.945361,
            "longitude": 6.935974,
            "zoom": 16
          },
          "id": 17
        },
        {
          "city": {
            "name": `Amsterdam`,
            "location": {
              "latitude": 52.37454,
              "longitude": 4.897976,
              "zoom": 13
            }
          },
          "preview_image": `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/5.jpg`,
          "images": [`https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/11.jpg`],
          "title": `Canal View Prinsengracht`,
          "is_favorite": false,
          "is_premium": false,
          "rating": 2.2,
          "type": `hotel`,
          "bedrooms": 3,
          "max_adults": 7,
          "price": 310,
          "goods": [`Washer`,
            `Air conditioning`,
            `Breakfast`,
            `Baby seat`,
            `Laptop friendly workspace`],
          "host": {
            "id": 25,
            "name": `Angelina`,
            "is_pro": true,
            "avatar_url": `img/avatar-angelina.jpg`
          },
          "description": `I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!`,
          "location": {
            "latitude": 52.36854,
            "longitude": 4.887976,
            "zoom": 16
          },
          "id": 18},
        {
          "city": {
            "name": `Dusseldorf`,
            "location": {
              "latitude": 51.225402,
              "longitude": 6.776314,
              "zoom": 13
            }
          },
          "preview_image": `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/9.jpg`,
          "images": [`https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/11.jpg`],
          "title": `Waterfront with extraordinary view`,
          "is_favorite": false,
          "is_premium": false,
          "rating": 3.3,
          "type": `apartment`,
          "bedrooms": 3,
          "max_adults": 7,
          "price": 457,
          "goods": [`Breakfast`,
            `Laptop friendly workspace`],
          "host": {
            "id": 25,
            "name": `Angelina`,
            "is_pro": true,
            "avatar_url": `img/avatar-angelina.jpg`
          },
          "description": `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
          "location": {
            "latitude": 51.237402,
            "longitude": 6.797314,
            "zoom": 16
          },
          "id": 19
        }
      ],
      reviews: null,
      user: null
    });
  });

  it(`Reducer should correctly change offers after loading`, () => {
    expect(reducer({
      data: {
        favorites: null,
        offers: null,
        reviews: null,
        user: null
      }
    }, {
      type: `SIGN_IN`,
      payload: {
        avatarUrl: `/static/avatar/7.jpg`,
        email: `fdsf@gmail.com`,
        id: 1,
        isPro: false,
        name: `fdsf`,
      }
    })).toEqual({
      favorites: null,
      offers: null,
      reviews: null,
      user: {
        avatarUrl: `/static/avatar/7.jpg`,
        email: `fdsf@gmail.com`,
        id: 1,
        isPro: false,
        name: `fdsf`,
      }
    });
  });
});
