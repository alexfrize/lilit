import { SET_GALLERY } from '../constants/imagesDataConstants';

const defaultImagesDataReducerState = {
  galleries: {},
  activeGallery: null
};

export const imagesDataReducer = (
  reduxState = defaultImagesDataReducerState,
  action
) => {
  switch (action.type) {
    case SET_GALLERY:
      return {
        ...reduxState,
        galleries: {
          ...reduxState.galleries,
          [action.payload.galleryFileName]: action.payload.photos
        },
        activeGallery: action.payload.galleryFileName
      };

    default:
      return reduxState;
  }
};
