import React, { Component, SyntheticEvent } from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import { loadGallery } from '../../redux/actions/imagesDataActions';
import RenderImage from './RenderImage';
import menuItems from '../Menu/menu-items';
import { connect } from 'react-redux';
import IReduxState from '../../redux/interfaces/IReduxState';

import './PhotoGallery.scss';

interface IPhotoGalleryProps {
  loadGallery(galleryFileName: string): any;
}

class PhotoGallery extends Component<IPhotoGalleryProps> {
  state = {
    photos: [],
    currentImage: 0,
    lightboxIsOpen: false
  };

  /* ************************************************** */

  constructor(props: IPhotoGalleryProps) {
    super(props);
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
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

  componentDidMount() {
    this.props.loadGallery(menuItems[0].fileName);
  }

  /* ************************************************** */

  openLightbox(event: SyntheticEvent, obj: any) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true
    });
  }

  /* ************************************************** */

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  }

  /* ************************************************** */

  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }

  /* ************************************************** */

  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  }

  /* ************************************************** */

  render() {
    return (
      <div className="PhotoGallery">
        {this.state.photos && (
          <React.Fragment>
            <Gallery
              photos={this.state.photos}
              onClick={this.openLightbox}
              renderImage={RenderImage}
            />
            <Lightbox
              images={this.state.photos}
              onClose={this.closeLightbox}
              onClickPrev={this.gotoPrevious}
              onClickNext={this.gotoNext}
              currentImage={this.state.currentImage}
              isOpen={this.state.lightboxIsOpen}
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
  { loadGallery }
)(PhotoGallery);
