"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { NavBarItem } from "@/components/navbar";
import PersonalIntro from "@/components/PersonalIntro";
import { TimelineDemo } from "@/components/TimelineDemo";
import GitHubActivity from "@/components/GithubStats";
import FavouriteTools from "@/components/FavouriteTools";
import SuccessCard from "@/components/SuccessCard";
import SpotifyCardProps from "@/components/SpotifyCard";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <div className="h-full rounded-md bg-black flex flex-col items-center justify-center relative w-full">
        <ShootingStars className="z-0" />
        <StarsBackground className="z-0" />
        <NavBarItem />
        <div className="w-300">
          <PersonalIntro />
        </div>
        <div>
          <TimelineDemo />
        </div>
        <div>
          <GitHubActivity username="Atulkumarjha" />
        </div>
        <div className="flex justify-center items-start gap-8 w-full h-full">
          {/* Favourite Tools Container */}
          <div className="relative w-[440px] h-[280px] bg-gray-700 p-7">
            <FavouriteTools />
          </div>

          {/* Success Card Container */}
          <div className="relative w-[440px] h-[280px] bg-gray-700 flex items-center justify-center">
            <SuccessCard />
          </div>

          {/* Spotify Card Container */}
          <div className="relative w-[440px] h-[280px] bg-gray-700 flex items-center justify-center">
            <SpotifyCardProps />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
