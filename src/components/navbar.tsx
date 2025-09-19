"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Home, User, Briefcase, FileText, Menu } from "lucide-react"
import { NavBar } from "@/components/ui/tubelight-navbar"

export function NavBarItem() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", url: "#", icon: Home },
    { name: "About", url: "#", icon: User },
    { name: "Projects", url: "#", icon: Briefcase },
    { name: "Resume", url: "#", icon: FileText },
  ]

  return (
<header className="fixed top-0 left-1/2 -translate-x-1/2 w-210 pb-5 pt-5 flex items-center justify-between px-4 py-3 bg-black backdrop-blur-md  rounded-lg z-[9999]">
      {/* Left: Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.png"
          alt="Logo"
          width={40}
          height={40}
          className="cursor-pointer"
        />
      </Link>

      {/* Center: NavBar */}
      <div className="flex-1 flex justify-center ">
        <NavBar items={navItems} />
      </div>

      {/* Right: Hamburger (always visible) */}
      <div className="flex items-center justify-end">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded-md hover:bg-muted transition"
        >
          <Menu size={28} className="text-white" />
        </button>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-16 right-6 w-48 bg-background border border-border rounded-lg shadow-lg p-4 space-y-2">
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
  )
}