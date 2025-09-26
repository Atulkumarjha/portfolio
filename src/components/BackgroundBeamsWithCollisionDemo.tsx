"use client";

import React, { useState } from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Check, Copy, Mail } from "lucide-react";
import ConnectDrawer from "@/components/BottomDrawer"; 

interface BackgroundBeamsWithCollisionDemoProps {
  className?: string;
}

export function BackgroundBeamsWithCollisionDemo({
  className,
}: BackgroundBeamsWithCollisionDemoProps) {
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
    <div className="h-125">
      <BackgroundBeamsWithCollision>
        {/* Resume Button */}
        <button
          onClick={() => window.open("/atul_resume.pdf", "_blank")}
          className="bg-slate-800 mt-10 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block"
        >
          {/* ... resume button inner code ... */}
        </button>

        {/* Heading */}
        <div className="flex flex-col items-center text-center font-bold text-4xl">
          <div className="mb-2 bg-gradient-to-b from-white via-gray-400 to-gray-700 bg-clip-text text-transparent">
            From imagination to execution
          </div>
          <div className="bg-gradient-to-b from-white via-gray-400 to-gray-700 bg-clip-text text-transparent">
            I code seamless digital experiences.
          </div>
        </div>

        {/* Intro Section */}
        <div className="flex flex-row mb-7 mt-2">
          <div className="mt-1 bg-gradient-to-b from-white via-gray-400 to-gray-700 bg-clip-text text-transparent">
            Hi Everyone, I'm Atul Kr. Jha
          </div>
          <div>
            <img
              src="/assets/atulkumarjha.jpg"
              alt="Divider"
              className="w-15 h-8 mx-2 rounded-full"
            />
          </div>
          <div className="mt-1 bg-gradient-to-b from-white via-gray-400 to-gray-700 bg-clip-text text-transparent">
            A Full Stack Developer
          </div>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col items-center ml-6">
          <div className="flex flex-row items-center gap-6">
            {/* Let's Connect Button */}
            <button
              onClick={() => setDrawerOpen(true)}
              className="p-[3px] relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                Let's Connect
              </div>
            </button>

            {/* Copy Email Button */}
            <button
              onClick={copyEmail}
              className="px-6 py-2 bg-black rounded-[6px] text-white flex items-center gap-2 hover:bg-neutral-800 transition"
            >
              <Mail className="w-5 h-5" />
              {email}
              <Copy className="w-5 h-5 opacity-70 hover:opacity-100 transition" />
            </button>
          </div>
        </div>

        {/* Drawer Component */}
        <ConnectDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />

        {/* Copied Toast */}
        {copied && (
          <div className="fixed bottom-5 right-5 bg-neutral-900 text-white p-4 rounded-xl shadow-lg flex items-center gap-3 animate-slide-up font-bold text-xs">
            <Check className="w-5 h-5 text-green-400" />
            <div className="flex flex-col">
              <span>Copied to clipboard!</span>
              <span>Email address copied successfully</span>
            </div>
            <button
              onClick={() => (window.location.href = `mailto:${email}`)}
              className="bg-indigo-600 hover:bg-indigo-700 px-3 rounded-sm text-xs mt-1 h-6"
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
