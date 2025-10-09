"use client";

import { NavBarItem } from "@/components/navbar";
import Footer from "@/components/Footer";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
const cards = [
  {
    title: "Guestbook",
    description: "Read kind words from collaborators and leave a note of your own.",
    href: "/guestbook",
    eyebrow: "Community",
  },
  {
    title: "Bucket List",
    description: "Keep up with the milestones I’m chasing next and cheer from the sidelines.",
    href: "/bucket-list",
    eyebrow: "In motion",
  },
  {
    title: "Uses",
    description: "Explore the hardware, software, and rituals that power each build.",
    href: "/uses",
    eyebrow: "Toolkit",
  },
  {
    title: "Attribution",
    description: "A gratitude wall for the creators and resources that shaped this portfolio.",
    href: "/attribution",
    eyebrow: "Credits",
  },
];

export default function MorePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative isolate overflow-hidden">
        <ShootingStars className="pointer-events-none" />
        <StarsBackground className="pointer-events-none" />
        <NavBarItem />

        <header className="mx-auto flex max-w-4xl flex-col gap-4 px-6 pt-32 text-center md:text-left">
          <p className="text-sm uppercase tracking-[0.4em] text-indigo-400">
            Beyond the basics
          </p>
          <h1 className="text-4xl font-semibold md:text-5xl lg:text-6xl">
            Stories, rituals, and resources I keep close.
          </h1>
          <p className="text-base text-gray-300 md:text-lg">
            Explore the extended universe of my work—community highlights, wishlist goals, and the tools I rely on daily.
          </p>
        </header>

        <main className="mx-auto mt-20 grid max-w-5xl gap-6 px-6 pb-24 md:grid-cols-2">
          {cards.map(({ title, description, href, eyebrow }) => (
            <a
              key={title}
              href={href}
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:border-indigo-400/40 hover:bg-indigo-500/10"
            >
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-indigo-300">
                  {eyebrow}
                </p>
                <h2 className="text-3xl font-semibold text-white md:text-4xl">{title}</h2>
                <p className="text-sm text-gray-300 md:text-base">{description}</p>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-indigo-200 transition group-hover:text-indigo-100">
                Explore
                <span aria-hidden>→</span>
              </span>
            </a>
          ))}
        </main>
      </div>

      <Footer />
    </div>
  );
}
