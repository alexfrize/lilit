import React, { Component } from 'react';
import Menu from './Menu';
import PhotoGallery from './PhotoGallery';
import PhotoGallerySwitcher from './PhotoGallerySwitcher';
// import VideoGallery from './VideoGallery';
import { connect } from 'react-redux';
import './App.scss';
import IReduxState from '../redux/interfaces/IReduxState';
import {
  PHOTO_GALLERY,
  VIDEO_GALLERY,
  PHOTO_GALLERY_SWITCHER
} from '../redux/constants/displayModeConstants';

const App = (props: any) => {
  return (
    <div className="App">
      <Menu />
      {props.displayMode === PHOTO_GALLERY && <PhotoGallery />}
      {props.displayMode === PHOTO_GALLERY_SWITCHER && <PhotoGallerySwitcher />}
      {/* {props.displayMode === VIDEO_GALLERY && <VideoGallery />} */}
    </div>
  );
};

function mapStateToProps(reduxState: IReduxState) {
  return {
    displayMode: reduxState.displayModeReducer.displayMode
  };
}
export default connect(
  mapStateToProps,
  null
)(App);
