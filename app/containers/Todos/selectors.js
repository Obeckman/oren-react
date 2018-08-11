/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { defualtState } from './reducer';

const selectStoreState = state => state.get('Todos', defualtState);
const getFilterValue = state => {
  const foundState = state.get('Todos', defualtState);
  return foundState.get('filterValue');
};

const selectData = () =>
  createSelector(selectStoreState, data => data.get('data'));
const selectError = () =>
  createSelector(selectStoreState, data => data.get('error'));
const selectLoading = () =>
  createSelector(selectStoreState, data => data.get('loading'));
const selectFilterValue = () =>
  createSelector(selectStoreState, data => data.get('filterValue'));
const selectFilterdData = () =>
  createSelector([selectStoreState, getFilterValue], (data, infilterValue) => {
    const filterValue = infilterValue;
    if (!filterValue || !data.get('data')) return data.get('data');

    return data.get('data').filter(item => {
      for (const key in item) {
        if (item.hasOwnProperty(key)) {
          if (typeof item[key] === 'string' || item[key] instanceof String) {
            if (item[key].includes(filterValue)) {
              return true;
            }
          } else if (typeof item[key] === 'number') {
            if (item[key].toString().includes(filterValue)) {
              return true;
            }
          }
        }
      }
      return false;
    }); // .bind(filterValue);
  });

const selectPageOfItems = () =>
  createSelector(selectStoreState, data => data.get('pagedItems'));

export {
  selectStoreState,
  selectData,
  selectError,
  selectLoading,
  selectFilterValue,
  selectFilterdData,
  selectPageOfItems,
};
