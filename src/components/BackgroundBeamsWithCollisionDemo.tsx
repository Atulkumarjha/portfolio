"use client";

import React, { useState } from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Check, Copy, Mail, Github, Star } from "lucide-react";

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
        <button className="">hello atul</button>
        <div className="flex flex-col items-center">
       

          <div className="flex flex-row items-center gap-6">
            {/* GitHub Button with Gradient Border */}
            <button
              onClick={() =>
                window.open("https://github.com/yourusername", "_blank")
              }
              className="p-[3px] relative flex items-center gap-2"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg" />
              <div className="px-6 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent flex items-center gap-2">
                <Github className="w-5 h-5" />
                GitHub
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
