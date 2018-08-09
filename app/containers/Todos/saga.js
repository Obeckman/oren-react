import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { LOAD_DATA } from './constants';
import { loadDataSuccess, loadDataError } from './actions';

export function* actualGetData() {
  const requestURL = `https://jsonplaceholder.typicode.com/todos`;

  try {
    const data = yield call(request, requestURL);
    yield put(loadDataSuccess(data));
  } catch (err) {
    yield put(loadDataError(err));
  }
}

export default function* getData() {
  yield takeLatest(LOAD_DATA, actualGetData);
}
