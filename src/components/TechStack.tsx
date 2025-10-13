import React from "react";
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
        type="button"
        className={`
          group relative flex h-14 items-center justify-center rounded-lg border border-gray-700/50
          ${tech.bgColor} ${tech.color} w-full px-3 py-2 sm:h-12 sm:gap-2 md:gap-1.5
          transition-all duration-300 ease-out
          hover:border-gray-600/70 hover:scale-105 hover:shadow-lg hover:shadow-gray-900/20
          backdrop-blur-sm
        `}
        onClick={() => window.open(tech.url, "_blank")}
        aria-label={tech.name}
      >
        {tech.icon && (
          <span className="flex h-8 w-8 items-center justify-center text-xl sm:h-5 sm:w-5 sm:text-base md:h-4 md:w-4 md:text-sm">
            {tech.icon}
          </span>
        )}
        <span className="sr-only">
          {tech.name}
        </span>
        <span className="hidden truncate text-xs font-medium sm:inline text-center md:text-sm">
          {tech.name}
        </span>
        <ExternalLink className="hidden h-3 w-3 opacity-0 transition-opacity duration-200 sm:block group-hover:opacity-70" />
      </button>
    </div>
  );
};

const TechStack: React.FC = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-8 sm:gap-10 bg-transparent text-center px-4 sm:px-6">
      <div>
        <h2 className="mb-2 sm:mb-3 text-xs font-normal uppercase tracking-[0.4em] text-white/70">
          MY SKILLS
        </h2>
        <h3 className="font-serif text-3xl font-light text-white sm:text-4xl md:text-5xl lg:text-6xl">
          The Tech
          <span className="ml-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x italic">
            Alchemy
          </span>
        </h3>
      </div>

      <div className="grid w-full max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {techStack.map((tech, index) => (
          <TechButton key={index} tech={tech} />
        ))}
      </div>
    </section>
  );
};

export default TechStack;
