import { SET_GALLERY } from '../constants/imagesDataConstants';
import IImagesDataState from '../interfaces/IImagesDataState';

const defaultImagesDataReducerState: IImagesDataState = {
  galleries: {},
  activeGallery: null
};

export const imagesDataReducer = (
  state = defaultImagesDataReducerState,
  action: any
) => {
  switch (action.type) {
    case SET_GALLERY:
      return {
        ...state,
        galleries: {
          ...state.galleries,
          [action.payload.galleryFileName]: action.payload.photos
        },
        activeGallery: action.payload.galleryFileName
      };

    default:
      return state;
  }
};
