import React from 'react';
import { ArrowRight, Twitter, Github, Linkedin, Instagram, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Dark textured background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
        <svg width="100%" height="100%" className="h-full w-full">
          <defs>
            <pattern id="waves" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <path d="M0 100c50-30 100-30 150 0s100 30 150 0v100H0z" 
                    fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
              <path d="M0 150c50-20 100-20 150 0s100 20 150 0v50H0z" 
                    fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#waves)"/>
        </svg>
      </div>

      <div className="relative">
        {/* Hero Section */}
        <div className="text-center py-24 px-6">
          {/* Logo */}
          <div className="mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-8 relative">
              <span className="text-2xl font-bold text-white">AB</span>
              {/* Decorative elements around logo */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border border-gray-600 rounded-full opacity-30"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border border-gray-600 rounded-full opacity-20"></div>
            </div>
          </div>

          {/* Main Heading */}
          <div className="max-w-5xl mx-auto mb-12">
            <h2 className="text-5xl md:text-7xl font-light mb-4 tracking-wide">
              FROM CONCEPT TO <span className="font-bold">CREATION</span>
            </h2>
            <div className="flex items-center justify-center gap-6 text-4xl md:text-6xl font-light flex-wrap">
              <span>LET's MAKE IT</span>
              <span className="font-bold">HAPPEN!</span>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full border-2 border-blue-400 relative">
                <span className="text-sm font-bold">WOW</span>
                <div className="absolute inset-0 rounded-full border-2 border-blue-300 animate-ping opacity-20"></div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="inline-flex items-center gap-4 bg-gray-800/80 hover:bg-gray-700/80 backdrop-blur-sm px-10 py-5 rounded-full transition-all duration-300 group mb-16 border border-gray-700/50">
            <span className="text-xl">Get In Touch</span>
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-4 h-4 text-black" />
            </div>
          </button>

          {/* Description */}
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-2xl font-medium text-gray-200">
              I'm available for full-time roles & freelance projects.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              I thrive on crafting dynamic web applications, and<br />
              delivering seamless user experiences.
            </p>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="border-t border-gray-800/50 px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
              {/* Brand */}
              <div className="md:col-span-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-lg font-bold">AB</span>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  I'm Aayush - a full-stack developer,<br />
                  freelancer & problem solver. Thanks<br />
                  for checking out my site!
                </p>
              </div>

              {/* General */}
              <div>
                <h3 className="text-xl font-semibold mb-8 text-gray-200">General</h3>
                <ul className="space-y-5">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-lg">Home</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-lg">About</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-lg">Projects</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-lg">Blog</a></li>
                </ul>
              </div>

              {/* Specifics */}
              <div>
                <h3 className="text-xl font-semibold mb-8 text-gray-200">Specifics</h3>
                <ul className="space-y-5">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-lg">Guest Book</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-lg">Bucket List</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-lg">Uses</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-lg">Attribution</a></li>
                </ul>
              </div>

              {/* More */}
              <div>
                <h3 className="text-xl font-semibold mb-8 text-gray-200">More</h3>
                <ul className="space-y-5">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-lg">Book a call</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-lg">Links</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-lg">RSS</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50 px-6 py-10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-sm text-gray-500 order-2 md:order-1">
              © 2025 Aayush Bharti. All rights reserved · 
              <a href="#" className="ml-2 hover:text-gray-300 transition-colors">Privacy Policy</a> · 
              <a href="#" className="ml-2 hover:text-gray-300 transition-colors">Terms & Conditions</a>
            </div>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3 order-1 md:order-2">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800/60 border border-gray-700/50 flex items-center justify-center hover:bg-gray-700/60 hover:border-gray-600/50 transition-all duration-300">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800/60 border border-gray-700/50 flex items-center justify-center hover:bg-gray-700/60 hover:border-gray-600/50 transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800/60 border border-gray-700/50 flex items-center justify-center hover:bg-gray-700/60 hover:border-gray-600/50 transition-all duration-300">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800/60 border border-gray-700/50 flex items-center justify-center hover:bg-gray-700/60 hover:border-gray-600/50 transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800/60 border border-gray-700/50 flex items-center justify-center hover:bg-gray-700/60 hover:border-gray-600/50 transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;