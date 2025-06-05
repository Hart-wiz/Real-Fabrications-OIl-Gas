import { useState, useEffect } from "react";

const ImageSlider = ({ images, article, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full max-w-full h-screen mx-auto overflow-hidden shadow-md ">
      {/* <div className="w-screen h-screen bg-red-500/50 absolute"></div> */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="w-full h-full object-cover transition duration-500 ease-in-out"
      />

      {/* Article text overlay */}
      {article && (
        <div className="absolute inset-0 flex items-center justify-center text-center bg-black/60 text-white rounded-md max-w-screen mx-auto gap-9">
          <h2 className="font-extrabold text-4xl md:text-6xl max-md:text-4xl">
            REAL FABRICATIONS
            <p className="text-2xl"> OIL & GAS</p>
            <p className=" text-sm px-70 text-center max-md:px-6">
              {article[currentIndex]}
            </p>
          </h2>
        </div>
      )}

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-2 text-5xl"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-2 text-5xl"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
