"use client";

import Footer from "@/components/Footer";
import { NavBarItem } from "@/components/navbar";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

type CreditItem = {
  label: string;
  description: string;
  href?: string;
};

const credits: Array<{
  title: string;
  items: CreditItem[];
}> = [
  {
    title: "Design inspiration",
    items: [
      {
        label: "Aceternity UI",
        description: "Playful interactions and gradients that influenced this portfolio’s motion language.",
        href: "https://aceternity.com/"
      },
      {
        label: "shadcn/ui",
        description: "Accessible primitives and design tokens that keep components consistent.",
        href: "https://ui.shadcn.com/"
      },
      {
        label: "Himanshu Yadav",
        description: "Inspiration for structure, cadence, and storytelling.",
        href: "https://himanshuy.me/"
        label: "Aayush Bharti",
        description: "Portfolio inspiration for structure, cadence, and storytelling.",
        href: "https://aayushbharti.in/"
      }
    ]
  },
  {
    title: "Illustrations & textures",
    items: [
      {
        label: "Haikei",
        description: "Organic gradients and wave patterns used across hero sections.",
        href: "https://haikei.app/"
      },
      {
        label: "Spline community",
        description: "3D snippets and references for subtle depth cues.",
        href: "https://spline.design/"
      }
    ]
  },
  {
    title: "Code & infrastructure",
    items: [
      {
        label: "Next.js",
        description: "Hybrid rendering and server actions powering the experience.",
        href: "https://nextjs.org/"
      },
      {
        label: "Framer Motion",
        description: "Animation library for smooth transitions and micro-interactions.",
        href: "https://www.framer.com/motion/"
      },
      {
        label: "Vercel",
        description: "Edge network, preview deployments, and analytics.",
        href: "https://vercel.com/"
      }
    ]
  },
  {
    title: "Supporters",
    items: [
      {
        label: "Mentors & peers",
        description: "Thank you for code reviews, feedback loops, and coffee chats that sharpened the craft.",
      },
      {
        label: "Open-source maintainers",
        description: "Projects like Lucide, Simple Icons, and react-spring keep the ecosystem vibrant.",
      }
    ]
  }
];

export default function AttributionPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative isolate overflow-hidden">
        <ShootingStars className="pointer-events-none" />
        <StarsBackground className="pointer-events-none" />
        <NavBarItem />

        <header className="mx-auto flex max-w-4xl flex-col gap-4 px-6 pt-32 text-center md:text-left">
          <p className="text-xs uppercase tracking-[0.4em] text-indigo-400">Attribution</p>
          <h1 className="text-4xl font-semibold md:text-5xl lg:text-6xl">
            Gratitude for the tools, people, and ideas that shaped this site.
          </h1>
          <p className="text-base text-gray-300 md:text-lg">
            Building in community means standing on the shoulders of generous creators. Here’s a curated list of credits and thank-yous.
          </p>
        </header>

        <main className="mx-auto mt-16 grid max-w-5xl gap-6 px-6 pb-24 md:grid-cols-2">
          {credits.map(({ title, items }) => (
            <section
              key={title}
              className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-indigo-400/40 hover:bg-indigo-500/10"
            >
              <h2 className="text-2xl font-semibold text-white md:text-3xl">{title}</h2>
              <ul className="mt-4 space-y-3 text-sm text-gray-300">
                {items.map(({ label, description, href }) => (
                  <li key={label} className="rounded-2xl border border-white/5 bg-white/[0.06] px-4 py-3">
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-medium text-white">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs uppercase tracking-[0.28em] text-indigo-300 hover:text-indigo-200"
                        >
                          Visit
                        </a>
                      ) : null}
                    </div>
                    <p className="mt-2 text-xs text-gray-400 md:text-sm">{description}</p>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </main>
      </div>

      <Footer />
    </div>
  );
}
