"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { Home, User, Briefcase, FileText, Menu } from "lucide-react";

export function NavBarWrapper() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", url: "/", icon: Home },
    { name: "About", url: "/about", icon: User },
    { name: "Work", url: "/work", icon: Briefcase },
    { name: "More", url: "/more", icon: FileText },
    { name: "Book a call", url: "/", icon: User },
  ];

  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl flex items-center justify-between px-4 py-3  rounded-lg z-[9999]">
      {/* Left: Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/assets/atulkumarjha.jpg"
          alt="Logo"
          width={30}
          height={30}
          className="cursor-pointer rounded-full"
        />
      </Link>

      {/* Center: Navbar */}
      <div className="flex-1 flex justify-center">
        <NavBar items={navItems} />
      </div>

      {/* Right: Menu button */}
      <div className="flex items-center justify-end relative">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded-md hover:bg-white/10 transition"
        >
          <Menu size={28} className="text-white" />
        </button>

        {/* Dropdown menu */}
        {menuOpen && (
          <div className="absolute top-full right-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg p-4 space-y-2 z-50">
            <Link
              href="#"
              className="block px-3 py-2 rounded-md hover:bg-muted transition"
            >
              Profile
            </Link>
            <Link
              href="#"
              className="block px-3 py-2 rounded-md hover:bg-muted transition"
            >
              Settings
            </Link>
            <Link
              href="#"
              className="block px-3 py-2 rounded-md hover:bg-muted transition"
            >
              Logout
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

// ✅ Optional wrapper export
export function NavBarItem() {
  return <NavBarWrapper />;
}
