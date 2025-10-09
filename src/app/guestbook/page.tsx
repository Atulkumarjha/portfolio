"use client";

import Footer from "@/components/Footer";
import { NavBarItem } from "@/components/navbar";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { Github, Linkedin, Twitter } from "lucide-react";
import { FaDiscord } from "react-icons/fa";

const guestEntries = [
  {
    name: "Lena Torres",
    role: "Product Lead · Creatify",
    message:
      "Working with Atul was an absolute joy. He translated our rough concepts into polished, production-ready interfaces with an eye for detail and performance.",
    date: "Sept 2025",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Ryan Mitchell",
    role: "CTO · Innovate Solutions",
    message:
      "Atul combines product thinking with strong engineering fundamentals. Every collaboration has shipped on time and exceeded expectations.",
    date: "Aug 2025",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    name: "Emily Chen",
    role: "Design Director · Pixelcraft",
    message:
      "From motion prototypes to production builds, Atul keeps the craft high while staying pragmatic. He’s our go-to for ambitious web experiences.",
    date: "Jul 2025",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Nikhil Sharma",
    role: "Founder · LaunchpadX",
    message:
      "We built our MVP with Atul in under six weeks. He set up the entire stack, launch pipeline, and still found time to polish the marketing site.",
    date: "May 2025",
    avatar: "https://randomuser.me/api/portraits/men/27.jpg",
  },
];

const socialLinks = [
  { label: "Discord", href: "https://discord.com/users/1067672509677322282", Icon: FaDiscord },
  { label: "GitHub", href: "https://github.com/Atulkumarjha", Icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/atul-kumar-jha-09535b233/", Icon: Linkedin },
  { label: "X (Twitter)", href: "https://x.com/atul_kumar_jha", Icon: Twitter },
];

export default function GuestbookPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative isolate overflow-hidden">
        <ShootingStars className="pointer-events-none" />
        <StarsBackground className="pointer-events-none" />
        <NavBarItem />

        <header className="mx-auto flex max-w-4xl flex-col gap-4 px-6 pt-32 text-center md:text-left">
          <p className="text-xs uppercase tracking-[0.4em] text-indigo-400">Guestbook</p>
          <h1 className="text-4xl font-semibold md:text-5xl lg:text-6xl">
            Word on the street about working with me.
          </h1>
          <p className="text-base text-gray-300 md:text-lg">
            Leave a testimonial, share some encouragement, or just say hi. Every note helps future collaborators understand what it’s like to build together.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a
              href="https://forms.gle/DESV9JDfPFgLmK6h9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-indigo-500/40 bg-indigo-500/10 px-5 py-2 text-sm font-medium text-indigo-200 transition hover:border-indigo-400/70 hover:bg-indigo-500/20"
            >
              Sign the guestbook
            </a>
            <a
              href="mailto:atulpc682@gmail.com?subject=Quick%20hello%20from%20your%20portfolio"
              className="inline-flex items-center rounded-full border border-white/10 px-5 py-2 text-sm font-medium text-gray-200 transition hover:border-white/30 hover:text-white"
            >
              Send a message
            </a>
          </div>
          <p className="mt-6 text-sm text-gray-400">
            You can follow me here too for the latest updates, live build threads, and community drops.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.24em] text-gray-200 transition hover:border-indigo-400/60 hover:bg-indigo-500/10"
              >
                <Icon className="h-4 w-4" />
                {label}
              </a>
            ))}
          </div>
        </header>

        <main className="mx-auto mt-16 grid max-w-5xl gap-6 px-6 pb-24 md:grid-cols-2">
          {guestEntries.map(({ name, role, message, date, avatar }) => (
            <article
              key={name}
              className="group relative flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-indigo-400/40 hover:bg-indigo-500/10"
            >
              <div className="flex items-center gap-4">
                <img
                  src={avatar}
                  alt={`${name} avatar`}
                  className="h-12 w-12 rounded-full border border-white/10 object-cover"
                />
                <div>
                  <p className="text-base font-semibold text-white">{name}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-400">{role}</p>
                </div>
                <span className="ml-auto text-xs text-gray-500">{date}</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-300">{message}</p>
            </article>
          ))}
        </main>
      </div>

      <Footer />
    </div>
  );
}
