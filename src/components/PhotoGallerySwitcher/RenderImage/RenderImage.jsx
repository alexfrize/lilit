import React from 'react';
import zoomIcon from './zoom-icon.svg';
import './RenderImage.scss';

const RenderImage = ({
  index,
  onClick,
  photo,
  margin,
  direction,
  top,
  left
}) => {
  return (
    <div
      style={{
        margin,
        height: photo.height,
        width: photo.width,
        position: 'relative'
      }}
      className="image-wrapper"
      onClick={e => onClick(e, { index, photo })}
    >
      <div
        style={{
          height: photo.height,
          width: photo.width
        }}
        className="image-overlay"
      >
        <img src={zoomIcon} className="image-overlay-icon" />
      </div>

      <img {...photo} />
    </div>
  );
};
export default RenderImage;
