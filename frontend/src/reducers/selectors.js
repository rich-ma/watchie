export const getCategories = (state, userId) => {
  return Object.values(state.entities.categories).filter(category => {
    return category.userId === userId;
  });
};

export const getLocations = (state, userId) => {
  const locations = Object.values(state.entities.locations);
  const times = Object.values(state.entities.times).filter(time => {
    return time.userId === userId;
  }).map(time => time.locationId);

  return locations
  .filter(location => times.includes(location._id))
  .sort((loc1, loc2) => loc1.date < loc2.date);
};