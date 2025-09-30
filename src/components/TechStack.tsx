import React, { useState } from "react";
import { FaLock, FaCode } from "react-icons/fa";
import {
  SiNextdotjs,
  SiNestjs,
  SiMongodb,
  SiRedis,
  SiRabbitmq,
  SiTurborepo,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiTypescript,
  SiSwagger,
  SiPostgresql,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiZod,
  SiDocker,
  SiGraphql,
  SiVite,
  SiPrisma,
} from "react-icons/si";

import { FaServer } from "react-icons/fa";
import { ExternalLink } from "lucide-react";

interface TechButton {
  name: string;
  url: string;
  color: string;
  bgColor: string;
  icon: React.ReactNode;
}

const techStack: TechButton[] = [
  {
    name: "Next.js",
    url: "https://nextjs.org/docs",
    color: "text-gray-300",
    bgColor: "bg-gray-600/10 hover:bg-gray-600/20",
    icon: <SiNextdotjs />,
  },
  {
    name: "Nest.js",
    url: "https://docs.nestjs.com",
    color: "text-gray-300",
    bgColor: "bg-gray-600/10 hover:bg-gray-600/20",
    icon: <SiNestjs />,
  },
  {
    name: "MongoDB",
    url: "https://docs.mongodb.com",
    color: "text-gray-300",
    bgColor: "bg-gray-600/10 hover:bg-gray-600/20",
    icon: <SiMongodb />,
  },
  {
    name: "Redis",
    url: "https://redis.io/docs",
    color: "text-gray-300",
    bgColor: "bg-gray-600/10 hover:bg-gray-600/20",
    icon: <SiRedis />,
  },
  {
    name: "RabbitMQ",
    url: "https://www.rabbitmq.com/documentation.html",
    color: "text-gray-300",
    bgColor: "bg-gray-600/10 hover:bg-gray-600/20",
    icon: <SiRabbitmq />,
  },
  {
    name: "Turbo-Repo",
    url: "https://turbo.build/repo/docs",
    color: "text-gray-300",
    bgColor: "bg-gray-600/10 hover:bg-gray-600/20",
    icon: <SiTurborepo />,
  },
  {
    name: "Tailwind CSS",
    url: "https://tailwindcss.com/docs",
    color: "text-gray-300",
    bgColor: "bg-gray-600/10 hover:bg-gray-600/20",
    icon: <SiTailwindcss />,
  },
  {
    name: "Git",
    url: "https://git-scm.com/doc",
    color: "text-gray-300",
    bgColor: "bg-gray-600/10 hover:bg-gray-600/20",
    icon: <SiGit />,
  },
  {
    name: "GitHub",
    url: "https://docs.github.com",
    color: "text-gray-300",
    bgColor: "bg-gray-600/10 hover:bg-gray-600/20",
    icon: <SiGithub />,
  },
  {
    name: "TypeScript",
    url: "https://www.typescriptlang.org/docs",
    color: "text-gray-300",
    bgColor: "bg-gray-600/10 hover:bg-gray-600/20",
    icon: <SiTypescript />,
  },
  {
    name: "NextAuth",
    url: "https://next-auth.js.org/getting-started/introduction",
    color: "text-gray-300",
    bgColor: "bg-gray-600/10 hover:bg-gray-600/20",
    icon: <FaLock />,
  },
  {
    name: "RESTful APIs",
    url: "https://restfulapi.net",
    color: "text-gray-300",
    bgColor: "bg-gray-600/10 hover:bg-gray-600/20",
    icon: <FaServer />,
  },
  {
    name: "Shadcn UI",
    url: "https://ui.shadcn.com/docs",
    color: "text-gray-300",
    bgColor: "bg-gray-600/10 hover:bg-gray-600/20",
    icon: <SiReact />,
  }, // fallback: React icon
  {
    name: "Docker",
    url: "https://docs.docker.com",
    color: "text-gray-300",
    bgColor: "bg-gray-600/10 hover:bg-gray-600/20",
    icon: <SiDocker />,
  },
  {
    name: "Swagger",
    url: "https://swagger.io/docs",
    color: "text-gray-300",
    bgColor: "bg-gray-600/10 hover:bg-gray-600/20",
    icon: <SiSwagger />,
  },
  {
    name: "PostgreSQL",
    url: "https://www.postgresql.org/docs",
    color: "text-gray-300",
    bgColor: "bg-gray-600/10 hover:bg-gray-600/20",
    icon: <SiPostgresql />,
  },
  {
    name: "React.js",
    url: "https://reactjs.org/docs",
    color: "text-gray-300",
    bgColor: "bg-gray-600/10 hover:bg-gray-600/20",
    icon: <SiReact />,
  },
  {
    name: "Node.js",
    url: "https://nodejs.org/en/docs",
    color: "text-gray-300",
    bgColor: "bg-gray-600/10 hover:bg-gray-600/20",
    icon: <SiNodedotjs />,
  },
  {
    name: "Express.js",
    url: "https://expressjs.com/en/4x/api.html",
    color: "text-gray-300",
    bgColor: "bg-gray-600/10 hover:bg-gray-600/20",
    icon: <SiExpress />,
  },
  {
    name: "Zod",
    url: "https://zod.dev",
    color: "text-gray-300",
    bgColor: "bg-gray-600/10 hover:bg-gray-600/20",
    icon: <SiZod />,
  },
  {
    name: "GraphQL",
    url: "https://graphql.org/learn/",
    color: "text-gray-300",
    bgColor: "bg-gray-600/10 hover:bg-gray-600/20",
    icon: <SiGraphql />,
  },
  {
    name: "Vite",
    url: "https://vitejs.dev/guide/",
    color: "text-gray-300",
    bgColor: "bg-gray-600/10 hover:bg-gray-600/20",
    icon: <SiVite />,
  },
  {
    name: "Prisma",
    url: "https://www.prisma.io/docs/",
    color: "text-gray-300",
    bgColor: "bg-gray-600/10 hover:bg-gray-600/20",
    icon: <SiPrisma />,
  },
  {
    name: "VS Code",
    url: "https://code.visualstudio.com/docs",
    color: "text-gray-300",
    bgColor: "bg-gray-600/10 hover:bg-gray-600/20",
    icon: <FaCode />,
  },
];

const TechButton: React.FC<{ tech: TechButton }> = ({ tech }) => {
  return (
    <div className="relative">
      <button
        className={`
          group relative flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-gray-700/50
          ${tech.bgColor} ${tech.color} w-full h-12 min-w-[140px]
          transition-all duration-300 ease-out
          hover:border-gray-600/70 hover:scale-105 hover:shadow-lg hover:shadow-gray-900/20
          backdrop-blur-sm
        `}
        onClick={() => window.open(tech.url, "_blank")}
      >
        {tech.icon && <span className="w-5 h-5">{tech.icon}</span>}
        <span className="text-sm font-medium text-center truncate">
          {tech.name}
        </span>
        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-70 transition-opacity duration-200" />
      </button>
    </div>
  );
};

const TechStack: React.FC = () => {
  return (
    <section className="min-h-full m-[300px] bg-transparent flex flex-col items-center justify-center p-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <div className="mb-12">
          <h2 className="mb-3 text-xs font-normal tracking-widest text-black/80 uppercase md:text-sm dark:text-white/70">
            MY SKILLS
          </h2>
          <h1 className="text-6xl md:text-7xl font-light text-white mb-2 font-serif">
            The Tech{" "}
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x font-serif pe-2 tracking-tight italic">Alchemy</span>
          </h1>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {techStack.map((tech, index) => (
            <TechButton key={index} tech={tech} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
