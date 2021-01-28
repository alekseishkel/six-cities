const getCurrentCityOffers = (offers, currentCity) => {
  return offers.filter((offer) => offer.city.name === currentCity);
};

const getUniqueCitiesNames = (offers) => {
  let cities = new Set();
  offers.forEach((offer) => cities.add(offer.city.name));

  return Array.from(cities);
};

const getFavoriteOffers = (offers) => {
  return offers.filter((offer) => offer.is_favorite === true);
};

export {
  getCurrentCityOffers,
  getUniqueCitiesNames,
  getFavoriteOffers
};
