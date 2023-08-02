"use client";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Carrossel = () => {
  const images = [
    "https://i.imgur.com/vMuLUFJ.jpg",
    "https://i.imgur.com/ZlMj7iK.jpg",
    "https://i.imgur.com/GomjTBa.jpg",
    "https://i.imgur.com/54Mgmpx.jpg",
    "https://i.imgur.com/8U5yCEb.jpg",
    "https://i.imgur.com/duS4BbL.jpg",
    "https://i.imgur.com/ciUJeQD.jpg",
    "https://i.imgur.com/HY4KakZ.jpg",
    "https://i.imgur.com/2NThVra.jpg",
    "https://i.imgur.com/XkDKBYu.jpg",
    "https://i.imgur.com/0ssIvfh.jpg",
    "https://i.imgur.com/ydiG7X4.jpg",
  ];

  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      centerMode={true}
      centerSlidePercentage={38}
    >
      {images.map((img, index: number) => {
        return (
          <div key={index}>
            <img src={img} alt="Imagem 1" />
          </div>
        );
      })}
    </Carousel>
  );
};
