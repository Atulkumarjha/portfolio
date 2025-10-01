"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { NavBarItem } from "@/components/navbar";
import { FeaturedWork } from "@/components/FeaturedCard";
import { FaArrowCircleRight } from "react-icons/fa";
import TechStack from "@/components/TechStack";


import Footer from "@/components/Footer";

export default function Work() {
  return (
    <>
      <div className="h-full rounded-md bg-black flex flex-col items-center justify-center relative w-full">
        <ShootingStars className="z-0" />
        <StarsBackground className="z-0" />
        <NavBarItem />
        <div className="h-full">
          <FeaturedWork />
        </div>
        <a
          href="https://github.com/Atulkumarjha"
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 text-purple-400 hover:text-purple-300 mt-10"
        >
          <span className="font-bold text-xl text-white flex flex-row gap-3 items-center">
            Want to see more works <FaArrowCircleRight />
          </span>
        </a>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
