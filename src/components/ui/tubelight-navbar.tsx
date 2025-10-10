"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import ConnectDrawer from "@/components/BottomDrawer";
import { usePathname } from "next/navigation";

const portrait = "/assets/atulkumarjha2.jpg";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

const moreLinks = [
  {
    eyebrow: "Community",
    title: "Guestbook",
    description: "Kind words from collaborators and a place to sign yours.",
    href: "/guestbook",
  },
  {
    eyebrow: "In motion",
    title: "Bucket List",
    description: "Keep an eye on the milestones I'm chasing next.",
    href: "/bucket-list",
  },
  {
    eyebrow: "Toolkit",
    title: "Uses",
    description: "Hardware, software, and rituals behind my builds.",
    href: "/uses",
  },
  {
    eyebrow: "Credits",
    title: "Attribution",
    description: "Resources and humans who inspired this portfolio.",
    href: "/attribution",
  },
];

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0]?.name ?? "");
  const [isMobile, setIsMobile] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const closeTimer = useRef<NodeJS.Timeout | null>(null);
  const moreContainerRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const closeMore = () => {
    clearCloseTimer();
    setMoreOpen(false);
  };

  const openMore = () => {
    clearCloseTimer();
    setMoreOpen(true);
  };

  const scheduleMoreClose = () => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => {
      closeMore();
    }, 120);
  };

  const handleMoreBlur = (event: React.FocusEvent<HTMLElement>) => {
    if (
      moreContainerRef.current &&
      event.relatedTarget &&
      moreContainerRef.current.contains(event.relatedTarget as Node)
    ) {
      return;
    }
    scheduleMoreClose();
  };

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (
        moreContainerRef.current &&
        !moreContainerRef.current.contains(event.target as Node)
      ) {
        closeMore();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  useEffect(() => {
    if (!pathname) return;

    const current = items.find((item) => item.url === pathname);
    if (current && current.name !== activeTab) {
      setActiveTab(current.name);
    }
  }, [pathname, items, activeTab]);
  return (
    <>
      <div
        className={cn(
          "fixed bottom-0 left-1/2 z-50 mb-6 -translate-x-1/2 sm:top-0 sm:pt-4",
          className
        )}
      >
        <div className="flex h-12 w-132 items-center gap-3 rounded-full border border-border bg-background/5 pl-2 shadow-lg backdrop-blur-lg">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.name;

            if (item.name === "More") {
              const showHighlight = isActive || moreOpen;

              return (
                <div
                  key={item.name}
                  ref={moreContainerRef}
                  className="relative"
                  onMouseEnter={() => {
                    setActiveTab(item.name);
                    openMore();
                  }}
                  onMouseLeave={scheduleMoreClose}
                  onFocusCapture={() => {
                    setActiveTab(item.name);
                    openMore();
                  }}
                  onBlur={handleMoreBlur}
                >
                  <button
                    type="button"
                    onClick={() => {
                      if (isMobile) {
                        window.location.href = item.url;
                      } else {
                        openMore();
                      }
                    }}
                    className={cn(
                      "group relative flex select-none items-center rounded-full px-4 py-1.5 text-sm font-light transition",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
                      "text-white/70 hover:text-white",
                      showHighlight && "text-white"
                    )}
                  >
                    <span className="hidden md:inline">{item.name}</span>
                    <span className="md:hidden">
                      <Icon size={18} strokeWidth={2.5} />
                    </span>

                    {showHighlight && (
                      <motion.div
                        layoutId="lamp"
                        className="absolute inset-0 -z-10 w-full rounded-full bg-white/[0.08]"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      >
                        <div className="absolute -top-2 left-1/2 h-1 w-8 -translate-x-1/2 rounded-t-full bg-white/80">
                          <div className="absolute -top-2 -left-2 h-6 w-12 rounded-full bg-white/30 blur-md" />
                          <div className="absolute -top-1 h-6 w-8 rounded-full bg-white/30 blur-md" />
                          <div className="absolute top-0 left-2 h-4 w-4 rounded-full bg-white/30 blur-sm" />
                        </div>
                      </motion.div>
                    )}
                  </button>

                  <div
                    onMouseEnter={openMore}
                    onMouseLeave={scheduleMoreClose}
                    className={cn(
                      "absolute top-full left-0 z-[60] mt-1 w-[22rem] rounded-2xl border border-white/10 bg-black/95 p-4 shadow-2xl backdrop-blur",
                      moreOpen
                        ? "pointer-events-auto translate-y-2 opacity-100"
                        : "pointer-events-none -translate-y-2 opacity-0"
                    )}
                  >
                    <div className="flex flex-col gap-3">
                      <div className="rounded-xl border border-white/10 bg-gradient-to-r from-indigo-600/20 via-indigo-500/10 to-purple-500/20 p-3">
                        <div className="flex items-center gap-3">
                          <img
                            src={portrait}
                            alt="Atul Kumar Jha"
                            className="h-10 w-10 rounded-lg object-cover shadow-lg"
                          />
                          <div className="space-y-1">
                            <p className="text-[0.55rem] font-semibold uppercase tracking-[0.32em] text-indigo-200">
                              Explore more
                            </p>
                            <p className="text-xs text-white/85">
                              Quick access to community stories, goals, and my tool stack.
                            </p>
                          </div>
                        </div>
                        <Link
                          href="/more"
                          className="mt-3 inline-flex items-center gap-2 text-[0.7rem] font-medium text-indigo-100 transition hover:text-white"
                        >
                          Open hub
                          <span aria-hidden>→</span>
                        </Link>
                      </div>

                      <div className="grid gap-2 sm:grid-cols-2">
                        {moreLinks.map((link) => (
                          <Link
                            key={link.title}
                            href={link.href}
                            className="group/link flex flex-col gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.04] p-2 transition hover:border-indigo-400/60 hover:bg-indigo-500/10"
                          >
                            <span className="text-[0.5rem] font-semibold uppercase tracking-[0.3em] text-indigo-300">
                              {link.eyebrow}
                            </span>
                            <span className="text-sm font-medium text-white">
                              {link.title}
                            </span>
                            <span className="text-[0.72rem] leading-snug text-gray-300">
                              {link.description}
                            </span>
                            <span className="text-xs text-indigo-200 transition group-hover/link:translate-x-1">
                              →
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            if (item.name === "Book a call") {
              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => {
                    scheduleMoreClose();
                    setShowDrawer(true);
                  }}
                  className={cn(
                    "relative cursor-pointer rounded-full px-6 py-2 text-sm font-semibold transition-colors bg-[#272627]",
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

            return (
              <Link
                key={item.name}
                href={item.url}
                onClick={() => {
                  setActiveTab(item.name);
                  scheduleMoreClose();
                }}
                onMouseEnter={() => {
                  setActiveTab(item.name);
                  scheduleMoreClose();
                }}
                onFocus={() => {
                  setActiveTab(item.name);
                }}
                className={cn(
                  "relative cursor-pointer rounded-full px-6 py-2 text-sm font-semibold transition-colors",
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
                    className="absolute inset-0 -z-10 w-full rounded-full bg-primary/5"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <div className="absolute -top-2 left-1/2 h-1 w-8 -translate-x-1/2 rounded-t-full bg-primary">
                      <div className="absolute -top-2 -left-2 h-6 w-12 rounded-full bg-primary/30 blur-md" />
                      <div className="absolute -top-1 h-6 w-8 rounded-full bg-primary/30 blur-md" />
                      <div className="absolute top-0 left-2 h-4 w-4 rounded-full bg-primary/30 blur-sm" />
                    </div>
                  </motion.div>
                )}
              </Link>
            );
          })}
        </div>
      </div>

      <ConnectDrawer open={showDrawer} onClose={() => setShowDrawer(false)} />
    </>
  );
}
