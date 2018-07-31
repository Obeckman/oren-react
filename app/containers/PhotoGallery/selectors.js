/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectPhotoGallery = state => {
  const temp = state.get('PhotoGallery', initialState);
  return temp;
};

const selectPhotos = () =>
  createSelector(selectPhotoGallery, data => data.get('photos'));
const selectError = () =>
  createSelector(selectPhotoGallery, data => data.get('error'));
const selectLoading = () =>
  createSelector(selectPhotoGallery, data => data.get('loading'));

export { selectPhotoGallery, selectPhotos, selectError, selectLoading };
