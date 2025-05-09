import React, { useEffect, useState } from 'react';

const images = [
  "https://cdn.prod.website-files.com/6703f7dfd15367738df51db0/6773d58f83a07071d66df2fc_AdobeStock_203086080.jpeg",
  "https://europecareers.in/wp-content/uploads/2022/04/nurse-title.jpg",
  "https://www.thesun.co.uk/wp-content/uploads/2017/02/nintchdbpict000302290929.jpg?strip=all&w=1920&h=1080&crop=1",
  "https://hips.hearstapps.com/womansday/assets/17/17/1493306152-gettyimages-629580242.jpg",
  "https://www.mkpartnair.com/app/uploads/main-qimg-43899fec1618693975b32ab41960bd17.jpeg",
  "https://bsfms.com/wp-content/uploads/2022/12/slider-1.jpg",
  "https://png.pngtree.com/background/20230426/original/pngtree-person-is-typing-on-on-a-computer-keyboard-in-a-dark-picture-image_2490669.jpg",
  "https://www.wanderly.us/blog/wp-content/uploads/2019/04/malenurses.jpg",
  "https://republicjetcenter.com/wp-content/uploads/2021/01/Realistic-photo-of-White-Luxur.jpg",
  "https://paladinsecurity.com/wp-content/uploads/2023/01/Nutrition-Tips.png",
 ];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full h-[400px] lg:h-[600px] overflow-hidden">
      {/* Image */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-full object-cover transition duration-700"
      />

      {/* Text Overlay - Changed to left alignment */}
      <div className="absolute inset-0 flex flex-col justify-center items-start text-white bg-black/40 px-8 lg:px-16">
          <div className='w-10/12 mx-auto '> 
        <h1 className='text-2xl lg:text-4xl mb-2'>AVIATION, DATA ENTRY</h1>
        <h2 className="text-2xl lg:text-4xl mb-2">WORDBOY, NURSING AND <br /> SECURITY JOB WITH</h2>
        <h2 className='text-2xl lg:text-5xl text-[#E2C072] mb-2'>FLYNET AVIATION</h2>
        <p className='pb-6 text-xl'>Safe, reliable, and comfortable Job solutions</p>
        <button className="bg-[#E2C072] text-black px-6 py-2 hover:bg-black hover:text-white transition">
          <a href="#book">GET A Job</a>
        </button>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full hover:bg-opacity-70"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full hover:bg-opacity-70"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${i === currentIndex ? 'bg-white' : 'bg-gray-500'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;