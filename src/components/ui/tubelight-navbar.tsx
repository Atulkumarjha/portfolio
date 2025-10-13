"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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
  const [showDrawer, setShowDrawer] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const closeTimer = useRef<NodeJS.Timeout | null>(null);
  const moreContainerRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

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
          "fixed left-1/2 top-2 sm:top-4 z-50 w-[calc(100%-1rem)] sm:w-full max-w-[95%] sm:max-w-xl md:max-w-2xl -translate-x-1/2",
          className
        )}
      >
        <div className="flex w-full items-center justify-between gap-1.5 sm:gap-2 rounded-full border border-border/60 bg-background/80 px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 shadow-lg backdrop-blur-xl">
          <Link
            href="/"
            className="flex items-center gap-1.5 sm:gap-2 rounded-full border border-transparent bg-white/5 px-1.5 py-0.5 sm:px-2 sm:py-1 text-xs font-medium text-white/80 transition hover:border-white/20 hover:bg-white/10 hover:text-white flex-shrink-0"
          "fixed left-1/2 top-4 z-50 w-full max-w-2xl -translate-x-1/2 px-4 sm:px-0",
          className
        )}
      >
        <div className="flex w-full flex-wrap items-center justify-between gap-2 rounded-full border border-border/60 bg-background/80 px-3 py-2 shadow-lg backdrop-blur-xl sm:px-4">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-full border border-transparent bg-white/5 px-2 py-1 text-xs font-medium text-white/80 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
          >
            <Image
              src="/assets/atulkumarjha.jpg"
              alt="Atul Kumar Jha"
              width={32}
              height={32}
              className="h-6 w-6 sm:h-8 sm:w-8 rounded-full object-cover"
            />
            
          </Link>

          <div className="flex items-center justify-end gap-1 sm:gap-2 overflow-x-auto scrollbar-hide">
              className="h-8 w-8 rounded-full object-cover"
            />
            <span className="hidden sm:inline">Atul Kumar Jha</span>
          </Link>

          <div className="flex flex-wrap items-center justify-end gap-2">
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
                      openMore();
                    }}
                    className={cn(
                      "group relative flex select-none items-center rounded-full px-2 sm:px-3 py-1 text-[10px] sm:text-xs md:text-sm font-medium uppercase tracking-[0.12em] sm:tracking-[0.18em] md:tracking-normal transition whitespace-nowrap",
                      "group relative flex select-none items-center rounded-full px-3 py-1 text-sm font-light transition",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
                      "text-white/70 hover:text-white",
                      showHighlight && "text-white"
                    )}
                  >
                    <span className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
                      <Icon
                        strokeWidth={2}
                        className="hidden md:block h-3.5 w-3.5 md:h-4 md:w-4 shrink-0"
                        aria-hidden="true"
                      />
                      {item.name}
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
                      "absolute top-full right-0 sm:left-0 z-[60] mt-1 w-[calc(100vw-2rem)] sm:w-[22rem] max-w-[22rem] rounded-2xl border border-white/10 bg-black/95 p-3 sm:p-4 shadow-2xl backdrop-blur transition-all duration-200",
                      moreOpen
                        ? "pointer-events-auto translate-y-2 opacity-100"
                        : "pointer-events-none -translate-y-2 opacity-0"
                    )}
                  >
                    <div className="flex flex-col gap-3">
                      <div className="rounded-xl border border-white/10 bg-gradient-to-r from-indigo-600/20 via-indigo-500/10 to-purple-500/20 p-2.5 sm:p-3">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <img
                            src={portrait}
                            alt="Atul Kumar Jha"
                            className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg object-cover shadow-lg flex-shrink-0"
                          />
                          <div className="space-y-0.5 sm:space-y-1 min-w-0">
                            <p className="text-[0.5rem] sm:text-[0.55rem] font-semibold uppercase tracking-[0.25em] sm:tracking-[0.32em] text-indigo-200">
                              Explore more
                            </p>
                            <p className="text-[0.65rem] sm:text-xs text-white/85 leading-tight">
                              Quick access to community stories, goals, and my tool stack.
                            </p>
                          </div>
                        </div>
                        <Link
                          href="/more"
                          className="mt-2 sm:mt-3 inline-flex items-center gap-2 text-[0.65rem] sm:text-[0.7rem] font-medium text-indigo-100 transition hover:text-white"
                        >
                          Open hub
                          <span aria-hidden>→</span>
                        </Link>
                      </div>

                      <div className="grid gap-2 grid-cols-1 xs:grid-cols-2">
                        {moreLinks.map((link) => (
                          <Link
                            key={link.title}
                            href={link.href}
                            className="group/link flex flex-col gap-1 sm:gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.04] p-2 transition hover:border-indigo-400/60 hover:bg-indigo-500/10"
                          >
                            <span className="text-[0.45rem] sm:text-[0.5rem] font-semibold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-indigo-300">
                              {link.eyebrow}
                            </span>
                            <span className="text-xs sm:text-sm font-medium text-white">
                              {link.title}
                            </span>
                            <span className="text-[0.68rem] sm:text-[0.72rem] leading-snug text-gray-300 line-clamp-2">
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
                    "relative cursor-pointer rounded-full px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-[0.12em] sm:tracking-[0.2em] md:tracking-normal transition-colors bg-[#272627] whitespace-nowrap",
                    "relative cursor-pointer rounded-full px-4 py-1.5 text-sm font-semibold transition-colors bg-[#272627]",
                    "text-foreground/80 hover:text-primary",
                    isActive && "bg-muted text-primary"
                  )}
                >
                  <span className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
                    <Icon
                      strokeWidth={2}
                      className="hidden md:block h-3.5 w-3.5 md:h-4 md:w-4 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="hidden xs:inline">{item.name}</span>
                    <span className="xs:hidden">Call</span>
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
                    "relative cursor-pointer rounded-full px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-[0.12em] sm:tracking-[0.2em] md:tracking-normal transition-colors whitespace-nowrap",
                    "text-foreground/80 hover:text-primary",
                    isActive && "bg-muted text-primary"
                  )}
                className={cn(
                  "relative cursor-pointer rounded-full px-4 py-1.5 text-sm font-semibold transition-colors",
                  "text-foreground/80 hover:text-primary",
                  isActive && "bg-muted text-primary"
                )}
              >
                <span className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
                  <Icon
                    strokeWidth={2}
                    className="hidden md:block h-3.5 w-3.5 md:h-4 md:w-4 shrink-0"
                    aria-hidden="true"
                  />
                  {item.name}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 -z-10 w-full rounded-full bg-primary/5"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <div className="absolute -top-2 left-1/2 h-1 w-6 sm:w-8 -translate-x-1/2 rounded-t-full bg-primary">
                      <div className="absolute -top-2 -left-2 h-4 sm:h-6 w-8 sm:w-12 rounded-full bg-primary/30 blur-md" />
                      <div className="absolute -top-1 h-4 sm:h-6 w-6 sm:w-8 rounded-full bg-primary/30 blur-md" />
                      <div className="absolute top-0 left-2 h-3 sm:h-4 w-3 sm:w-4 rounded-full bg-primary/30 blur-sm" />
                    </div>
                  </motion.div>
                )}
              </Link>
            );
          })}
          </div>
        </div>
      </div>

      <ConnectDrawer open={showDrawer} onClose={() => setShowDrawer(false)} />
    </>
  );
}
