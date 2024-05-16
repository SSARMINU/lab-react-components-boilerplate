// App.jsx
import React from 'react';
import './App.css';
import Header from './components/Header';
import ImageGallery from './components/ImageGallery';
import GallaryFooter from './components/GallaryFooter';
import lake from "./image/lake.JPG";

const imageData = [
  { id: 1, img: lake },
  { id: 2, img: lake },
  { id: 3, img: lake },
  { id: 4, img: lake }
];

function App() {
  return (
    <div>
      <Header />
      <ImageGallery images={imageData} />
      <GallaryFooter />
    </div>
  );
}

export default App;
