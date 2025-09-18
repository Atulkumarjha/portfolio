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
    </div>
    );
}
