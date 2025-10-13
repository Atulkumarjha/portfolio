"use client";

import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProjectCard } from "./ui/ProjectCard";
import { ProjectSidebar } from "./ui/ProjectSidebar";
import { ChevronDown, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  gradient: string;
  textColor: string;
  shadowColor: string;
  features: string[];
  techStack: { name: string; icon: string }[];
  url: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  gradient: string;
  textColor: string;
  shadowColor: string;
  features: string[];
  techStack: { name: string; icon: string }[];
  url: string;
}

const projects: Project[] = [
  {
    id: "Moody",
    title: "Moody YourVibeYourPlaylist",
    description:
      "A vibrant space for music lovers to create personalized playlists and discover the unique collections of others.",
    longDescription:
      "A platform designed for music lovers to create, share, and explore playlists. Built to inspire creativity and discovery with seamless performance, engaging visuals, and a modern, community-driven experience.",
    image: "/assets/moody.png",
    gradient:
      "linear-gradient(188.62deg, #6B0D33 49.9%, #DB2777 81.7%, #F472B6 93.88%, #F9D793 113.5%)",
    textColor: "text-pink-300",
    shadowColor: "#DB2777",
    features: [
      "Blazing-fast playlist creation with optimized preloading and smart rendering.",
      "Effortless music discovery through a clean, intuitive interface.",
      "Smooth browsing and exploration with performance tuned for every beat.",
    ],
    techStack: [
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
      { name: "React", icon: "https://cdn.simpleicons.org/react" },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
      { name: "Spotify API", icon: "https://cdn.simpleicons.org/spotify" },
      { name: "Sanity cms", icon: "https://cdn.simpleicons.org/sanity" },
      { name: "Auth.js", icon: "https://cdn.simpleicons.org/nextdns" },
      { name: "markdown", icon: "https://cdn.simpleicons.org/markdown/lightblue" },
    ],
    url: "https://moody-your-vibe-your-playlist.vercel.app/",
  },
  {
    id: "DrumMusic",
    title: "DrumMusic CreateYourOwnSound",
    description:
      "A platform where users can create and enjoy music by tapping buttons that produce unique sounds.",
    longDescription:
      "Unleash your musical creativity! Our platform lets you create and enjoy music by tapping buttons that produce unique sounds. Layer beats, experiment with melodies, and craft your own tracks in a fun, interactive way—perfect for beginners and seasoned music lovers alike.",
    image: "/assets/drum-music.png",
    gradient:
      "linear-gradient(188.62deg, #070E57 49.9%, #2932CB 81.7%, #7980FF 93.88%, #F9D793 113.5%)",
    textColor: "text-blue-300",
    shadowColor: "#2932CB",
    features: [
      "Play realistic drum sounds with keyboard or mouse input, simulating a full drum set.",
      "Record, loop, and layer your own beats to create unique rhythms and compositions",
      "Real-time visual effects respond to your hits, enhancing the music experience.",
    ],
    techStack: [
      { name: "React", icon: "https://cdn.simpleicons.org/react" },
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
      { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
      { name: "Express.js", icon: "https://cdn.simpleicons.org/express" },
    ],
    url: "https://atul-drum-music.netlify.app/",
  },
  {
    id: "TheBlog",
    title: "Stories, tutorials, and lessons",
    description:
      "Sharing knowledge, tips, and tutorials for building scalable and modern web applications, from frontend to backend.",
    longDescription:
      "A space for developers to explore modern web development, share insights, tutorials, and best practices, and stay updated with the tools and technologies powering full-stack innovation.",
    image: "/assets/blog.png",
    gradient:
      "linear-gradient(188.62deg, #134E4A 49.9%, #14B8A6 81.7%, #5EEAD4 93.88%, #F9D793 113.5%)",
    textColor: "text-teal-300",
    shadowColor: "#14B8A6",
    features: [
      "Write, edit, and publish posts with a clean, intuitive editor supporting text, images, and media.",
      "Explore posts by categories, tags, or trending topics with smooth navigation and search functionality.",
      "Enable comments, likes, and sharing to foster community and interaction around your content.",
    ],
    techStack: [
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs" },
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
      { name: "Express", icon: "https://cdn.simpleicons.org/express" },
      { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
    ],
    url: "https://the-blog-by-himanshu.vercel.app/",
  },
  {
    id: "Weather",
    title: "Know the skies before you step outside — live forecasts and alerts at your fingertips.",
    description:
      "Real-time weather updates, forecasts, and insights to keep you prepared wherever you go.",
    longDescription:
      "Stay ahead of the weather with SkyCast — get accurate forecasts, temperature trends, and severe weather alerts anytime, anywhere.",
    image: "/assets/weather.png",
    gradient:
      "linear-gradient(188.62deg, #3D1A7A 49.9%, #7E22CE 81.7%, #C084FC 93.88%, #F9D793 113.5%)",
    textColor: "text-purple-300",
    shadowColor: "#7E22CE",
    features: [
      "Get accurate, up-to-date weather information for any location worldwide.",
      "View hourly, daily, and weekly forecasts with detailed metrics like temperature, humidity, and wind speed.",
      "Animated weather visuals and notifications for severe weather conditions enhance user experience.",
    ],
    techStack: [
      { name: "React", icon: "https://cdn.simpleicons.org/react" },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
      { name: "Express", icon: "https://cdn.simpleicons.org/express" },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
    ],
    url: "https://0xitshimanshu.github.io/WeatherApp/",
  },
  {
    id: "Portfolio",
    title: "Modern Portfolio",
    description:
      "A sleek, modern portfolio showcasing creative web development projects and interactive UI/UX designs.",
    longDescription:
      "PixelPerfect Portfolio is a cutting-edge personal portfolio project designed to highlight creative web development and design skills. It features a fully responsive layout, smooth animations, and interactive components to engage visitors. With optimized performance, dark and light themes, and seamless navigation",
    image: "/assets/portfolio.png",
    gradient:
      "linear-gradient(188.62deg, #6B0D33 49.9%, #DB2777 81.7%, #F472B6 93.88%, #F9D793 113.5%)",
    textColor: "text-pink-300",
    shadowColor: "#DB2777",
    features: [
      "A sleek layout that works seamlessly across devices with smooth animations and interactive elements.",
      "Display creative projects with detailed descriptions, images, and links to live demos or repositories.",
      "Supports theme toggling, optimized performance, and accessibility for an enhanced user experience.",
    ],
    techStack: [
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
      { name: "React", icon: "https://cdn.simpleicons.org/react" },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
      { name: "Stripe", icon: "https://cdn.simpleicons.org/stripe" },
    ],
    url: "https://github.com/Atulkumarjha",
  },
];

export const FeaturedWork: React.FC = () => {
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeProject, setActiveProject] = useState<Project | null>(
    projects.length > 0 ? projects[0] : null
  );
  const [isMobile, setIsMobile] = useState(false);
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(
    projects.length > 0 ? projects[0].id : null
  );

  // Intersection Observer to update active project
  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  // Intersection Observer to update active project
  useEffect(() => {

  // Intersection Observer to update active project
  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  // Intersection Observer to update active project
  useEffect(() => {
    if (isMobile) {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const indexAttr = entry.target.getAttribute("data-index");
          if (!indexAttr) return;
          const project = projects[Number(indexAttr)];
          if (!project) return;

          if (entry.isIntersecting) {
            setActiveProject(project);
          }
        });
      },
      { threshold: 0.5, rootMargin: "0px 0px -30% 0px" }
    );

    const currentRefs = projectRefs.current;
    currentRefs.forEach((card) => card && observer.observe(card));
    return () => {
      currentRefs.forEach((card) => card && observer.unobserve(card));
    };
  }, [isMobile]);

  const handleExpandToggle = (projectId: string) => {
    setExpandedProjectId((prev) => (prev === projectId ? null : projectId));
  };

  return (
    <section id="work" className="relative w-full px-4 sm:px-6 md:px-8">
      <h2 className="relative z-10 mb-8 sm:mb-10 md:mb-12 text-center text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
        <p className="mb-2 sm:mb-3 text-xs font-normal tracking-widest text-black/80 uppercase sm:text-sm md:text-base dark:text-white/70">
  }, []);

  return (
    <section id="work" className="relative w-full px-4 sm:px-6 md:px-8">
      <h2 className="relative z-10 mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-center text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
        <p className="mb-1.5 sm:mb-2 md:mb-3 text-xs font-normal tracking-widest text-black/80 uppercase sm:text-sm md:text-base dark:text-white/70">
          FEATURED PROJECTS
        </p>
        <span className="font-serif">
          <span>PROJECTS IN</span>{" "}
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x font-serif pe-2 tracking-tight italic">
            FOCUS
          </span>
        </span>
      </h2>

      {isMobile ? (
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
          {projects.map((project) => {
            const isExpanded = expandedProjectId === project.id;
            return (
              <MobileProjectCard
                key={project.id}
                project={project}
                isExpanded={isExpanded}
                onToggle={() => handleExpandToggle(project.id)}
              />
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col gap-10 md:gap-12 lg:gap-14 xl:gap-16">
          {projects.map((project, index) => {
            const isActive = activeProject?.id === project.id;
        <div className="flex flex-col gap-12 md:gap-14 lg:gap-16">
          {projects.map((project, index) => {
            const isActive = activeProject?.id === project.id;

            return (
              <div
                key={project.id}
                data-index={index}
                ref={(el) => {
                  if (!isMobile) {
                    projectRefs.current[index] = el;
                  }
                }}
                className="group/project"
              >
                <div className="grid gap-6 md:gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
                  <ProjectCard
                    project={project}
                    isActive={isActive}
                    onHover={() => setActiveProject(project)}
                    onClick={() => project.url && window.open(project.url, "_blank")}
                  />

                  <AnimatePresence mode="wait">
                    {isActive ? (
                      <motion.div
                        key={`${project.id}-desktop`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ type: "spring", stiffness: 140, damping: 20, mass: 0.8 }}
                        className="hidden lg:block"
                      >
                        <ProjectSidebar project={project} className="lg:max-w-md" />
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
      <div className="flex flex-col gap-16">
        {projects.map((project, index) => {
          const isActive = activeProject?.id === project.id;

            return (
              <div
                key={project.id}
                data-index={index}
                ref={(el) => {
                  if (!isMobile) {
                    projectRefs.current[index] = el;
                  }
                }}
                className="group/project"
              >
                <div className="grid gap-6 md:gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
                  <ProjectCard
                    project={project}
                    isActive={isActive}
                    onHover={() => setActiveProject(project)}
                    onClick={() => project.url && window.open(project.url, "_blank")}
                  />

                  <AnimatePresence mode="wait">
                    {isActive ? (
                      <motion.div
                        key={`${project.id}-sidebar`}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 140, 
                          damping: 20, 
                          mass: 0.8
                        }}
                        className="mt-4 sm:mt-6 lg:mt-0 lg:ml-6"
                      >
                        <ProjectSidebar project={project} className="lg:max-w-md" />
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
                <AnimatePresence mode="wait">
                  {isActive ? (
                    <motion.div
                      key={`${project.id}-mobile`}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -16 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="mt-4 sm:mt-6 lg:hidden"
                    >
                      <ProjectSidebar project={project} />
                      key={`${project.id}-desktop`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ type: "spring", stiffness: 140, damping: 20, mass: 0.8 }}
                      className="hidden lg:block"
                    >
                      <ProjectSidebar project={project} className="lg:max-w-md" />
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

interface MobileProjectCardProps {
  project: Project;
  isExpanded: boolean;
  onToggle: () => void;
}

const MobileProjectCard: React.FC<MobileProjectCardProps> = ({
  project,
  isExpanded,
  onToggle,
}) => {
  return (
    <article className="overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md transition-transform duration-300 hover:border-white/30 hover:bg-white/[0.06]">
      <div className="relative h-48 sm:h-56 md:h-64 w-full">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex flex-col gap-1 sm:gap-2 text-white">
          <p className="text-xs uppercase tracking-[0.3em] text-white/70">Featured</p>
          <h3 className="text-xl sm:text-2xl font-semibold leading-tight">{project.title}</h3>
        </div>
      </div>

      <div className="space-y-4 sm:space-y-5 px-4 sm:px-5 pb-4 sm:pb-5 pt-5 sm:pt-6 text-white">
        <p className="text-sm sm:text-base text-white/80">{project.description}</p>

        <div className="flex flex-wrap items-center gap-2">
          {project.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech.name}
              className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-white/15 bg-white/5 px-2.5 sm:px-3 py-1 text-xs text-white/80"
            >
              <img src={tech.icon} alt={tech.name} className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              {tech.name}
            </span>
          ))}
          {project.techStack.length > 3 ? (
            <span className="rounded-full border border-white/15 bg-white/5 px-2.5 sm:px-3 py-1 text-xs text-white/70">
              +{project.techStack.length - 3} more
            </span>
          ) : null}
        </div>

        <div className="flex flex-col gap-2.5 sm:gap-3">
          <button
            type="button"
            onClick={() => project.url && window.open(project.url, "_blank")}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 sm:py-2.5 text-xs font-semibold uppercase tracking-[0.28em] text-white/80 transition hover:border-white/30 hover:bg-white/10"
          >
            Visit project
            <ExternalLink size={14} className="flex-shrink-0" />
          </button>

          <button
            type="button"
            onClick={onToggle}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 sm:py-2.5 text-xs font-semibold uppercase tracking-[0.28em] text-white/80 transition hover:border-white/30 hover:bg-white/10"
            aria-expanded={isExpanded}
          >
            Project details
            <ChevronDown
              size={14}
              className={cn(
                "transition-transform duration-200 flex-shrink-0",
                isExpanded ? "rotate-180" : "rotate-0"
              )}
            />
          </button>
        </div>

        <AnimatePresence initial={false}>
          {isExpanded ? (
            <motion.div
              key="mobile-sidebar"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden pt-2 sm:pt-3"
            >
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3 sm:p-4">
                <ProjectSidebar project={project} />
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <div className="flex flex-col gap-2.5 sm:gap-3">
          <button
            type="button"
            onClick={() => project.url && window.open(project.url, "_blank")}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 sm:py-2.5 text-xs font-semibold uppercase tracking-[0.28em] text-white/80 transition hover:border-white/30 hover:bg-white/10"
          >
            Visit project
            <ExternalLink size={14} className="flex-shrink-0" />
          </button>

          <button
            type="button"
            onClick={onToggle}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 sm:py-2.5 text-xs font-semibold uppercase tracking-[0.28em] text-white/80 transition hover:border-white/30 hover:bg-white/10"
            aria-expanded={isExpanded}
          >
            Project details
            <ChevronDown
              size={14}
              className={cn(
                "transition-transform duration-200 flex-shrink-0",
                isExpanded ? "rotate-180" : "rotate-0"
              )}
            />
          </button>
        </div>

        <AnimatePresence initial={false}>
          {isExpanded ? (
            <motion.div
              key="mobile-sidebar"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden pt-2 sm:pt-3"
            >
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3 sm:p-4">
                <ProjectSidebar project={project} />
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </article>
  );
};
