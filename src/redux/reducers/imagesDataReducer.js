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
          [action.payload.galleryName]: action.payload.photos
        },
        activeGallery: action.payload.galleryName
      };

    default:
      return reduxState;
  }
};
