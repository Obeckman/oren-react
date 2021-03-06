/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { LOAD_DATA } from './constants';
import { loadDataSuccess, loadDataError } from './actions';

export function* getPhotosData() {
  const requestURL = `https://jsonplaceholder.typicode.com/photos`;

  try {
    // Call our request helper (see 'utils/request')
    const data = yield call(request, requestURL);
    yield put(loadDataSuccess(data));
  } catch (err) {
    yield put(loadDataError(err));
  }
}

export default function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_DATA, getPhotosData);
}
