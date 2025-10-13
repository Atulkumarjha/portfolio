"use client";

import React, { useState } from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Check, Copy, Mail } from "lucide-react";
import ConnectDrawer from "@/components/BottomDrawer";
import { FaSquareArrowUpRight } from "react-icons/fa6";

export function BackgroundBeamsWithCollisionDemo() {
  const email = "jhaak301@gmail.com";
  const [copied, setCopied] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="w-full">
      <BackgroundBeamsWithCollision>
        {/* Resume Button */}
        <button
          onClick={() => window.open("/atul_resume.pdf", "_blank")}
          className="group relative mt-8 mb-6 inline-flex cursor-pointer items-center justify-center rounded-full bg-slate-800 p-px text-xs font-semibold leading-6 text-white shadow-2xl shadow-zinc-900 transition-colors duration-200 hover:bg-slate-700 sm:mt-12 sm:mb-8 md:mt-16 md:mb-10 lg:mt-20"
        >
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative z-10 flex items-center gap-2 rounded-full bg-zinc-950 py-1.5 px-3 ring-1 ring-white/10 sm:px-4 md:py-2 md:px-5">
            <span className="text-xs sm:text-sm md:text-base">Click to checkout my latest CV</span>
            <FaSquareArrowUpRight className="h-3 w-3 sm:h-4 sm:w-4" />
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </button>

        {/* Heading */}
        <div className="flex flex-col items-center px-4 text-center text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl sm:px-6 md:px-8">
          <div className="mb-2 bg-gradient-to-b from-white via-gray-400 to-gray-700 bg-clip-text text-transparent">
            From imagination to execution
          </div>
          <div className="bg-gradient-to-b from-white via-gray-400 to-gray-700 bg-clip-text text-transparent">
            I code seamless digital experiences.
          </div>
        </div>

        {/* Intro Section */}
        <div className="mb-6 mt-3 flex flex-col items-center gap-2 px-4 text-center text-sm font-medium sm:mb-7 sm:flex-row sm:gap-3 sm:text-base md:text-lg sm:px-6">
          <div className="bg-gradient-to-b from-white via-gray-400 to-gray-700 bg-clip-text text-transparent">
            Hi Everyone, I'm Atul Kr. Jha
          </div>
          <div>
            <img
              src="/assets/atulkumarjha.jpg"
              alt="Atul Kumar Jha portrait"
              className="mx-auto sm:mx-2 h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover shadow-sm ring-1 ring-white/20"
            />
          </div>
          <div className="bg-gradient-to-b from-white via-gray-400 to-gray-700 bg-clip-text text-transparent">
            A Full Stack Developer
          </div>
        </div>

        {/* Buttons Section */}
        <div className="flex w-full flex-col items-center gap-3 px-4 sm:px-6 md:px-8 md:gap-4">
          <div className="flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-3 md:gap-4 max-w-2xl">
            {/* Let's Connect Button */}
            <button
              onClick={() => setDrawerOpen(true)}
              className="relative w-full overflow-hidden rounded-lg p-[3px] sm:w-auto sm:min-w-[160px] md:min-w-[180px]"
            >
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500" />
              <div className="relative rounded-[6px] bg-black px-6 py-2 text-center text-sm font-semibold text-white transition duration-200 hover:bg-transparent sm:px-6 md:px-8 md:py-2.5">
                Let's Connect
              </div>
            </button>

            {/* Copy Email Button */}
            <button
              onClick={copyEmail}
              className="group flex w-full items-center justify-center gap-2 rounded-[6px] bg-black px-4 py-2 text-xs font-medium text-white transition hover:bg-neutral-800 sm:w-auto sm:text-sm md:px-6 md:py-2.5 md:text-base"
            >
              <Mail className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span className="truncate max-w-[200px] sm:max-w-none">{email}</span>
              <Copy className="h-4 w-4 sm:h-5 sm:w-5 opacity-70 transition group-hover:opacity-100 flex-shrink-0" />
            </button>
          </div>
        </div>

        {/* Drawer Component */}
        <ConnectDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />

        {/* Copied Toast */}
        {copied && (
          <div className="fixed bottom-4 left-4 right-4 sm:bottom-5 sm:left-auto sm:right-5 sm:max-w-md bg-neutral-900 text-white p-3 sm:p-4 rounded-xl shadow-lg flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 animate-slide-up font-bold text-xs z-50">
            <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
            <div className="flex flex-col flex-1 min-w-0">
              <span className="text-sm sm:text-base">Copied to clipboard!</span>
              <span className="text-xs text-gray-400 sm:text-sm">Email address copied successfully</span>
            </div>
            <button
              onClick={() => (window.location.href = `mailto:${email}`)}
              className="bg-indigo-600 hover:bg-indigo-700 px-3 py-1 rounded-sm text-xs h-7 whitespace-nowrap"
            >
              Send Mail
            </button>
          </div>
        )}

        <style jsx>{`
          .animate-slide-up {
            animation: slide-up 0.3s ease-out;
          }
          @keyframes slide-up {
            from {
              transform: translateY(20px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}</style>
      </BackgroundBeamsWithCollision>
    </div>
  );
}
