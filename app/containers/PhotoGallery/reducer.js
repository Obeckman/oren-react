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
  photos: false,
});

function photoGalleryReducer(state = initialState, action) {
  console.warn('Reducer photoGalleryReducer ', state, action);
  switch (action.type) {
    case LOAD_DATA:
      return state
        .set('loading', true)
        .set('error', false)
        .set('photos', false);
    case LOAD_DATA_SUCCESS:
    console.warn("Reducer photoGalleryReducer ",action.data)  
    return state
        .set('photos', action.data)
        .set('error', false)
        .set('loading', false);
    case LOAD_DATA_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error)
        .set('photos', false);
    default:
      return state;
  }
}

export default photoGalleryReducer;
