import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

interface ImageData {
  src: string;
  alt: string;
  title: string;
}

const PersonalIntro: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start with middle image

  const images: ImageData[] = [
    {
      src: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Coding image",
      title: "I Code",
    },
    {
      src: "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Travel image",
      title: "I Travel",
    },
    {
      src: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Fitness image",
      title: "I Train",
    },
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
          left: "5%",
          transform:
            "translateX(-50%) perspective(1000px) rotateY(45deg) scale(0.85)",
          zIndex: 1,
          filter: "brightness(0.7)",
        };
      case 1: // Center image
        return {
          left: "50%",
          transform: "translateX(-50%) perspective(1000px) scale(1)",
          zIndex: 3,
          filter: "brightness(1)",
        };
      case 2: // Right image
        return {
          left: "95%",
          transform:
            "translateX(-50%) perspective(1000px) rotateY(-45deg) scale(0.85)",
          zIndex: 1,
          filter: "brightness(0.7)",
        };
      default:
        return {
          left: "50%",
          transform: "translateX(-50%) perspective(1000px) scale(0)",
          zIndex: 0,
          filter: "brightness(0.5)",
        };
    }
  };

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between gap-8 sm:gap-10 md:gap-12 text-center lg:flex-row lg:items-center lg:text-left">
      {/* Text Content */}
      <div className="flex w-full flex-col justify-center gap-4 sm:gap-5 md:gap-6 px-4 sm:px-6 lg:w-1/2 lg:px-0">
        <h2
          style={{
            textShadow:
              "0px 4px 8px rgba(255,255,255,.05),0px 8px 30px rgba(255,255,255,.25)",
          }}
          className="relative z-2 text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
        >
          <p className="mb-2 sm:mb-2.5 md:mb-3 text-xs font-normal tracking-widest text-black/80 uppercase md:text-sm dark:text-white/70">
            More About Me
          </p>
          <span className="font-serif">
            <span className="text-4xl sm:text-5xl">I'm Atul Kumar Jha, a</span>{" "}
            <span className="text-4xl sm:text-5xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x font-serif pe-2 tracking-tight italic">
              <br />
              Full-Stack Developer
            </span>
          </span>
        </h2>
        <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg">
          I'm <b>Atul Kumar Jha</b>, a passionate full-stack developer driven to
          craft seamless, impactful web experiences.
          <br />
          From frontend design to backend architecture, I love solving complex
          challenges with clean, scalable solutions.
          <br />
          <br />
          My expertise lies in <b>React, Next.js, and Node.js</b>, and I’m
          constantly exploring new technologies to stay ahead of the curve.
          <br />
          Beyond coding, I enjoy experimenting with fresh ideas, staying
          curious, and finding balance in everything I do.
          <br />
          <br />
          Every day, I wake up with the mindset to{" "}
          <b>build, learn, and make a difference.</b>
        </p>

        {/* Social Links */}
        <div className="mt-1 sm:mt-1.5 md:mt-2 flex items-center justify-center gap-2 sm:gap-2.5 md:gap-3 lg:justify-start">
          <a
            href="https://www.linkedin.com/in/atul-kumar-jha-09535b233/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition hover:-translate-y-1 hover:border-white/40"
          >
            <FaLinkedin
              size={20}
              className="text-gray-700 dark:text-gray-300 hover:text-white"
            />
          </a>

          <a
            href="https://github.com/Atulkumarjha"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition hover:-translate-y-1 hover:border-white/40"
          >
            <FaGithub
              size={20}
              className="text-gray-700 dark:text-gray-300 hover:text-white"
            />
          </a>

          <a
            href="https://x.com/atul_kumar_jha"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition hover:-translate-y-1 hover:border-white/40"
          >
            <FaTwitter
              size={20}
              className="text-gray-700 dark:text-gray-300 hover:text-white"
            />
          </a>
        </div>
      </div>

      {/* 3D Image Carousel */}
      <div className="relative flex h-[180px] w-full max-w-[110px] flex-col items-center justify-center px-2 cursor-grab active:cursor-grabbing sm:h-[240px] sm:max-w-[150px] md:h-[320px] md:max-w-[220px] lg:h-[450px] lg:max-w-[270px] lg:px-0 lg:me-20">
        <div className="relative h-full w-full">
          {images.map((image, index) => (
            <div
              key={index}
              className="absolute transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] rounded-2xl sm:rounded-3xl shadow-[rgba(0,0,0,0.5)_0px_10px_30px] cursor-pointer hover:shadow-[rgba(0,0,0,0.6)_0px_15px_40px]"
              style={getImageStyle(index)}
              onClick={() => handleImageClick(index)}
            >
              <div className="relative aspect-[4/5] w-[100px] sm:w-[140px] md:w-[200px] lg:w-[300px]">
                <img
                  alt={image.alt}
                  draggable="false"
                  className="rounded-2xl sm:rounded-3xl object-cover w-full h-full transition-all duration-300"
                  src={image.src}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Title */}
        <h3 className="mt-2 sm:mt-3 md:mt-5 lg:mt-6 text-center text-sm font-light text-gray-800 transition-opacity duration-500 dark:text-gray-200 sm:text-base md:text-xl lg:text-2xl">
          {images[currentIndex]?.title}
        </h3>

        {/* Pagination Dots */}
        <div className="mt-1.5 sm:mt-2 md:mt-3 flex gap-1 sm:gap-1.5 md:gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleImageClick(index)}
              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-blue-600 scale-110 sm:scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
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
