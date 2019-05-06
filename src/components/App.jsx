import React, { Component } from 'react';
import Menu from './Menu';
import menuItems from './Menu/menu-items';
import PhotoGallery from './PhotoGallery';
import './App.scss';

export default class App extends Component {
  state = {
    gallery: menuItems[1]
  };

  render() {
    return (
      <div className="App">
        <Menu />
        <PhotoGallery gallery={this.state.gallery} />
      </div>
    );
  }
}
