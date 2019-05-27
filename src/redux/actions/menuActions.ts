import IMenuItem from '../interfaces/IMenuItem';
import { loadGallery } from './imagesDataActions';
import { setDisplayMode } from './displayModeActions';
import { GALLERY, PAGE } from '../constants/displayModeConstants';

export const activateMenuItem = (menuItem: IMenuItem): any => {
  console.log('menuItem', menuItem);
  return (dispatch: any) => {
    switch (menuItem.type) {
      case GALLERY:
        dispatch(setDisplayMode(GALLERY));
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
