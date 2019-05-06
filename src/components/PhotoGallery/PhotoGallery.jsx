import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import { loadGallery } from '../../redux/actions/imagesDataActions';
import menuItems from '../Menu/menu-items';
import { connect } from 'react-redux';
import './PhotoGallery.scss';

class PhotoGallery extends Component {
  state = {
    photos: [],
    currentImage: 0
  };

  /* ************************************************** */

  constructor() {
    super();
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }

  /* ************************************************** */

  static getDerivedStateFromProps(nextProps, prevState) {
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
    this.props.loadGallery(menuItems[0]);
  }

  /* ************************************************** */

  openLightbox(event, obj) {
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
              photos={this.props.galleries[this.props.activeGallery]}
              onClick={this.openLightbox}
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

function mapStateToProps(reduxState) {
  return {
    galleries: reduxState.galleries,
    activeGallery: reduxState.activeGallery
  };
}

export default connect(
  mapStateToProps,
  { loadGallery }
)(PhotoGallery);
