import { SET_DISPLAY_MODE } from '../constants/displayModeConstants';

export const setDisplayMode = (displayMode: string) => {
  return {
    type: SET_DISPLAY_MODE,
    payload: displayMode
  };
};
