/* This the use of the memorization technique to help performance
 *
 */

import { createSelector } from 'reselect';

// input selector, function that gets the whole sate and returns portions of it
const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
