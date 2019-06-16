import React, { Component, SyntheticEvent } from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import { loadGallery } from '../../redux/actions/imagesDataActions';
import RenderImage from './RenderImage';
import menuItems from '../Menu/menu-items';
import { PHOTO_GALLERY } from '../../redux/constants/displayModeConstants';
import { activateMenuItem } from '../../redux/actions/menuActions';
import IMenuItem from '../../redux/interfaces/IMenuItem';
import { connect } from 'react-redux';
import IReduxState from '../../redux/interfaces/IReduxState';

import './PhotoGallerySwitcher.scss';

interface IPhotoGalleryProps {
  loadGallery(galleryFileName: string): any;
  activateMenuItem(menuItem: IMenuItem): any;
}

class PhotoGallery extends Component<IPhotoGalleryProps> {
  state = {
    photos: []
    // currentImage: 0,
    // lightboxIsOpen: false
  };

  /* ************************************************** */

  constructor(props: IPhotoGalleryProps) {
    super(props);
    this.changeGallery = this.changeGallery.bind(this);
  }

  /* ************************************************** */

  static getDerivedStateFromProps(nextProps: any, prevState: any) {
    if (prevState.activeGallery === nextProps.activeGallery) {
      return { ...prevState, ...nextProps };
    }

    return {
      ...prevState,
      photos: nextProps.galleries[nextProps.activeGallery],
      activeGallery: nextProps.activeGallery
    };
  }

  /* ************************************************** */

  changeGallery(event: SyntheticEvent, obj: any) {
    console.log('obj-gallery', obj);
    const menuItem = {
      type: PHOTO_GALLERY,
      fileName: obj.photo.galleryfilename,
      name: obj.photo.galleryfilename,
      url: obj.photo.galleryfilename
    };

    this.props.activateMenuItem(menuItem);
  }
  /* ************************************************** */

  componentDidMount() {
    this.props.loadGallery(menuItems[0].fileName);
  }

  /* ************************************************** */

  render() {
    return (
      <div className="PhotoGallerySwitcher">
        {this.state.photos && (
          <React.Fragment>
            <Gallery
              photos={this.state.photos}
              onClick={this.changeGallery}
              renderImage={RenderImage}
            />
          </React.Fragment>
        )}
      </div>
    );
  }
}

/* ************************************************** */

function mapStateToProps(reduxState: IReduxState) {
  return {
    galleries: reduxState.imagesDataReducer.galleries,
    activeGallery: reduxState.imagesDataReducer.activeGallery
  };
}

export default connect(
  mapStateToProps,
  { loadGallery, activateMenuItem }
)(PhotoGallery);
