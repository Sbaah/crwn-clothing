import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

// an object that maps a string value to their respective id.
//  With the string value being received from the url query 
// const COLLECTION_ID_MAP ={
//   Hats:1,
//   Sneakers:2,
//   Jackets:3,
//   Womens:4,
//   Mens:5
// }

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);


export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
);

/** Memoize does the same idea of memoization as reselect does for our selectors,
 *  except this time we're memoizing the return of our function which returns our
 *  selector */
export const selectCollection = memoize(collectionUrlParam =>
 createSelector(
   [selectCollections],
   collections => collections[collectionUrlParam]
 )
);

/** By wrapping this function is memoize, we're saying that whenever
 *  this function gets called and receives collectionUrlParam, 
 *  I want to memoize the return of this function (in this case we return a selector).
 *  If this function gets called again with the same collectionUrlParam,
 *  don't rerun this function because we'll return the same value as last time, 
 *  which we've memoized so just return the selector that's been stored. */