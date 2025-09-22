"use client";
import React from "react";
import { FaSpotify } from "react-icons/fa";
import { FaPlay, FaPause, FaStepBackward, FaStepForward } from "react-icons/fa";

interface SpotifyCardProps {
  song?: string;
  artist?: string;
  playlistUrl?: string;
}

const SpotifyCard: React.FC<SpotifyCardProps> = ({
  song = "Blinding Lights",
  artist = "The Weeknd",
  playlistUrl = "https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M",
}) => {
  return (
    <a
      href={playlistUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group block w-80 rounded-2xl bg-gradient-to-r from-green-400/80 via-green-600/80 to-green-800/80 p-[2px] shadow-lg hover:shadow-green-500/40 transition-all duration-500 hover:scale-105"
    >
      {/* Glowing border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400 to-green-700 opacity-40 blur-xl group-hover:opacity-70 transition duration-700 animate-pulse"></div>

      {/* Card */}
      <div className="relative flex flex-col gap-4 rounded-2xl bg-black/90 p-6 h-40 backdrop-blur-md overflow-hidden">
        {/* Header */}
        <div className="flex items-center gap-4">
          <FaSpotify className="text-green-400 text-5xl animate-bounce-slow drop-shadow-lg" />
          <div className="flex flex-col overflow-hidden">
            <span className="text-sm text-gray-400 tracking-wide">
              Currently Listening 🎧
            </span>
            <span className="text-lg font-bold text-white truncate group-hover:text-green-400 transition-colors duration-500">
              {song}
            </span>
            <span className="text-sm text-gray-300 truncate">{artist}</span>
          </div>
        </div>

        {/* Player controls (showcase only) */}
        <div className="flex justify-center items-center gap-6 mt-auto">
          <button className="text-gray-300 hover:text-green-400 transition-colors">
            <FaStepBackward size={18} />
          </button>
          <button className="text-white bg-green-500 p-2 rounded-full hover:bg-green-600 transition-colors">
            <FaPause size={16} />
          </button>
          <button className="text-gray-300 hover:text-green-400 transition-colors">
            <FaStepForward size={18} />
          </button>
        </div>
      </div>
    </a>
  );
};

export default SpotifyCard;
