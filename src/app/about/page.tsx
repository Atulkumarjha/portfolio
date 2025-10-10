"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { NavBarItem } from "@/components/navbar";
import PersonalIntro from "@/components/PersonalIntro";
import ExperienceTimeline from "@/components/TimelineDemo";
import GitHubActivity from "@/components/GithubStats";
import Footer from "@/components/Footer";
import Tool from "@/components/tools";
import { SectionWrapper } from "@/components/layout/PageContainer";


export default function About() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-black text-white">
      <ShootingStars className="pointer-events-none" />
      <StarsBackground className="pointer-events-none" />
      <NavBarItem />

      <main className="relative z-10 flex flex-col gap-16 pt-32">
        <SectionWrapper>
          <PersonalIntro />
        </SectionWrapper>

        <SectionWrapper>
          <ExperienceTimeline />
        </SectionWrapper>

        <SectionWrapper>
          <GitHubActivity username="Atulkumarjha" />
        </SectionWrapper>

        <SectionWrapper>
          <Tool />
        </SectionWrapper>
      </main>

      <Footer />
    </div>
  );
}
