import IMenuItem from '../interfaces/IMenuItem';
import { loadGallery } from './imagesDataActions';
import { setDisplayMode } from './displayModeActions';
import {
  PHOTO_GALLERY,
  PHOTO_GALLERY_SWITCHER,
  VIDEO_GALLERY,
  PAGE
} from '../constants/displayModeConstants';

export const activateMenuItem = (menuItem: IMenuItem): any => {
  console.log('menuItem', menuItem);
  return (dispatch: any) => {
    switch (menuItem.type) {
      case PHOTO_GALLERY:
        dispatch(setDisplayMode(PHOTO_GALLERY));
        dispatch(loadGallery(menuItem.fileName));
        break;

      case PHOTO_GALLERY_SWITCHER:
        dispatch(setDisplayMode(PHOTO_GALLERY_SWITCHER));
        dispatch(loadGallery(menuItem.fileName));
        break;

      case VIDEO_GALLERY:
        dispatch(setDisplayMode(VIDEO_GALLERY));
        dispatch(loadGallery(menuItem.fileName));
        break;

      case PAGE:
        dispatch(setDisplayMode(PAGE));
        break;

      default:
        break;
    }
  };
};
