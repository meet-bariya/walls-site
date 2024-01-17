import React from 'react';
import './App.css';
import ImageSlider from './ImageSlider';

const images = require.context('../../../../pix/wall', true);
const SliderData = images.keys().map(image => images(image));

function App() {
  return <ImageSlider slides={SliderData} />;
}

export default App;
