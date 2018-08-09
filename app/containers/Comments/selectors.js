/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectCommentsStore = state => {
  const temp = state.get('Comments', initialState);
  console.info('selectors selectCommentsStore');
  return temp;
};

const selectComments = () =>
  createSelector(selectCommentsStore, data => data.get('comments'));
const selectError = () =>
  createSelector(selectCommentsStore, data => data.get('error'));
const selectLoading = () =>
  createSelector(selectCommentsStore, data => data.get('loading'));

export { selectCommentsStore, selectComments, selectError, selectLoading };
