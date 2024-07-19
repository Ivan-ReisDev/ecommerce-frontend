"use client";

import Image from "next/image";
import Banner1 from "../../public/banner1.png";
import Banner2 from "../../public/banner2.png";
import Banner3 from "../../public/banner3.png"
import { useEffect, useState } from "react";

const images = [Banner1, Banner2, Banner3];

export default function Carrossel() {
  const [currentImage, setCurrentImage] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prevImage => (prevImage + 1) % images.length);
    }, 5000); 

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setTranslateX(-100 * currentImage);
  }, [currentImage]);

  const handleNext = () => {
    setCurrentImage(prevImage => (prevImage + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage(prevImage => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full h-[500px] relative overflow-hidden">
      <div
        className="flex transition-transform duration-1000"
        style={{ transform: `translateX(${translateX}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full h-[500px] relative flex-shrink-0"
          >
            <Image
              src={image}
              alt={`Banner ${index + 1}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>

      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &#10095;
      </button>
    </div>
  );
}
