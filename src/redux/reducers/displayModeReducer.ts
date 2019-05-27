import { SET_DISPLAY_MODE, GALLERY } from '../constants/displayModeConstants';
import IDisplayModeState from '../interfaces/IDisplayModeState';

const defaultState: IDisplayModeState = {
  displayMode: GALLERY
};

export const displayModeReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case SET_DISPLAY_MODE:
      return { ...state, displayMode: action.payload };

    default:
      return state;
  }
};
