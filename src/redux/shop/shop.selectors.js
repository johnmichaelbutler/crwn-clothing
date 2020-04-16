import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  // Since initial state is null, Object.keys returns an array of the keys of the object or if no collections, an empty array
  collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectionUrlParam =>
createSelector(
  [selectCollections],
  collections => (collections ? collections[collectionUrlParam] : null)
  );
