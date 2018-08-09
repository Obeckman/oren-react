import {
  LOAD_DATA,
  LOAD_DATA_ERROR,
  LOAD_DATA_SUCSSES,
  FILTER_CHANGE,
} from './constants';

export function loadData() {
  return {
    type: LOAD_DATA,
  };
}

export function loadDataError(error) {
  return {
    type: LOAD_DATA_ERROR,
    error,
  };
}
export function loadDataSuccess(data) {
  return {
    type: LOAD_DATA_SUCSSES,
    data,
  };
}
export function filterChange(filterValue) {
  return {
    type: FILTER_CHANGE,
    filterValue,
  };
}
