"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { NavBarItem } from "@/components/navbar";
import PersonalIntro from "@/components/PersonalIntro";
import  ExperienceTimeline  from "@/components/TimelineDemo";
import GitHubActivity from "@/components/GithubStats";
import FavouriteTools from "@/components/FavouriteTools";
import SuccessCard from "@/components/SuccessCard";
import SpotifyCardProps from "@/components/SpotifyCard";
import Footer from "@/components/Footer";
import  Tool  from "@/components/tools";


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
          <ExperienceTimeline />
        </div>
        <div>
          <GitHubActivity username="Atulkumarjha" />
        </div>
        <div className="mt-50"><Tool /></div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
