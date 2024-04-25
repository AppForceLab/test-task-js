export const getCampers = ({ campers }) => campers.items;
export const getCamper =
  (id) =>
  ({ campers }) =>
    campers.items.find(({ _id }) => _id === id);
export const getCamperReviews =
  (id) =>
  ({ campers }) =>
    campers.items.find(({ _id }) => _id === id).reviews;
export const getPage = ({ campers }) => campers.page;
export const getShowLoadMoreButton = ({ campers }) =>
  campers.showLoadMoreButton;
export const getError = ({ campers }) => campers.error;
export const getIsLoading = ({ campers }) => campers.isLoading;

export const getFavorites = ({ favorites }) => favorites.items;

export const getLocationFilterQuery = ({ filters }) => filters.locationFilter;
