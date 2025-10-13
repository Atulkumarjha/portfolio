"use client";

import { Home, User, Briefcase, FileText } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

export function NavBarItem() {
  const navItems = [
    { name: "Home", url: "/", icon: Home },
    { name: "About", url: "/about", icon: User },
    { name: "Work", url: "/work", icon: Briefcase },
    { name: "More", url: "/more", icon: FileText },
    { name: "Book a call", url: "/contact", icon: User },
  ];

  return <NavBar items={navItems} />;
}
