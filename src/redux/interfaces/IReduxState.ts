import IImagesDataState from './IImagesDataState';
import IDisplayModeState from './IDisplayModeState';

export default interface IReduxState {
  imagesDataReducer: IImagesDataState;
  displayModeReducer: IDisplayModeState;
}
