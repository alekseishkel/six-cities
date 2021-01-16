const getCurrentCityOffers = (offers, currentCity) => {
  return offers.filter((el) => el.city.name === currentCity);
};

const getNamesOfSixCities = (offers) => {
  let cities = new Set();
  offers.forEach((el) => cities.add(el.city.name));

  return Array.from(cities);
};

const getFavoriteOffers = (offers) => {
  return offers.filter((el) => el.is_favorite);
};

export {
  getCurrentCityOffers,
  getNamesOfSixCities,
  getFavoriteOffers
};
