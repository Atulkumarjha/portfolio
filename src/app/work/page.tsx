"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { NavBarItem } from "@/components/navbar";
import { FeaturedWork } from "@/components/FeaturedCard";
import Footer from "@/components/Footer";


export default function Work() {
  return (<>
    <div className="h-full rounded-md bg-black flex flex-col items-center justify-center relative w-full">
      <ShootingStars className="z-0" />
      <StarsBackground className="z-0" />
      <NavBarItem />
       <div className="h-full">
              <FeaturedWork />
            </div>
    </div>
    <div><Footer /></div>
  </>
  )
}
