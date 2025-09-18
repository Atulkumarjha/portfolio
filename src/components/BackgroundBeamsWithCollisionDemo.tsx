"use client";

import React, { useState } from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Check, Copy, Mail } from "lucide-react";


interface BackgroundBeamsWithCollisionDemoProps {
  className?: string;
}

export function BackgroundBeamsWithCollisionDemo({
  className,
}: BackgroundBeamsWithCollisionDemoProps) {
  const email = "jhaak301@gmail.com";
  const [copied, setCopied] = useState(false);

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
    <>
      {" "}
      <BackgroundBeamsWithCollision>
        <button
          onClick={() => window.open("assets/Atul_Kumar_Jha_CV.pdf", "_blank")}
          className="mt-10 bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block"
        >
          {" "}
          <span className="absolute inset-0 overflow-hidden rounded-full">
            {" "}
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />{" "}
          </span>{" "}
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
            {" "}
            <span> Click to checkout my CV </span>{" "}
            <svg
              fill="none"
              height="16"
              viewBox="0 0 24 24"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <path
                d="M10.75 8.75L14.25 12L10.75 15.25"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />{" "}
            </svg>{" "}
          </div>{" "}
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />{" "}
        </button>
        <div className="mt-4 flex flex-col text-center text-4xl italic font-bold bg-clip-text text-transparent bg-gradient-to-b from-white/80 via-white/60 to-white/80">
          <div className="mb-2">Turning complex problems</div>
          <div className="mb-4">into elegant code solutions.</div>
        </div>

        <div className="flex font-bold">
  <div className="mr-2 mt-2 bg-clip-text text-transparent bg-gradient-to-b from-white/80 via-white/60 to-white/80">
    Hello, I'm Atul Kr Jha
  </div>
  <div className="relative inline-block overflow-hidden rounded-full group w-[80px] h-[40px]">
    {/* Image */}
    <img
      src="/assets/atulkumarjha.jpg"
      alt="Atul Kumar Jha"
      className="object-cover transition-transform duration-500 group-hover:scale-105"
    />
  </div>
  <div className="ml-2 mt-2 bg-clip-text text-transparent bg-gradient-to-b from-white/80 via-white/60 to-white/80">
    A Full Stack Developer
  </div>
</div>


        <div className="flex flex-col items-center mt-4">
          <div className="flex flex-row items-center gap-6">
            {/* GitHub Button with Gradient Border */}
            <button className="ml-4 p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-5 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                Let's Connect 
              </div>
            </button>

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
    </>
  );
}
