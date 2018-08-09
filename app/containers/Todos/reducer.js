import { fromJS } from 'immutable';

import {
  FILTER_CHANGE,
  LOAD_DATA_ERROR,
  LOAD_DATA_SUCSSES,
  LOAD_DATA,
} from './constants';

export const defualtState = fromJS({
  loading: false,
  error: false,
  data: false,
  filterValue: false,
});

function reducer(state = defualtState, action) {
  console.info('todos reducer action.type ', action.type);
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
    default:
      return state;
  }
}
export default reducer;
