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
      { name: "Spotify API", icon: "https://cdn.simpleicons.org/spotify" },
      { name: "Sanity cms", icon: "https://cdn.simpleicons.org/sanity" },
      { name: "Auth.js", icon: "https://cdn.simpleicons.org/nextdns" },
      {
        name: "markdown",
        icon: "https://cdn.simpleicons.org/markdown/lightblue",
      },
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
    id: "The blog",
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
    title:
      "Know the skies before you step outside — live forecasts and alerts at your fingertips.",
    description:
      "Real-time weather updates, forecasts, and insights to keep you prepared wherever you go.",
    longDescription:
      "Stay ahead of the weather with SkyCast — get accurate forecasts, temperature trends, and severe weather alerts anytime, anywhere.",
    image: "assets/weather.png",
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
    id: "portfolio",
    title:
      "Modern Portfolio",
    description:
      "A sleek, modern portfolio showcasing creative web development projects and interactive UI/UX designs.",
    longDescription:
      "PixelPerfect Portfolio is a cutting-edge personal portfolio project designed to highlight creative web development and design skills. It features a fully responsive layout, smooth animations, and interactive components to engage visitors. With optimized performance, dark and light themes, and seamless navigation",
    image:
      "/assets/portfolio.png",
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
      className="relative mx-auto mt-28 w-full max-w-7xl py-1"
    >
      <h2
        style={{
          textShadow:
            "0px 4px 8px rgba(255,255,255,.05),0px 8px 30px rgba(255,255,255,.25)",
        }}
        className="relative z-2 mb-20 text-5xl font-medium tracking-tight text-balance sm:text-5xl md:mb-36 md:text-6xl text-center"
      >
        <p className="mb-3 text-xs font-normal tracking-widest text-black/80 uppercase md:text-sm dark:text-white/70">
          FEATURED PROJECTS
        </p>
        <span className="font-serif">
          <span>PROJECTS IN</span>{" "}
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x font-serif pe-2 tracking-tight italic">
            FOCUS
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
                onClick={() =>
                  project.url && window.open(project.url, "_blank")
                } // opens URL in new tab
              />
            </div>
          ))}
        </div>

        <ProjectSidebar activeProject={activeProject} />
      </div>
    </section>
  );
};
