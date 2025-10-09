"use client";

import Footer from "@/components/Footer";
import { NavBarItem } from "@/components/navbar";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

const bucketGoals = [
  {
    title: "Ship a SaaS in public",
    description:
      "Launch an end-to-end product with transparent build logs, design drops, and real customer onboarding.",
    status: "In progress",
    eta: "Q1 2026",
  },
  {
    title: "Speak at an international dev conference",
    description:
      "Share lessons on building immersive web experiences with Next.js, motion design, and thoughtful DX tooling.",
    status: "Researching CFPs",
    eta: "2026 season",
  },
  {
    title: "Mentor five engineers into their first role",
    description:
      "Curate a learning path, pair-program weekly, and help juniors gain the confidence to thrive in production codebases.",
    status: "2/5 mentees",
    eta: "Ongoing",
  },
  {
    title: "Produce a creative-coding video series",
    description:
      "Break down motion patterns, shader art, and spatial UI into approachable episodes for curious builders.",
    status: "Scripting",
    eta: "Late 2025",
  },
  {
    title: "Go fully async for a quarter",
    description:
      "Experiment with async-first collaboration across timezones while maintaining momentum and responsiveness.",
    status: "Queued",
    eta: "Mid 2026",
  },
];

export default function BucketListPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative isolate overflow-hidden">
        <ShootingStars className="pointer-events-none" />
        <StarsBackground className="pointer-events-none" />
        <NavBarItem />

        <header className="mx-auto flex max-w-4xl flex-col gap-4 px-6 pt-32 text-center md:text-left">
          <p className="text-xs uppercase tracking-[0.4em] text-indigo-400">Bucket List</p>
          <h1 className="text-4xl font-semibold md:text-5xl lg:text-6xl">
            Milestones keeping me curious and accountable.
          </h1>
          <p className="text-base text-gray-300 md:text-lg">
            I revisit this list each quarter to celebrate progress, refine focus, and invite collaborators to join the journey.
          </p>
        </header>

        <main className="mx-auto mt-16 max-w-5xl px-6 pb-24">
          <div className="space-y-6">
            {bucketGoals.map(({ title, description, status, eta }) => (
              <article
                key={title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-indigo-400/40 hover:bg-indigo-500/10"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold text-white md:text-3xl">{title}</h2>
                    <p className="mt-2 text-sm text-gray-300 md:text-base">{description}</p>
                  </div>
                  <div className="flex flex-col items-start gap-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs uppercase tracking-[0.25em] text-indigo-200 md:items-end">
                    <span>{status}</span>
                    <span className="text-[0.7rem] text-gray-400">Target · {eta}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
