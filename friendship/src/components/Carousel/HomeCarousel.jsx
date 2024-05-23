import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const images = [
  "/src/assets/carousel-images/carousel-img-1.jpg",
  "/src/assets/carousel-images/carousel-img-2.jpg",
  "/src/assets/carousel-images/carousel-img-3.jpg",
];

export default function HomeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  HomeCarousel.propTypes = {
    className: PropTypes.string,
  };

  return (
    <div className="relative w-3/4 lg:w-1/2 mx-auto overflow-hidden rounded-3xl">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="min-w-full">
            <img src={image} alt={`Slide ${index + 1}`} className="w-full" />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="carousel-control-prev absolute top-1/2 left-0 transform -translate-y-1/2 bg-primary text-white p-2 rounded-e-lg"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="carousel-control-next absolute top-1/2 right-0 transform -translate-y-1/2 bg-primary text-white p-2 rounded-s-lg"
      >
        &gt;
      </button>
    </div>
  );
}
