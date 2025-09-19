"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { BackgroundBeamsWithCollisionDemo } from "@/components/BackgroundBeamsWithCollisionDemo";
import { BentoGridSecondDemo } from "../components/BentoGridSecondDemo";
import { StickyScrollRevealDemo } from "../components/StickyScrollRevealDemo";

export function HeroSection() {
  return (
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
        <StickyScrollRevealDemo />
      </div>
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
