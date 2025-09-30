import React, { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "./ui/ProjectCard";
import { ProjectSidebar } from "./ui/ProjectSidebar";

const projects = [
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
      { name: "Motion.dev", icon: "https://cdn.simpleicons.org/framer" },
      { name: "Sanity cms", icon: "https://cdn.simpleicons.org/sanity" },
      { name: "Auth.js", icon: "https://cdn.simpleicons.org/nextdns" },
      {
        name: "markdown",
        icon: "https://cdn.simpleicons.org/markdown/lightblue",
      },
    ],
    url: "https://moody-your-vibe-your-playlist.vercel.app/"
  },
  {
    id: "zenith-minds",
    title: "Zenith Minds",
    description:
      "A platform connecting students and instructors for enhanced learning experiences.",
    longDescription:
      "An innovative educational platform that bridges the gap between students and instructors, offering personalized learning paths, interactive content, and real-time collaboration tools for enhanced educational outcomes.",
    image:
      "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gradient:
      "linear-gradient(188.62deg, #070E57 49.9%, #2932CB 81.7%, #7980FF 93.88%, #F9D793 113.5%)",
    textColor: "text-blue-300",
    shadowColor: "#2932CB",
    features: [
      "Interactive learning modules with real-time feedback.",
      "Advanced instructor dashboard for course management.",
      "AI-powered personalized learning recommendations.",
    ],
    techStack: [
      { name: "React", icon: "https://cdn.simpleicons.org/react" },
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
      { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql" },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
      { name: "Redis", icon: "https://cdn.simpleicons.org/redis" },
    ],
  },
  {
    id: "snippix",
    title: "Snippix",
    description:
      "A platform for creating and sharing code snippets with a clean and intuitive design.",
    longDescription:
      "A developer-focused platform for creating, organizing, and sharing code snippets with syntax highlighting, version control, and team collaboration features.",
    image:
      "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gradient:
      "linear-gradient(188.62deg, #134E4A 49.9%, #14B8A6 81.7%, #5EEAD4 93.88%, #F9D793 113.5%)",
    textColor: "text-teal-300",
    shadowColor: "#14B8A6",
    features: [
      "Advanced syntax highlighting for 100+ languages.",
      "Team collaboration with shared snippet libraries.",
      "Version control and snippet history tracking.",
    ],
    techStack: [
      { name: "Vue.js", icon: "https://cdn.simpleicons.org/vuedotjs" },
      { name: "Express", icon: "https://cdn.simpleicons.org/express" },
      { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
    ],
  },
  {
    id: "portfolio",
    title: "Personal Portfolio",
    description:
      "Design Unleashed: A Captivating Portfolio Showcasing Innovative Web Development and UI/UX",
    longDescription:
      "A modern, responsive portfolio website showcasing creative web development projects with smooth animations, interactive elements, and cutting-edge design principles.",
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gradient:
      "linear-gradient(188.62deg, #3D1A7A 49.9%, #7E22CE 81.7%, #C084FC 93.88%, #F9D793 113.5%)",
    textColor: "text-purple-300",
    shadowColor: "#7E22CE",
    features: [
      "Responsive design with smooth animations.",
      "Interactive project showcases and galleries.",
      "Optimized performance and accessibility.",
    ],
    techStack: [
      { name: "React", icon: "https://cdn.simpleicons.org/react" },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
      { name: "Framer Motion", icon: "https://cdn.simpleicons.org/framer" },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
    ],
  },
  {
    id: "star-forge",
    title: "StarForge",
    description:
      "A sleek AI SaaS landing page with a user-friendly design that enhances engagement.",
    longDescription:
      "A cutting-edge AI SaaS platform landing page featuring modern design principles, conversion optimization, and seamless user experience to drive engagement and subscriptions.",
    image:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gradient:
      "linear-gradient(188.62deg, #6B0D33 49.9%, #DB2777 81.7%, #F472B6 93.88%, #F9D793 113.5%)",
    textColor: "text-pink-300",
    shadowColor: "#DB2777",
    features: [
      "Conversion-optimized landing page design.",
      "Interactive AI feature demonstrations.",
      "Advanced analytics and user tracking.",
    ],
    techStack: [
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
      { name: "React", icon: "https://cdn.simpleicons.org/react" },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
      { name: "Stripe", icon: "https://cdn.simpleicons.org/stripe" },
    ],
  },
];

export const FeaturedWork: React.FC = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = 0; i < projectRefs.current.length; i++) {
        const element = projectRefs.current[i];
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;

          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            if (activeProject.id !== projects[i].id) {
              setActiveProject(projects[i]);
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeProject.id]);

  return (
    <section
      id="work"
      className="relative mx-auto mt-28 w-full max-w-7xl py-10"
    >
      <h2
        style={{
          textShadow:
            "0px 4px 8px rgba(255,255,255,.05),0px 8px 30px rgba(255,255,255,.25)",
        }}
        className="relative z-2 mb-20 text-5xl font-medium tracking-tight text-balance sm:text-5xl md:mb-36 md:text-6xl text-center"
      >
        <p className="mb-3 text-xs font-normal tracking-widest text-black/80 uppercase md:text-sm dark:text-white/70">
          FEATURED CASE STUDIES
        </p>
        <span className="font-serif">
          <span>Curated</span>{" "}
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x font-serif pe-2 tracking-tight italic">
            work
          </span>
        </span>
      </h2>

      <div className="relative mx-auto flex w-full">
        <div className="mx-auto grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2 lg:flex lg:max-w-[65%] lg:flex-col lg:gap-y-24">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[index] = el)}
            >
              <ProjectCard
  project={project}
  isActive={activeProject.id === project.id}
  onHover={() => setActiveProject(project)}
  onClick={() => project.url && window.open(project.url, "_blank")} // opens URL in new tab
/>
            </div>
          ))}
        </div>

        <ProjectSidebar activeProject={activeProject} />
      </div>

      <button className="group flex w-fit items-center justify-center gap-2 text-neutral-800 transition-colors hover:text-black dark:text-white-1 mx-auto md:mt-20">
        See more projects
        <div className="size-[25px] overflow-hidden rounded-full border border-neutral-300 bg-white/50 transition-all duration-500 group-hover:bg-neutral-200 dark:border-white/10 dark:bg-white/5 dark:group-hover:bg-white/10">
          <div className="flex w-12 -translate-x-1/2 transition-transform duration-500 ease-in-out group-hover:translate-x-0">
            <span className="flex size-6">
              <ArrowRight className="m-auto size-[14px]" />
            </span>
            <span className="flex size-6">
              <ArrowRight className="m-auto size-[14px]" />
            </span>
          </div>
        </div>
      </button>
    </section>
  );
};
