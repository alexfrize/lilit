import React, { Component } from 'react';
import Menu from './Menu';
import PhotoGallery from './PhotoGallery';
import { connect } from 'react-redux';
import './App.scss';
import IReduxState from '../redux/interfaces/IReduxState';
import { GALLERY } from '../redux/constants/displayModeConstants';

const App = (props: any) => {
  return (
    <div className="App">
      <Menu />
      {props.displayMode === GALLERY && <PhotoGallery />}
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
