import React, { useState, useEffect } from 'react';
import { Linkedin, Github, Twitter } from 'lucide-react';

interface ImageData {
  src: string;
  alt: string;
  title: string;
}

const PersonalIntro: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start with middle image (travel)

  const images: ImageData[] = [
    {
      src: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Coding image",
      title: "I Code"
    },
    {
      src: "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Travel image", 
      title: "I Travel"
    },
    {
      src: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Fitness image",
      title: "I Train"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const getImageStyle = (index: number) => {
    const position = (index - currentIndex + images.length) % images.length;
    
    switch (position) {
      case 0: // Left image
        return {
          left: '5%',
          transform: 'translateX(-50%) perspective(1000px) rotateY(45deg) scale(0.85)',
          zIndex: 1,
          filter: 'brightness(0.7)',
        };
      case 1: // Center image
        return {
          left: '50%',
          transform: 'translateX(-50%) perspective(1000px) scale(1)',
          zIndex: 3,
          filter: 'brightness(1)',
        };
      case 2: // Right image
        return {
          left: '95%',
          transform: 'translateX(-50%) perspective(1000px) rotateY(-45deg) scale(0.85)',
          zIndex: 1,
          filter: 'brightness(0.7)',
        };
      default:
        return {
          left: '50%',
          transform: 'translateX(-50%) perspective(1000px) scale(0)',
          zIndex: 0,
          filter: 'brightness(0.5)',
        };
    }
  };

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col items-center justify-between lg:flex-row min-h-screen">
      {/* Text Content */}
      <div className="relative z-5 mx-auto flex max-w-xl flex-col gap-y-8 text-center text-base font-light tracking-wider text-black/80 lg:mx-0 lg:max-w-[550px] lg:text-left lg:text-lg dark:text-neutral-300">
        <div className="space-y-6">
          <p className="leading-relaxed">
            I'm Atul Kumar Jha, a proactive full-stack developer passionate about creating dynamic web experiences. From frontend to backend, I thrive on solving complex problems with clean, efficient code. My expertise spans React, Next.js, and Node.js, and I'm always eager to learn more.
          </p>
          <p className="leading-relaxed">
            When I'm not immersed in work, I'm exploring new ideas and staying curious. Life's about balance, and I love embracing every part of it.
          </p>
          <p className="leading-relaxed font-medium">
            I believe in waking up each day eager to make a difference!
          </p>
        </div>
        
        {/* Social Links */}
        <div className="flex gap-4 mx-auto -mt-4 w-fit lg:mx-0">
          <a
            href="https://linkedin.com/in/iaayushbharti"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-2 text-neutral-900 dark:text-neutral-300 transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <Linkedin 
              size={20} 
              className="transition-transform group-hover:scale-110" 
            />
          </a>
          <a
            href="https://github.com/aayushbharti"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-2 text-neutral-900 dark:text-neutral-300 transition-all duration-300 hover:text-gray-700 dark:hover:text-gray-100 hover:scale-110"
            aria-label="GitHub Profile"
          >
            <Github 
              size={20} 
              className="transition-transform group-hover:scale-110" 
            />
          </a>
          <a
            href="https://x.com/iaayushbharti"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-2 text-neutral-900 dark:text-neutral-300 transition-all duration-300 hover:text-sky-500 dark:hover:text-sky-400 hover:scale-110"
            aria-label="Twitter Profile"
          >
            <Twitter 
              size={20} 
              className="transition-transform group-hover:scale-110" 
            />
          </a>
        </div>
      </div>

      {/* 3D Image Carousel */}
      <div className="relative flex h-[350px] w-full max-w-[200px] flex-col items-center justify-center max-lg:mt-12 lg:h-[450px] lg:max-w-[270px] cursor-grab active:cursor-grabbing lg:me-20">
        <div className="relative h-full w-full">
          {images.map((image, index) => (
            <div
              key={index}
              className="absolute transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] rounded-3xl shadow-[rgba(0,0,0,0.5)_0px_10px_30px] cursor-pointer hover:shadow-[rgba(0,0,0,0.6)_0px_15px_40px]"
              style={getImageStyle(index)}
              onClick={() => handleImageClick(index)}
            >
              <div className="relative aspect-[4/5] w-[220px] lg:w-[300px]">
                <img
                  alt={image.alt}
                  draggable="false"
                  className="rounded-3xl object-cover w-full h-full transition-all duration-300"
                  src={image.src}
                />
              </div>
            </div>
          ))}
        </div>
        
        {/* Dynamic Title */}
        <h3 className="text-center text-2xl font-light mt-8 transition-opacity duration-500 text-gray-800 dark:text-gray-200">
          {images[currentIndex]?.title}
        </h3>

        {/* Pagination Dots */}
        <div className="flex gap-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleImageClick(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-blue-600 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalIntro;