"use client";

import React, { useMemo, useState } from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import ConnectDrawer from "@/components/BottomDrawer";
import { motion } from "framer-motion";

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
    { Icon: Twitter, url: "https://x.com/atul_kumar_jha", label: "X (Twitter)" },
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
            href: "mailto:jhaak301@gmail.com?subject=Let%27s%20collaborate",
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

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur md:flex-row md:items-center md:justify-between"
        >
          <div className="space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.08] px-4 py-1 text-xs font-medium uppercase tracking-[0.3em] text-white/80">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              Available for collaborations
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Let’s build something meaningful together.
            </h2>
            <p className="max-w-xl text-base text-gray-300">
              From idea to launch, I help craft performant web experiences with delightful details.
              Share your vision and I’ll bring it to life.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="group relative mt-4 inline-flex items-center justify-center overflow-hidden rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-all hover:border-white/40 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
          >
            <span className="absolute inset-0 origin-left scale-x-0 rounded-full bg-white/10 transition-transform duration-300 ease-out group-hover:scale-x-100" />
            <span className="relative flex items-center gap-2">
              Book a discovery call
              <motion.span
                initial={{ x: 0 }}
                animate={{ x: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                className="text-lg"
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
          className="mt-16 grid gap-10 border border-white/10 bg-white/[0.04] p-8 backdrop-blur lg:grid-cols-[1.2fr_2fr]"
        >
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <img
                src="/assets/atulkumarjha2.jpg"
                alt="Atul Kumar Jha"
                className="h-16 w-16 rounded-full border border-white/20 object-cover"
              />
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/60">Let’s collaborate</p>
                <h3 className="text-2xl font-semibold text-white">Work with Atul</h3>
              </div>
            </div>
            <ul className="space-y-3 text-sm text-gray-300">
              {contactDetails.map(({ label, href, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 transition hover:text-white"
                  >
                    <span className="inline-flex h-1.5 w-1.5 rounded-full bg-white/60" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {navigation.map(({ heading, links }) => (
              <div key={heading} className="space-y-4">
                <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
                  {heading}
                </h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  {links.map(({ label, href, external }) => (
                    <li key={label}>
                      <a
                        href={href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-2 transition hover:text-white"
                      >
                        <span className="inline-flex h-1.5 w-1.5 rounded-full bg-white/40" />
                        {label}
                        {external && <span className="text-white/40">↗</span>}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-16 flex flex-col gap-6 rounded-3xl border border-white/10 bg-black/40 p-6 backdrop-blur md:flex-row md:items-center md:justify-between"
        >
          <div className="space-y-1 text-sm text-gray-400">
            <p>© {currentYear} Atul Kumar Jha. Crafted with curiosity and caffeine.</p>
            <p className="space-x-3">
              <a href="/privacy" className="hover:text-gray-200">Privacy Policy</a>
              <span>·</span>
              <a href="/terms" className="hover:text-gray-200">Terms &amp; Conditions</a>
              <span>·</span>
              <a href="/attribution" className="hover:text-gray-200">Colophon</a>
            </p>
          </div>
          <div className="flex items-center gap-3">
            {socialLinks.map(({ Icon, url, label }) => (
              <motion.a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] transition hover:border-white/30 hover:bg-white/[0.08]"
                aria-label={label}
                title={label}
                whileHover={{ scale: 1.1, rotate: 4 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="h-4 w-4" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <ConnectDrawer open={isOpen} onClose={() => setIsOpen(false)} />
    </footer>
  );
};

export default Footer;
