"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { BackgroundBeamsWithCollisionDemo } from "@/components/BackgroundBeamsWithCollisionDemo";
import { BentoGridSecondDemo } from "../components/BentoGridSecondDemo";
import { FeaturedWork } from "./FeaturedCard";
import TechStack from "../components/TechStack";
import { DirectionAwareHoverDemo } from "../components/DirectionAwareHoverDemo";
import FavouriteTools from "../components/FavouriteTools";
import SuccessCard from "../components/SuccessCard";
import  SpotifyCardProps  from "../components/SpotifyCard"
import  Footer  from "../components/Footer"; 
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import  Tool  from "@/components/tools";


export function HeroSection() {
  return (
    <>
    <div className="h-full rounded-md bg-black flex flex-col items-center justify-center relative w-full">
      <ShootingStars className="z-0" />
      <StarsBackground className="z-0" />
      {/*Introductory div*/}
      <div className="bg-black mt-22.5 h-125 ">
        <BackgroundBeamsWithCollisionDemo />
      </div>
      {/*Bento-Grid div*/}
      <div className="w-[100]">
        <BentoGridSecondDemo />
      </div>
      {/*Curate Projects  div*/}
      <div className="h-full">
        <FeaturedWork />
      </div>
      {/*Tech-stack div*/}
      <div>
        <TechStack />
      </div>
      {/*About Me div*/}
      <div className="mb-50 flex w-full items-center justify-center">
        <div className="w-full md:w-1/4 flex flex-col justify-center">
    <h2
      style={{
        textShadow:
          "0px 4px 8px rgba(255,255,255,.05),0px 8px 30px rgba(255,255,255,.25)",
      }}
      className="relative z-2 mb-8 text-4xl font-medium tracking-tight text-left sm:text-5xl md:mb-12 md:text-6xl"
    >
      <p className="mb-3 text-xs font-normal tracking-widest text-black/80 uppercase md:text-sm dark:text-white/70">
        Know About Me
      </p>
      <span className="font-serif">
        <span className="text-5xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x font-serif pe-2 tracking-tight italic">
          Full-Stack
        </span>
        <span className="text-4xl">Creator | Designer | Programmer | Innovator & Developer</span>{" "}
      </span>
    </h2>
    <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed text-left">
  Hey, I'm Atul Kumar Jha<br />A full-stack developer who loves turning ideas
  into sleek, powerful web experiences. Whether it's React, Next.js, or
  Node.js, I enjoy crafting clean, scalable solutions that just work. I'm
  not just about code—I'm about curiosity. Always learning, experimenting,
  and pushing boundaries to see what's possible.<br />When I'm not building,
  you'll find me exploring fresh ideas, chasing inspiration, and keeping
  life balanced.<br />I believe every day is a chance to create something
  meaningful—and I wake up ready to make it happen.
</p>
<div className="mt-6 flex gap-6 z-50 relative">
  <a
    href="https://www.linkedin.com/in/atul-kumar-jha-09535b233/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-12 h-12 rounded-full transition-colors"
    style={{ pointerEvents: "auto" }}
  >
    <FaLinkedin size={20} className="text-gray-700 dark:text-gray-300 hover:text-white" />
  </a>

  <a
    href="https://github.com/Atulkumarjha"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-12 h-12 rounded-full  transition-colors"
    style={{ pointerEvents: "auto" }}
  >
    <FaGithub size={20} className="text-gray-700 dark:text-gray-300 hover:text-white" />
  </a>

  <a
    href="https://x.com/atul_kumar_jha"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-12 h-12 rounded-full transition-colors"
    style={{ pointerEvents: "auto" }}
  >
    <FaTwitter size={20} className="text-gray-700 dark:text-gray-300 hover:text-white" />
  </a>
</div>
  </div>
        <div>
          <DirectionAwareHoverDemo />
        </div>
      </div>
      {/*Testinomials div*/}
    
  {/* Container title */}


  {/* Components row */}
  <div><Tool /></div>

      {/*Footer div*/}
      
    </div>
    <div><Footer /></div>
    </>
  );
}
 