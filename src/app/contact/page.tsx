"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, Calendar, MapPin, Clock, MessageSquare, PhoneCall } from "lucide-react";
import Footer from "@/components/Footer";
import { NavBarItem } from "@/components/navbar";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

const contactChannels = [
  {
    icon: Mail,
    label: "Email",
    description: "Send a detailed brief or a quick hello.",
    href: "mailto:jhaak301@gmail.com",
    cta: "jhaak301@gmail.com",
  },
  {
    icon: Calendar,
    label: "Discovery Call",
    description: "Book a 30-minute session to explore your idea and timelines.",
    href: "mailto:jhaak301@gmail.com?subject=Schedule%20a%20discovery%20call",
    cta: "Request a slot",
  },
  {
    icon: MapPin,
    label: "Location",
    description: "Based in New Delhi, collaborating with teams worldwide.",
    href: "https://maps.app.goo.gl/VFqiCuAJh6oetmkM6",
    cta: "View on Maps",
    external: true,
  },
];

const responseHighlights = [
  {
    title: "Project-fit reply",
    detail: "Get an honest assessment of how I can help within 24 hours.",
  },
  {
    title: "Process snapshot",
    detail: "Understand timelines, tool stack, and next steps before we kick off.",
  },
  {
    title: "Flexible cadence",
    detail: "Async-friendly collaboration across time zones with weekly touchpoints.",
  },
];

const collaborationSteps = [
  {
    step: "01",
    title: "Discovery debrief",
    detail:
      "We hop on a 30-minute call to unpack your goals, constraints, and success metrics. Expect candid feedback and early recommendations.",
  },
  {
    step: "02",
    title: "Roadmap alignment",
    detail:
      "Within 48 hours you’ll receive a lightweight plan covering deliverables, toolchain, milestones, and engagement model options.",
  },
  {
    step: "03",
    title: "Kickoff sprint",
    detail:
      "We begin with a rapid discovery sprint—wireframes, technical spikes, or audits—so you see momentum before committing long term.",
  },
];

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setStatus("idle");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      projectType: formData.get("projectType"),
      budget: formData.get("budget"),
      timeline: formData.get("timeline"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.4),_rgba(2,6,23,0))] blur-3xl" />
          <div className="absolute bottom-[-220px] right-[-160px] h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(236,72,153,0.28),_rgba(2,6,23,0))] blur-[120px]" />
          <div className="absolute bottom-12 left-[-160px] h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(45,212,191,0.22),_rgba(2,6,23,0))] blur-3xl" />
        </div>
        <ShootingStars className="pointer-events-none" />
        <StarsBackground className="pointer-events-none" />
        <NavBarItem />

        <main className="relative z-10 mx-auto max-w-6xl px-6 pt-32 pb-24 md:px-10">
          <section className="grid gap-12 lg:grid-cols-[1.25fr_1fr]">
            <div className="space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="space-y-6"
              >
                <motion.span
                  whileHover={{ scale: 1.04 }}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.08] px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-white/70 shadow-[0_12px_30px_rgba(79,70,229,0.35)]"
                >
                  <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  Let’s build together
                </motion.span>
                <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                  Book a discovery call and move from idea to
                  <span className="relative ml-3 inline-block">
                    <span className="relative z-10 bg-gradient-to-r from-indigo-300 via-purple-200 to-pink-200 bg-clip-text text-transparent">
                      launch with confidence
                    </span>
                    <span className="absolute inset-x-0 bottom-1 -z-0 h-3 rounded-full bg-indigo-500/30 blur-sm" />
                  </span>
                  .
                </h1>
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12, duration: 0.6, ease: "easeOut" }}
                  className="max-w-2xl text-base text-gray-300 sm:text-lg"
                >
                  Tell me about the product you’re dreaming up, the platform you need to scale, or the experience you want to polish.
                  I’ll reply within a day with thoughts, personalized timelines, and a recommended next step.
                </motion.p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
                className="grid gap-4 sm:grid-cols-2"
              >
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-indigo-300" />
                    <p className="text-sm font-medium text-white">Response time</p>
                  </div>
                  <p className="mt-3 text-sm text-gray-300">Within 24 hours, including weekends when possible.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="h-5 w-5 text-indigo-300" />
                    <p className="text-sm font-medium text-white">Engagements</p>
                  </div>
                  <p className="mt-3 text-sm text-gray-300">Product builds, marketing sites, creative dev, and technical mentorships.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
                className="space-y-4"
              >
                <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-white/60">Ways to reach me</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {contactChannels.map(({ icon: Icon, label, description, href, cta, external }, index) => (
                    <Link
                      key={label}
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="group block h-full"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.18 + index * 0.05, duration: 0.45, ease: "easeOut" }}
                        whileHover={{ y: -6, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_16px_45px_rgba(15,23,42,0.35)] transition-all duration-300 group-hover:border-indigo-400/60 group-hover:bg-indigo-500/10"
                      >
                        <div className="space-y-3">
                          <motion.div
                            whileHover={{ rotate: 8 }}
                            className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-indigo-200 backdrop-blur"
                          >
                            <Icon className="h-5 w-5" />
                          </motion.div>
                          <div>
                            <p className="text-base font-medium text-white">{label}</p>
                            <p className="text-sm text-gray-300">{description}</p>
                          </div>
                        </div>
                        <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200 transition group-hover:translate-x-1">
                          {cta}
                          <span aria-hidden>→</span>
                        </span>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
                className="space-y-5 rounded-2xl border border-indigo-500/40 bg-indigo-500/10 p-6 shadow-[0_18px_55px_rgba(99,102,241,0.25)] transition"
              >
                <div className="flex items-center gap-3">
                  <PhoneCall className="h-5 w-5 text-indigo-200" />
                  <p className="text-sm font-semibold text-white">Want help deciding?</p>
                </div>
                <p className="text-sm text-indigo-100">
                  Share a quick outline of your goals and constraints. I’ll suggest engagement models—from sprint-style build weeks to longer partnerships—and send sample roadmaps that fit.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href="mailto:jhaak301@gmail.com?subject=Project%20discovery%20call"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-white transition hover:border-white/40 hover:bg-white/10"
                  >
                    Email a project brief
                  </Link>
                  <Link
                    href="/atul_resume.pdf"
                    className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-indigo-200 transition hover:text-white"
                  >
                    View resume
                    <span aria-hidden>↗</span>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 44 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.24, duration: 0.6, ease: "easeOut" }}
                className="grid gap-4 sm:grid-cols-3"
              >
                {responseHighlights.map(({ title, detail }, index) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.28 + index * 0.06, duration: 0.45, ease: "easeOut" }}
                    whileHover={{ y: -4, scale: 1.01 }}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 shadow-[0_12px_30px_rgba(15,23,42,0.35)]"
                  >
                    <p className="text-sm font-semibold text-white">{title}</p>
                    <p className="mt-2 text-xs leading-relaxed text-gray-300">{detail}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.6, ease: "easeOut" }}
              className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur"
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-white/90">
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Ada Lovelace"
                    className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-sm text-white placeholder-white/40 outline-none transition focus:border-indigo-400 focus:bg-black/50"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-white/90">
                    Work email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-sm text-white placeholder-white/40 outline-none transition focus:border-indigo-400 focus:bg-black/50"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="projectType" className="text-sm font-medium text-white/90">
                      Project type
                    </label>
                    <input
                      id="projectType"
                      name="projectType"
                      type="text"
                      placeholder="e.g. SaaS dashboard"
                      className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-sm text-white placeholder-white/40 outline-none transition focus:border-indigo-400 focus:bg-black/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="budget" className="text-sm font-medium text-white/90">
                      Budget range
                    </label>
                    <input
                      id="budget"
                      name="budget"
                      type="text"
                      placeholder="e.g. $5k - $10k"
                      className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-sm text-white placeholder-white/40 outline-none transition focus:border-indigo-400 focus:bg-black/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="timeline" className="text-sm font-medium text-white/90">
                    Ideal timeline
                  </label>
                  <input
                    id="timeline"
                    name="timeline"
                    type="text"
                    placeholder="e.g. Launch by December"
                    className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-sm text-white placeholder-white/40 outline-none transition focus:border-indigo-400 focus:bg-black/50"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-white/90">
                    Project details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Share goals, problem statements, or links that can help me understand the scope."
                    className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-sm text-white placeholder-white/40 outline-none transition focus:border-indigo-400 focus:bg-black/50"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                  className="w-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-[0_18px_45px_rgba(79,70,229,0.35)] transition hover:from-indigo-400 hover:via-purple-500 hover:to-pink-400 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? "Sending..." : "Send message"}
                </motion.button>

                <AnimatePresence mode="wait">
                  {status === "success" && (
                    <motion.p
                      key="success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="rounded-lg border border-emerald-400/40 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200"
                    >
                      Thanks for reaching out! I’ll get back to you within 24 hours.
                    </motion.p>
                  )}
                  {status === "error" && (
                    <motion.p
                      key="error"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="rounded-lg border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm text-red-200"
                    >
                      Something went wrong while sending your message. Please try again or email me directly at
                      <a
                        href="mailto:jhaak301@gmail.com"
                        className="ml-1 underline decoration-red-200/60 decoration-dotted underline-offset-4 hover:text-red-100"
                      >
                        jhaak301@gmail.com
                      </a>
                      .
                    </motion.p>
                  )}
                </AnimatePresence>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18, duration: 0.4, ease: "easeOut" }}
                  className="text-xs text-white/50"
                >
                  By submitting, you agree to respectful, no-spam follow-ups and can expect a response within 24 hours.
                </motion.p>
              </form>
            </motion.div>
          </section>

          <motion.section
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-20 grid gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-sm text-gray-300 sm:grid-cols-3"
          >
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">Office hours</p>
              <p>Monday – Friday · 9 AM – 6 PM IST</p>
              <p className="text-xs text-white/40">Async collaboration available for other time zones.</p>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">Availability</p>
              <p>Accepting new projects for late Q1 2025 start dates. Rush engagements considered.</p>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">Preferred tools</p>
              <p>Linear for project tracking, Notion for documentation, Loom for async walkthroughs.</p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mt-16 space-y-8"
          >
            <div className="max-w-xl space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
                Collaboration roadmap
              </p>
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                A transparent process, from handshake to launch
              </h2>
              <p className="text-sm text-gray-300">
                Every engagement starts with clarity. Here’s how we’ll move from the first conversation to
                meaningful delivery, keeping you looped in at every milestone.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {collaborationSteps.map(({ step, title, detail }, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.12, duration: 0.45, ease: "easeOut" }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-5 shadow-[0_18px_45px_rgba(15,23,42,0.35)]"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.4em] text-indigo-200/80">
                    {step}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-300">{detail}</p>
                  <div className="pointer-events-none absolute -right-6 -top-10 h-32 w-32 rounded-full bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.32),_rgba(15,23,42,0))] blur-3xl" />
                </motion.div>
              ))}
            </div>
          </motion.section>
        </main>
      </div>

      <Footer />
    </div>
  );
}