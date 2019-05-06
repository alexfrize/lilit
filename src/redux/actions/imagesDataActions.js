import { SET_GALLERY } from '../constants/imagesDataConstants';

export const loadGallery = galleryName => {
  return async (dispatch, getState) => {
    let data;

    if (getState().galleries[galleryName]) {
      data = getState().galleries[galleryName];
    } else {
      let res = await fetch(
        `${process.env.PUBLIC_URL}/json/${galleryName.toLowerCase()}.json`
      );
      data = await res.json();
    }

    dispatch(setGallery(galleryName, data));
  };
};
/* ************************************************** */

const setGallery = (galleryName, photos) => {
  return {
    type: SET_GALLERY,
    payload: {
      photos,
      galleryName
    }
  };
};
