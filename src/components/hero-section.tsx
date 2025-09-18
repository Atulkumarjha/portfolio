"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { BackgroundBeamsWithCollisionDemo } from "@/components/BackgroundBeamsWithCollisionDemo";
import { BentoGridSecondDemo } from "@/components/BentoGridSecondDemo"

export function HeroSection() {
  return (
    <div className="h-full rounded-md bg-black flex flex-col items-center justify-center relative w-full">
      <ShootingStars className="z-0" />
      <StarsBackground className="z-0" />
      {/*Introductory div*/}
      <div className="bg-black mt-22.5 h-110 w-200">         
        <BackgroundBeamsWithCollisionDemo />
      </div>
      {/*Bento-Grid div*/}
      <div className=" bg-black h-175 w-full">
        <BentoGridSecondDemo />
      </div>
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
    </div>
    );
}
