"use client";

import Footer from "@/components/Footer";
import { NavBarItem } from "@/components/navbar";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { Github, Linkedin, Twitter } from "lucide-react";
import { FaDiscord } from "react-icons/fa";

type StackItem = {
  name: string;
  note: string;
  icon: string;
};

const stacks: Array<{
  title: string;
  description: string;
  items: StackItem[];
}> = [
  {
    title: "Daily Drivers",
    description: "Hardware and comfort gear that power every sprint.",
    items: [
      {
        name: "MacBook Pro M3",
        note: '16" Liquid Retina XDR · 32GB RAM · Dell G15 as secondary dev rig',
        icon: "https://cdn.simpleicons.org/apple/aaaaaa",
      },
      {
        name: "Dell G15",
        note: "RTX graphics laptop for GPU-heavy prototypes and gaming cool-downs.",
        icon: "https://cdn.simpleicons.org/dell/00A4EA",
      },
      {
        name: 'LG UltraFine 27"',
        note: "Color-accurate reference display for design reviews and editing.",
        icon: "https://cdn.simpleicons.org/lg/DB0043",
      },
      {
        name: "Keychron K6",
        note: "Low-profile, hot-swappable switches tuned with tactile browns.",
        icon: "https://cdn.simpleicons.org/keychron/FF5B2D",
      },
      {
        name: "Logitech MX Master 3S",
        note: "Thumb wheel macros for timeline scrubs, gradients, and window swaps.",
        icon: "https://cdn.simpleicons.org/logitech/00B8FC",
      },
    ],
  },
  {
    title: "Build & Ship",
    description: "My go-to stack for crafting responsive, accessible products at speed.",
    items: [
      {
        name: "Next.js 15",
        note: "App Router, RSC, and Turbopack to keep builds snappy.",
        icon: "https://cdn.simpleicons.org/nextdotjs/ffffff",
      },
      {
        name: "TypeScript",
        note: "Strict typing lets me move fast without breaking things.",
        icon: "https://cdn.simpleicons.org/typescript/3178C6",
      },
      {
        name: "Tailwind CSS",
        note: "Design tokens at my fingertips for consistent UI.",
        icon: "https://cdn.simpleicons.org/tailwindcss/38BDF8",
      },
      {
        name: "Prisma + PostgreSQL",
        note: "Schema-first modeling with migrations I can trust.",
        icon: "https://cdn.simpleicons.org/prisma/2D3748",
      },
      {
        name: "Vercel",
        note: "Preview deploys, edge functions, and analytics baked in.",
        icon: "https://cdn.simpleicons.org/vercel/ffffff",
      },
    ],
  },
  {
    title: "Design & Motion",
    description: "The visual toolkit for interfaces, animation, and spatial UI.",
    items: [
      {
        name: "Figma",
        note: "Component libraries, auto-layout, and design tokens.",
        icon: "https://cdn.simpleicons.org/figma/F24E1E",
      },
      {
        name: "Framer Motion",
        note: "Fluid interactions with layout orchestration.",
        icon: "https://cdn.simpleicons.org/framer/0055FF",
      },
      {
        name: "Spline",
        note: "Lightweight 3D elements for expressive hero sections.",
        icon: "https://cdn.simpleicons.org/spline/0FC5FF",
      },
      {
        name: "Procreate",
        note: "Concept sketches and texture studies on the go.",
        icon: "https://cdn.simpleicons.org/procreate/1D1D1D",
      },
    ],
  },
  {
    title: "Focus & Flow",
    description: "Systems that keep me intentional, curious, and balanced.",
    items: [
      {
        name: "Notion",
        note: "Second brain for research, roadmap, and retros.",
        icon: "https://cdn.simpleicons.org/notion/ffffff",
      },
      {
        name: "Raycast",
        note: "Launcher, snippets, and API playground in one.",
        icon: "https://cdn.simpleicons.org/raycast/FF6363",
      },
      {
        name: "Cron",
        note: "Calendar that makes timezone juggling painless.",
        icon: "https://cdn.simpleicons.org/cron/5B5BFF",
      },
      {
        name: "Obsidian",
        note: "Markdown vault for deep dives and workshop prep.",
        icon: "https://cdn.simpleicons.org/obsidian/7C3AED",
      },
    ],
  },
];

const followLinks = [
  { label: "Discord", href: "https://discord.com/users/1067672509677322282", Icon: FaDiscord },
  { label: "GitHub", href: "https://github.com/Atulkumarjha", Icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/atul-kumar-jha-09535b233/", Icon: Linkedin },
  { label: "X (Twitter)", href: "https://x.com/atul_kumar_jha", Icon: Twitter },
];

export default function UsesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative isolate overflow-hidden">
        <ShootingStars className="pointer-events-none" />
        <StarsBackground className="pointer-events-none" />
        <NavBarItem />

        <header className="mx-auto flex max-w-4xl flex-col gap-4 px-6 pt-32 text-center md:text-left">
          <p className="text-xs uppercase tracking-[0.4em] text-indigo-400">Uses</p>
          <h1 className="text-4xl font-semibold md:text-5xl lg:text-6xl">
            Explore the toolkit behind each build.
          </h1>
          <p className="text-base text-gray-300 md:text-lg">
            From hardware and craft tools to focus rituals, here’s the stack that keeps experiments grounded and shipping.
          </p>
        </header>

        <main className="mx-auto mt-16 grid max-w-5xl gap-6 px-6 pb-24 md:grid-cols-2">
          {stacks.map(({ title, description, items }) => (
            <section
              key={title}
              className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-indigo-400/40 hover:bg-indigo-500/10"
            >
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-white md:text-3xl">{title}</h2>
                <p className="text-sm text-gray-300 md:text-base">{description}</p>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-gray-300">
                {items.map(({ name, note, icon }) => (
                  <li
                    key={`${title}-${name}`}
                    className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/[0.06] px-4 py-3"
                  >
                    <img
                      src={icon}
                      alt={`${name} icon`}
                      className="mt-1 h-7 w-7 flex-none rounded-full border border-white/10 bg-black/30 p-1"
                    />
                    <div>
                      <p className="font-medium text-white">{name}</p>
                      <p className="text-xs text-gray-400 md:text-sm">{note}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </main>

        <section className="mx-auto mb-24 mt-12 max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">Follow the experiments</h2>
          <p className="mt-2 text-sm text-gray-300 md:text-base">
            You can follow me here too for the latest updates, open-source drops, and behind-the-scenes build logs.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            {followLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-sm text-gray-200 transition hover:border-indigo-400/60 hover:bg-indigo-500/10"
              >
                <Icon className="h-4 w-4" />
                {label}
              </a>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
