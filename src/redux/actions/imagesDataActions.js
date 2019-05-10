import { SET_GALLERY } from '../constants/imagesDataConstants';

export const loadGallery = galleryFileName => {
  return async (dispatch, getState) => {
    let data;
    console.log('galleryName', galleryFileName);
    if (getState().galleries[galleryFileName]) {
      console.warn('already loaded');
      data = getState().galleries[galleryFileName];
    } else {
      let res = await fetch(
        `${process.env.PUBLIC_URL}/json/${galleryFileName.toLowerCase()}.json`
      );
      data = await res.json();
    }
    console.log('data', data);
    dispatch(setGallery(galleryFileName, data));
  };
};
/* ************************************************** */

const setGallery = (galleryFileName, photos) => {
  return {
    type: SET_GALLERY,
    payload: {
      photos,
      galleryFileName
    }
  };
};
