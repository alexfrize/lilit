import { SET_GALLERY } from '../constants/imagesDataConstants';

export const loadGallery = (galleryFileName: string) => {
  return async (dispatch: any, getState: any) => {
    let data;
    console.log('galleryName', galleryFileName);
    const cachedData = getState().imagesDataReducer.galleries[galleryFileName];
    if (cachedData) {
      console.warn('already loaded');
      data = cachedData;
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

const setGallery = (galleryFileName: string, photos: any) => {
  return {
    type: SET_GALLERY,
    payload: {
      photos,
      galleryFileName
    }
  };
};
