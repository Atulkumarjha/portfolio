"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { BackgroundBeamsWithCollisionDemo } from "@/components/BackgroundBeamsWithCollisionDemo";
import { BentoGridSecondDemo } from "../components/BentoGridSecondDemo";
import { FeaturedWork } from "./FeaturedCard";
import TechStack from "../components/TechStack";
import { DirectionAwareHoverDemo } from "../components/DirectionAwareHoverDemo";
import FavouriteTools from "../components/favouriteTools";

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
        <FeaturedWork />
      </div>
      {/*Tech-stack div*/}
      <div>
        <TechStack />
      </div>
      {/*About Me div*/}
      <div className="flex">
        <div className="w-100 mt-25">
          <p>KNOW ABOUT ME</p>
          <p>Full-Stack Developer | Creator | Problem Solver</p>
          <p>
            Hey, I'm Atul Kumar Jha—a full-stack developer who loves turning
            ideas into sleek, powerful web experiences. Whether it's React,
            Next.js, or Node.js, I enjoy crafting clean, scalable solutions that
            just work. I'm not just about code—I'm about curiosity. Always
            learning, experimenting, and pushing boundaries to see what's
            possible. When I'm not building, you'll find me exploring fresh
            ideas, chasing inspiration, and keeping life balanced.I believe
            every day is a chance to create something meaningful—and I wake up
            ready to make it happen.
          </p>
        </div>
        <div className="w-100">
          <DirectionAwareHoverDemo />
        </div>
      </div>
      {/*Testinomials div*/}
      <div className="flex flex-col">
        <div className="">
          <FavouriteTools />
        </div>
        <div className=""></div>
        <div className=""></div>
      </div>
      {/*Let me know  div*/}
      <div></div>
      {/*Footer div*/}
      <div></div>
    </div>
  );
}
