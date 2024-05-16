// Image.jsx
import React from 'react';

const Image = ({ img }) => {
  return (
    <div className="column">
      <img src={img} alt="Gallery" />
    </div>
  );
}

export default Image;
