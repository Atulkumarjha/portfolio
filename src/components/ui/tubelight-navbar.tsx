"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import ConnectDrawer from "@/components/BottomDrawer";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

const imageUrl1 = "/assets/atulkumarjha2.jpg";
const imageUrl2 = "/assets/atulkumarjha2.jpg";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name);
  const [isMobile, setIsMobile] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false); // state to control drawer

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div
        className={cn(
          "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-4",
          className
        )}
      >
        <div className="h-12 w-132 pl-2 flex items-center gap-3 bg-background/5 border border-border backdrop-blur-lg rounded-full shadow-lg">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.name;

            // 🔹 More (hover dropdown)
            if (item.name === "More") {
              return (
                <div key={item.name} className="relative group">
                  <button
                    type="button"
                    onMouseEnter={() => setActiveTab(item.name)}
                    className={cn(
                      "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                      "text-foreground/80 hover:text-primary",
                      isActive && "bg-muted text-primary"
                    )}
                  >
                    <span className="hidden md:inline">{item.name}</span>
                    <span className="md:hidden">
                      <Icon size={18} strokeWidth={2.5} />
                    </span>

                    {isActive && (
                      <motion.div
                        layoutId="lamp"
                        className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      >
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                          <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                          <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                          <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                        </div>
                      </motion.div>
                    )}
                  </button>

                  {/* Hover Dropdown */}
                  <div className="absolute top-full left-0 mt-2 w-[28rem] bg-background border border-border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transform transition-all duration-200 flex flex-row p-4 gap-4">
                    {/* Image Card 1 */}
                    <div className="relative w-28 h-28 rounded-lg overflow-hidden cursor-pointer group">
                      <img
                        src={imageUrl1}
                        alt="Image 1"
                        className="w-full h-full object-cover filter brightness-75 transition-all duration-300 transform group-hover:brightness-100 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-1">
                        <p className="font-bold text-sm">👋Hello There</p>
                        <p className="font-normal text-xs">
                          Thank you for visiting my site
                        </p>
                      </div>
                    </div>

                    {/* Image Card 2 */}
                    <div className="relative w-28 h-28 rounded-lg overflow-hidden cursor-pointer group">
                      <img
                        src={imageUrl2}
                        alt="Image 2"
                        className="w-full h-full object-cover filter brightness-75 transition-all duration-300 transform group-hover:brightness-100 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-1">
                        <p className="font-bold text-sm">👋Hello There</p>
                        <p className="font-normal text-xs">
                          Thank you for visiting my site
                        </p>
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col justify-center gap-2">
                      <Link
                        href="/projects"
                        className="block px-3 py-2 text-sm hover:bg-muted rounded"
                      >
                        Projects
                      </Link>
                      <Link

                        href="/services"
                        className="block px-3 py-2 text-sm hover:bg-muted rounded"
                      >
                        Services
                      </Link>
                      <Link
                        href="/contact"
                        className="block px-3 py-2 text-sm hover:bg-muted rounded"
                      >
                        Contact
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }

            // 🔹 Book a call (onClick opens drawer)
            if (item.name === "Book a call") {
              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setShowDrawer(true)}
                  className={cn(
                    "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors bg-[#272627]",
                    "text-foreground/80 hover:text-primary",
                    isActive && "bg-muted text-primary"
                  )}
                >
                  <span className="hidden md:inline">{item.name}</span>
                  <span className="md:hidden">
                    <Icon size={18} strokeWidth={2.5} />
                  </span>
                </button>
              );
            }

            // 🔹 Default nav items
            return (
              <Link
                key={item.name}
                href={item.url}
                onClick={() => setActiveTab(item.name)}
                className={cn(
                  "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                  "text-foreground/80 hover:text-primary",
                  isActive && "bg-muted text-primary"
                )}
              >
                <span className="hidden md:inline">{item.name}</span>
                <span className="md:hidden">
                  <Icon size={18} strokeWidth={2.5} />
                </span>
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                      <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                      <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                      <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                    </div>
                  </motion.div>
                )}
              </Link>
            );
          })}
        </div>
      </div>

      {/* 🔹 Render ConnectDrawer */}
      <ConnectDrawer open={showDrawer} onClose={() => setShowDrawer(false)} />
    </>
  );
}
