import './App.css';
import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import imageOne from "./1.png"
import imageTwo from "./2.png"
import imageThree from "./3.png"
import imageFour from "./4.png"
import imageFive from "./5.png"
import imageSix from "./6.png"
import imageSeven from "./7.png"
import imageEight from "./8.png"
import imageNine from "./9.png"
import imageTen from "./10.png"
import izquierda from "./FLECHAIZQ.png";
import derecha from "./FLECHADER.png";



const MyCarousel = () => (
  <Carousel plugins={['arrows']}>
    <img src={imageOne} className="imageOne"/>
    <img src={imageTwo} className="imageTwo"/>
    <img src={imageThree} className="imageThree"/>
    <img src={imageFour} className="imageFour"/>
    <img src={imageFive} className="imageFive"/>
    <img src={imageSix} className="imageSix"/>
    <img src={imageSeven} className="imageSeven"/>
    <img src={imageEight} className="imageEight"/>
    <img src={imageNine} className="imageNine"/>
    <img src={imageTen} className="imageTen"/>
  </Carousel>
);

function App() {
  return (
    <div className="App-header">
      <MyCarousel></MyCarousel>
    </div>
  );
}

export default App;
