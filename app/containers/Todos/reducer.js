import { fromJS } from 'immutable';

import {
  FILTER_CHANGE,
  LOAD_DATA_ERROR,
  LOAD_DATA_SUCSSES,
  LOAD_DATA,
  PAGE_OF_ITEMS,
} from './constants';

export const defualtState = fromJS({
  loading: false,
  error: false,
  data: false,
  filterValue: false,
  pagedItems: false,
});

function reducer(state = defualtState, action) {
  switch (action.type) {
    case LOAD_DATA:
      return state
        .set('loading', true)
        .set('error', false)
        .set('data', false);
    case LOAD_DATA_ERROR:
      return state
        .set('loading', false)
        .set('error', true)
        .set('data', action.error);
    case LOAD_DATA_SUCSSES:
      return state
        .set('loading', false)
        .set('error', false)
        .set('data', action.data);
    case FILTER_CHANGE:
      return state.set('filterValue', action.filterValue);
    case PAGE_OF_ITEMS:
      return state.set('pagedItems', action.pageOfItems);
    default:
      return state;
  }
}
export default reducer;
