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
  const links = [
    { Icon: FaDiscord, url: "https://discord.com/users/1067672509677322282" },
    { Icon: Github, url: "https://github.com/Atulkumarjha" },
    { Icon: Linkedin, url: "https://www.linkedin.com/in/atul-kumar-jha-09535b233/" },
    { Icon: Twitter, url: "https://x.com/atul_kumar_jha" },
  ];

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
            href: "mailto:atulpc682@gmail.com?subject=Let%27s%20collaborate",
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
      label: "atulpc682@gmail.com",
      href: "mailto:atulpc682@gmail.com",
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
          <rect width="100%" height="100%" fill="url(#waves)" />
          <rect width="100%" height="100%" fill="url(#footer-diagonal)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur md:flex-row md:items-center md:justify-between"
        >
          <div className="space-y-4 text-center md:text-left">
            <motion.p
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-xs uppercase tracking-[0.4em] text-indigo-400"
            >
              Let’s collaborate
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.55 }}
              className="text-3xl font-semibold md:text-4xl"
            >
              Building something ambitious?
              <span className="block text-indigo-300">I’d love to hear about it.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.3, duration: 0.55 }}
              className="text-sm text-gray-300 md:max-w-md"
            >
              Reach out for product engineering, creative coding, or mentorship opportunities. I usually respond within 24 hours.
            </motion.p>
          </div>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setIsOpen(true)}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-3 text-sm font-semibold text-white"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-transform duration-300 group-hover:scale-110" />
            <span className="relative">Open contact drawer</span>
          </motion.button>
        </motion.section>

        <ConnectDrawer open={isOpen} onClose={() => setIsOpen(false)} />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.12, duration: 0.5, ease: "easeOut" },
            },
          }}
          className="mt-16 grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]"
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }} className="space-y-8">
            <div className="flex items-center gap-4">
              <img
                src="/assets/atulkumarjha2.jpg"
                alt="Portrait of Atul Kumar Jha"
                className="h-16 w-16 rounded-2xl border border-white/10 object-cover"
              />
              <div>
                <p className="text-lg font-semibold">Atul Kumar Jha</p>
                <p className="text-sm text-gray-400">Full-stack engineer crafting immersive web experiences.</p>
              </div>
            </div>
            <div className="space-y-2 text-sm text-gray-300">
              {contactDetails.map(({ label, href, external }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-2 text-left transition hover:text-white"
                  whileHover={{ x: 4 }}
                >
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-indigo-400" />
                  {label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {navigation.map(({ heading, links }) => (
            <motion.nav
              key={heading}
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
              className="space-y-4"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-400">
                {heading}
              </p>
              <ul className="space-y-3 text-sm text-gray-300">
                {links.map(({ label, href, external }) => (
                  <motion.li key={label} whileHover={{ x: 4 }}>
                    <a
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="transition hover:text-white"
                    >
                      {label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between"
        >
          <div className="text-xs text-gray-500">
            <p>
              © {currentYear} Atul Kumar Jha. Crafted with curiosity and caffeine.
            </p>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed">
              I build dynamic web applications that blend performance with seamless user experiences.
            <p>
              <a href="/privacy" className="hover:text-gray-300">Privacy Policy</a>
              <span className="mx-2">·</span>
              <a href="/terms" className="hover:text-gray-300">Terms &amp; Conditions</a>
            </p>
          </div>
        </div>

        {/* Links Section */}
        <div className="border-t border-gray-800/50 px-6 py-16">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
            {/* Brand */}
            <div className="space-y-4 col-span-2 md:col-span-1">
              <div className="flex justify-center md:justify-start items-center gap-3">
                <div className="w-12 h-12  rounded-full flex items-center justify-center font-bold text-lg">
                 <img className="rounded-full" src="/assets/atulkumarjha2.jpg" />
                </div>
                <span className="font-semibold">Atul Kumar Jha</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Full-Stack Creator | Designer | Programmer | Innovator & Developer
              </p>
            </div>

            {/* General */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-200">
                General
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:text-white text-gray-400">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white text-gray-400">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white text-gray-400">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white text-gray-400">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Specifics */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-200">
                Specifics
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:text-white text-gray-400">
                    Guest Book
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white text-gray-400">
                    Bucket List
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white text-gray-400">
                    Uses
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white text-gray-400">
                    Attribution
                  </a>
                </li>
              </ul>
            </div>

            {/* More */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-200">More</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:text-white text-gray-400">
                    Book a Call
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white text-gray-400">
                    Links
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white text-gray-400">
                    RSS
                  </a>
                </li>
              </ul>
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
    </footer>
  );
};

export default Footer;
