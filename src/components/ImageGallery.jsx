// ImageGallery.jsx
import React from 'react';
import Image from './Image';

const ImageGallery = ({ images }) => {
  return (
    <div>
      {images.map(image => (
        <Image key={image.id} img={image.img} />
      ))}
    </div>
  );
}

export default ImageGallery;
