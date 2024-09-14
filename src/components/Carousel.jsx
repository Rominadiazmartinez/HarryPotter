import { useState } from "react";

const images = [
    '../../public/img/Hogwarts4.png',
    '../../public/img/hogwarts1.jpg',
    '../../public/img/Hogwarts2.jpg',
    '../../public/img/Hogwarts3.jpg'
    
    
  ];
  
  export const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    // Función para avanzar al siguiente slide
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    // Función para retroceder al slide anterior
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  
    return (
      <div className="relative overflow-hidden p-0 "
      >

        <div
          className="flex transition-transform duration-300 ease-in-out p-0  "
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index}`}
              className=" h-[470px]  object-cover rounded-xl"
            />
          ))}
        </div>

        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg focus:outline-none"
        >
          &lt;
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg focus:outline-none"
        >
          &gt;
        </button>
      </div>
    );
  };