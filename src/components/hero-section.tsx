"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { BackgroundBeamsWithCollisionDemo } from "@/components/BackgroundBeamsWithCollisionDemo";

export function HeroSection() {
  return (
    <div className="h-screen rounded-md bg-black flex flex-col items-center justify-center relative w-full">
      <ShootingStars className="z-0" />
      <StarsBackground className="z-0" />
      {/*Introductory div*/}
      <div className="bg-black mt-22.5 h-250 w-200">    
        <BackgroundBeamsWithCollisionDemo />
      </div>
      {/*Bento-Grid div*/}
      <div></div>
      {/*Curate Projects  div*/}
      <div></div>
      {/*Tech-stack div*/}
      <div></div>
      {/*About Me div*/}
      <div></div>
      {/*Testinomials div*/}
      <div></div>
      {/*Let me know  div*/}
      <div></div>
      {/*Footer div*/}
      <div></div>
export function HeroSection() {
  return (
    <div className="h-screen rounded-md bg-neutral-900 flex flex-col items-center justify-center relative w-full">
      {/* <h2 className="relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">
        <span>Shooting Star</span>
        <span className="text-white text-lg font-thin">x</span>
        <span>Star Background</span>
      </h2> */}
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
