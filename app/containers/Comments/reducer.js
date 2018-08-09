/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import { LOAD_DATA_ERROR, LOAD_DATA_SUCCESS, LOAD_DATA } from './constants';

// The initial state of the App
export const initialState = fromJS({
  loading: false,
  error: false,
  comments: false,
});

function photoGalleryReducer(state = initialState, action) {
  console.warn('Reducer Comments ', state, action);
  switch (action.type) {
    case LOAD_DATA:
      return state
        .set('loading', true)
        .set('error', false)
        .set('comments', false);
    case LOAD_DATA_SUCCESS:
      return state
        .set('comments', action.data)
        .set('error', false)
        .set('loading', false);
    case LOAD_DATA_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error)
        .set('comments', false);
    default:
      return state;
  }
}

export default photoGalleryReducer;
