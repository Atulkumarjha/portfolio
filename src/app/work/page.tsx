"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { NavBarItem } from "@/components/navbar";
import { FeaturedWork } from "@/components/FeaturedCard";
import { FaArrowCircleRight } from "react-icons/fa";
import TechStack from "@/components/TechStack";
import { SectionWrapper } from "@/components/layout/PageContainer";
import Footer from "@/components/Footer";

export default function Work() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-black text-white">
      <ShootingStars className="pointer-events-none" />
      <StarsBackground className="pointer-events-none" />
      <NavBarItem />

      <main className="relative z-10 flex flex-1 flex-col gap-16 pt-24 md:pt-32">
        <SectionWrapper>
          <FeaturedWork />
        </SectionWrapper>

        <SectionWrapper>
          <TechStack />
        </SectionWrapper>

        <SectionWrapper>
          <a
            href="https://github.com/Atulkumarjha"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-lg font-semibold text-purple-300 transition hover:text-purple-200"
          >
            Want to see more works
            <FaArrowCircleRight />
          </a>
        </SectionWrapper>
      </main>

      <Footer />
    </div>
  );
}
