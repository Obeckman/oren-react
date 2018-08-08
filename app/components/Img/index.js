/**
 *
 * Img.js
 *
 * Renders an image, enforcing the usage of the alt="" tag
 */

import React from 'react';
import PropTypes from 'prop-types';

function Img(props) {
  const imageStyle = {
    'grid-area': 'image',
    'object-fit': 'cover',
    width: '100%',
    'max-height': '100%',
  };
  return (
    <img
      className={props.className}
      src={props.src}
      alt={props.alt}
      style={imageStyle}
    />
  );
}

// We require the use of src and alt, only enforced by react in dev mode
Img.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Img;
