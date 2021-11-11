import "./App.css";
import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import imageOne from "./1.png";
import imageTwo from "./2.png";
import imageThree from "./3.png";
import imageFour from "./4.png";
import imageFive from "./5.png";
import imageSix from "./6.png";
import imageSeven from "./7.png";
import imageEight from "./8.png";
import imageNine from "./9.png";
import imageTen from "./10.png";
import izquierda from "./FLECHAIZQ.png";
import derecha from "./FLECHADER.png";

const listaDeImagenes = [
  { src: imageOne, className: "imageOne" },
  { src: imageTwo, className: "imageTwo" },
  { src: imageThree, className: "imageThree" },
  { src: imageFour, className: "imageFour" },
  { src: imageFive, className: "imageFive" },
  { src: imageSix, className: "imageSix" },
  { src: imageSeven, className: "imageSeven" },
  { src: imageEight, className: "imageEight" },
  { src: imageNine, className: "imageNine" },
  { src: imageTen, className: "imageTen" },
];

const MyCarousel = () => (
  <Carousel plugins={["arrows"]}>
    {listaDeImagenes.map(({ src, className }) => (
      <img src={src} className={className} />
    ))}
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
