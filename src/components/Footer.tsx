"use client";

import React, { useMemo, useState } from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import ConnectDrawer from "@/components/BottomDrawer";
import { motion } from "framer-motion";
import { PageContainer } from "@/components/layout/PageContainer";

type LinkItem = {
  label: string;
  href: string;
  external?: boolean;
};

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      Icon: FaDiscord,
      url: "https://discord.com/users/1067672509677322282",
      label: "Discord",
    },
    { Icon: Github, url: "https://github.com/Atulkumarjha", label: "GitHub" },
    {
      Icon: Linkedin,
      url: "https://www.linkedin.com/in/atul-kumar-jha-09535b233/",
      label: "LinkedIn",
    },
    {
      Icon: Twitter,
      url: "https://x.com/atul_kumar_jha",
      label: "X (Twitter)",
    },
  ];

  const navigation = useMemo(
    () => [
      {
        heading: "Navigate",
        links: [
          { label: "Home", href: "/#home" },
          { label: "About", href: "/about" },
          { label: "Work", href: "/work" },
          { label: "More", href: "/more" },
        ],
      },
      {
        heading: "Highlights",
        links: [
          { label: "Featured Projects", href: "/work#moody" },
          { label: "Guestbook", href: "/guestbook" },
          { label: "Bucket List", href: "/bucket-list" },
          { label: "Uses", href: "/uses" },
        ],
      },
      {
        heading: "Resources",
        links: [
          {
            label: "Resume",
            href: "/atul_resume.pdf",
            external: true,
          },
          {
            label: "Book a Call",
            href: "/contact",
          },
          {
            label: "Link Hub",
            href: "https://linktr.ee/atul_kumar_jha",
            external: true,
          },
          {
            label: "RSS Feed",
            href: "/rss.xml",
          },
          {
            label: "Attribution",
            href: "/attribution",
          },
        ],
      },
    ],
    []
  );

  const contactDetails: LinkItem[] = [
    {
      label: "jhaak301@gmail.com",
      href: "mailto:jhaak301@gmail.com",
    },
    {
      label: "New Delhi, India",
      href: "https://maps.app.goo.gl/VFqiCuAJh6oetmkM6",
      external: true,
    },
    {
      label: "Available for full-time & freelance collaborations",
      href: "/about",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.35),_rgba(17,24,39,0))] blur-3xl" />
        <div className="absolute bottom-[-260px] right-[-180px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(236,72,153,0.25),_rgba(17,24,39,0))] blur-[120px]" />
        <div className="absolute bottom-16 left-[-200px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(45,212,191,0.24),_rgba(17,24,39,0))] blur-3xl" />
      </div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-950" />
        <svg width="100%" height="100%" className="h-full w-full">
          <defs>
            <pattern
              id="footer-diagonal"
              x="0"
              y="0"
              width="160"
              height="160"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M-20 20 L20 -20 M0 160 L160 0"
                stroke="currentColor"
                strokeWidth="0.4"
                opacity="0.25"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-diagonal)" />
        </svg>
      </div>

      <PageContainer className="relative space-y-8 sm:space-y-12 md:space-y-16 py-8 sm:py-12 md:py-16 lg:py-20">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-2.5 sm:gap-3 md:gap-4 lg:gap-5 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl border border-white/10 bg-white/5 p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 backdrop-blur md:flex-row md:items-center md:justify-between"
        >
          <div className="space-y-1 sm:space-y-1.5 md:space-y-2 lg:space-y-2.5">
            <p className="inline-flex items-center gap-1 sm:gap-1.5 rounded-full border border-white/10 bg-white/[0.08] px-2 sm:px-2.5 md:px-3 py-0.5 text-[9px] sm:text-[10px] md:text-xs font-medium uppercase tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-white/80">
              <span className="inline-flex h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-emerald-400" />
              Available for collaborations
            </p>
            <h2 className="text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-semibold tracking-tight text-white leading-tight">
              Let&apos;s build something meaningful together.
            </h2>
            <p className="max-w-xl text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-300 leading-relaxed">
              From idea to launch, I help craft performant web experiences with
              delightful details. Share your vision and I&apos;ll bring it to
              life.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="group relative mt-1 sm:mt-2 md:mt-3 inline-flex items-center justify-center overflow-hidden rounded-full border border-white/20 px-3 sm:px-4 md:px-5 lg:px-6 py-1.5 sm:py-2 md:py-2.5 lg:py-3 text-[10px] sm:text-xs md:text-sm font-medium text-white transition-all hover:border-white/40 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] whitespace-nowrap"
          >
            <span className="absolute inset-0 origin-left scale-x-0 rounded-full bg-white/10 transition-transform duration-300 ease-out group-hover:scale-x-100" />
            <span className="relative flex items-center gap-1 sm:gap-1.5">
              Book a discovery call
              <motion.span
                initial={{ x: 0 }}
                animate={{ x: [0, 6, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.6,
                  ease: "easeInOut",
                }}
                className="text-xs sm:text-sm md:text-base"
              >
                →
              </motion.span>
            </span>
          </motion.button>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="grid gap-4 sm:gap-5 md:gap-6 lg:gap-8 border border-white/10 bg-white/[0.04] p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 backdrop-blur rounded-lg sm:rounded-xl md:rounded-2xl grid-cols-1 lg:grid-cols-[1.2fr_2fr]"
        >
          <div className="space-y-2 sm:space-y-2.5 md:space-y-3 lg:space-y-4 order-2 lg:order-1">
            <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3">
              <img
                src="/assets/atulkumarjha2.jpg"
                alt="Atul Kumar Jha"
                className="h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 lg:h-14 lg:w-14 xl:h-16 xl:w-16 rounded-full border border-white/20 object-cover"
              />
              <div>
                <p className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-white/60">
                  Let&apos;s collaborate
                </p>
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-white">
                  Work with Atul
                </h3>
              </div>
            </div>
            <ul className="space-y-1.5 sm:space-y-2 text-[10px] sm:text-xs md:text-sm text-gray-300">
              {contactDetails.map(({ label, href, external }, index) => (
                <motion.li
                  key={label}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.1 + index * 0.05,
                    duration: 0.45,
                    ease: "easeOut",
                  }}
                >
                  <motion.a
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1 sm:gap-1.5 transition hover:text-white"
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="inline-flex h-0.5 w-0.5 sm:h-1 sm:w-1 rounded-full bg-white/60" />
                    {label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="grid gap-4 sm:gap-5 md:gap-6 lg:gap-8 grid-cols-1 md:grid-cols-3 order-1 lg:order-2">
            {navigation.map(({ heading, links }, columnIndex) => (
              <motion.div
                key={heading}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.15 + columnIndex * 0.08,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="space-y-2 sm:space-y-2.5 md:space-y-3"
              >
                <h4 className="text-[9px] sm:text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-white/60">
                  {heading}
                </h4>
                <ul className="space-y-1.5 sm:space-y-2 text-[10px] sm:text-xs md:text-sm text-gray-300">
                  {links.map(({ label, href, external }, linkIndex) => (
                    <motion.li
                      key={label}
                      initial={{ opacity: 0, y: 6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.25 + columnIndex * 0.08 + linkIndex * 0.04,
                        duration: 0.4,
                        ease: "easeOut",
                      }}
                    >
                      <motion.a
                        href={href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-1 sm:gap-1.5 rounded-full px-2 sm:px-2.5 py-1 sm:py-1.5 transition hover:bg-white/5 hover:text-white"
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <span className="inline-flex h-0.5 w-0.5 sm:h-1 sm:w-1 rounded-full bg-white/40" />
                        {label}
                        {external && <span className="text-white/40">↗</span>}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-col gap-2 sm:gap-2.5 md:gap-3 lg:gap-4 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl border border-white/10 bg-black/40 p-2.5 sm:p-3 md:p-4 lg:p-5 xl:p-6 backdrop-blur md:flex-row md:items-center md:justify-between"
        >
          <div className="space-y-0.5 text-[8px] sm:text-[9px] md:text-xs lg:text-sm text-gray-400">
            <p>
              © {currentYear} Atul Kumar Jha. Crafted with curiosity and
              caffeine.
            </p>
            <p className="flex flex-wrap gap-x-1.5 sm:gap-x-2 gap-y-0.5">
              <a href="/privacy" className="hover:text-gray-200">
                Privacy Policy
              </a>
              <span className="hidden sm:inline">·</span>
              <a href="/terms" className="hover:text-gray-200">
                Terms &amp; Conditions
              </a>
              <span className="hidden sm:inline">·</span>
              <a href="/attribution" className="hover:text-gray-200">
                Colophon
              </a>
            </p>
          </div>
          <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
            {socialLinks.map(({ Icon, url, label }) => (
              <motion.a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-9 lg:w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] transition hover:border-white/30 hover:bg-white/[0.08]"
                aria-label={label}
                title={label}
                whileHover={{ scale: 1.1, rotate: 4 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-3.5 md:w-3.5 lg:h-4 lg:w-4" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </PageContainer>

      <ConnectDrawer open={isOpen} onClose={() => setIsOpen(false)} />
    </footer>
  );
};

export default Footer;
