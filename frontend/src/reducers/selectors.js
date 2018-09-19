export const getCategories = (state, userId) => {
  return Object.values(state.entities.categories).filter(category => {
    return category.userId === userId;
  });
};