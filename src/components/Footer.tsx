import React, { useState } from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import ConnectDrawer from "@/components/BottomDrawer";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { Icon: FaDiscord, url: "https://discord.com/users/1067672509677322282" },
    { Icon: Github, url: "https://github.com/Atulkumarjha" },
    { Icon: Linkedin, url: "https://www.linkedin.com/in/atul-kumar-jha-09535b233/" },
    { Icon: Twitter, url: "https://x.com/atul_kumar_jha" },
  ];

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
        <svg width="100%" height="100%" className="h-full w-full">
          <defs>
            <pattern
              id="waves"
              x="0"
              y="0"
              width="200"
              height="200"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 100c50-30 100-30 150 0s100 30 150 0v100H0z"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                opacity="0.3"
              />
              <path
                d="M0 150c50-20 100-20 150 0s100 20 150 0v50H0z"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.3"
                opacity="0.2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#waves)" />
        </svg>
      </div>

      <div className="relative">
        {/* Hero Section */}
        <div className="mt-40 text-center py-24 px-6 space-y-10">
          {/* Logo */}
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold relative">
              <img className="rounded-full" src="/assets/atulkumarjha2.jpg" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-6xl font-light tracking-wide leading-tight">
            CODE. CREATE. <span className="font-bold">CONQUER.</span>
          </h2>
          <div className="text-6xl flex items-center justify-center gap-6 flex-wrap  font-light">
            <span>Let’s build </span>
            <span className="font-bold">unforgettable!</span>
          </div>

          {/* CTA */}

          <button onClick={() => setIsOpen(true)}
           className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
              Get In Touch
            </div>
          </button>

          {/* Drawer */}
          <ConnectDrawer open={isOpen} onClose={() => setIsOpen(false)} />

          {/* Description */}
          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-xl md:text-2xl font-medium text-gray-200">
              I’m available for full-time roles & freelance projects.
            </p>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed">
              I build dynamic web applications that blend performance with seamless user experiences.
            </p>
          </div>
        </div>

        {/* Links Section */}
        <div className="border-t border-gray-800/50 px-6 py-16">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
            {/* Brand */}
            <div className="space-y-4 col-span-2 md:col-span-1">
              <div className="flex justify-center md:justify-start items-center gap-3">
                <div className="w-12 h-12  rounded-full flex items-center justify-center font-bold text-lg">
                 <img className="rounded-full" src="/assets/atulkumarjha2.jpg" />
                </div>
                <span className="font-semibold">Atul Kumar Jha</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Full-Stack Creator | Designer | Programmer | Innovator & Developer
              </p>
            </div>

            {/* General */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-200">
                General
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:text-white text-gray-400">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white text-gray-400">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white text-gray-400">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white text-gray-400">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Specifics */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-200">
                Specifics
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:text-white text-gray-400">
                    Guest Book
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white text-gray-400">
                    Bucket List
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white text-gray-400">
                    Uses
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white text-gray-400">
                    Attribution
                  </a>
                </li>
              </ul>
            </div>

            {/* More */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-200">More</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:text-white text-gray-400">
                    Book a Call
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white text-gray-400">
                    Links
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white text-gray-400">
                    RSS
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50 px-6 py-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs md:text-sm text-gray-500">
              © 2025 Atul Kumar Jha. All rights reserved ·{" "}
              <a href="#" className="hover:text-gray-300 ml-1">
                Privacy Policy
              </a>{" "}
              ·{" "}
              <a href="#" className="hover:text-gray-300 ml-1">
                Terms & Conditions
              </a>
            </p>
            <div className="flex items-center gap-3">
      {links.map(({ Icon, url }, i) => (
        <a
          key={i}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-full bg-gray-800/60 border border-gray-700/50 flex items-center justify-center hover:bg-gray-700/60 hover:border-gray-600/50 transition-all"
        >
          <Icon className="w-4 h-4" />
        </a>
      ))}
    </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
