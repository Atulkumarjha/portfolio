"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { BackgroundBeamsWithCollisionDemo } from "@/components/BackgroundBeamsWithCollisionDemo";
import { BentoGridSecondDemo } from "../components/BentoGridSecondDemo";
import { FeaturedWork } from "./FeaturedCard";
import TechStack from "../components/TechStack";
import { DirectionAwareHoverDemo } from "../components/DirectionAwareHoverDemo";
import Footer from "../components/Footer";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import Tool from "@/components/tools";
import { SectionWrapper } from "@/components/layout/PageContainer";
import { NavBarItem } from "@/components/navbar";


export function HeroSection() {
  return (
    <>
      <div className="relative flex flex-col overflow-hidden bg-black text-white">
        <ShootingStars className="pointer-events-none" />
        <StarsBackground className="pointer-events-none" />
        <NavBarItem />

        <SectionWrapper
          className="relative z-10 pt-20 sm:pt-24 md:pt-28 lg:pt-32"
          containerClassName="flex flex-col gap-8 sm:gap-10 md:gap-12"
        >
          <BackgroundBeamsWithCollisionDemo />
        </SectionWrapper>

        <SectionWrapper className="relative z-10">
          <BentoGridSecondDemo />
        </SectionWrapper>

        <SectionWrapper className="relative z-10">
          <FeaturedWork />
        </SectionWrapper>

        <SectionWrapper className="relative z-10">
          <TechStack />
        </SectionWrapper>

        <SectionWrapper
          className="relative z-10"
          containerClassName="grid gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-12"
        >
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            <div>
              <p className="mb-2 sm:mb-3 text-xs font-semibold tracking-[0.35em] text-white/60">
                Know About Me
              </p>
              <h2
                style={{
                  textShadow:
                    "0px 4px 8px rgba(255,255,255,.05),0px 8px 30px rgba(255,255,255,.25)",
                }}
                className="relative z-10 font-serif text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
              >
                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                  Full-Stack
                </span>{" "}
                Creator · Designer · Programmer · Innovator & Developer
              </h2>
            </div>

            <p className="max-w-2xl text-sm text-gray-300 sm:text-base md:text-lg">
              Hey, I&apos;m Atul Kumar Jha — a full-stack developer who loves
              turning ideas into sleek, powerful web experiences. Whether it&apos;s
              React, Next.js, or Node.js, I enjoy crafting clean, scalable
              solutions that just work. Curiosity fuels my builds: I&apos;m always
              learning, experimenting, and pushing boundaries to see what&apos;s
              possible.
            </p>
            <p className="max-w-2xl text-sm text-gray-300 sm:text-base md:text-lg">
              When I&apos;m not building, you&apos;ll find me exploring fresh ideas,
              chasing inspiration, and keeping life balanced. Every day is a
              chance to create something meaningful—and I wake up ready to make
              it happen.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a
                href="https://www.linkedin.com/in/atul-kumar-jha-09535b233/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 transition hover:border-white/40 hover:bg-white/20"
              >
                <FaLinkedin size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
              <a
                href="https://github.com/Atulkumarjha"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 transition hover:border-white/40 hover:bg-white/20"
              >
                <FaGithub size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
              <a
                href="https://x.com/atul_kumar_jha"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 transition hover:border-white/40 hover:bg-white/20"
              >
                <FaTwitter size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-start">
            <DirectionAwareHoverDemo />
          </div>
        </SectionWrapper>

        <SectionWrapper className="relative z-10">
          <Tool />
        </SectionWrapper>
      </div>
      <Footer />
    </>
  );
}
 