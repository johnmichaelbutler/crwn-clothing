import { createSelector } from 'reselect';


const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);


export const selectCollection = collectionUrlParam =>
createSelector(
  [selectCollections],
  collections => collections[collectionUrlParam]
  );

export const selectCollectionsForPreview = createSelector(
  [selectCollection],
  // Object.keys returns an array of the keys of the object
  collections => Object.keys(collections).map(key => collections[key])
);