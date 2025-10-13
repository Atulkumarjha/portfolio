import React from "react";
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
  techStack: Array<{
    name: string;
    icon: string;
  }>;
}

interface ProjectSidebarProps {
  project: Project;
  className?: string;
}

export const ProjectSidebar: React.FC<ProjectSidebarProps> = ({ project, className }) => {
  return (
    <div className={cn("py-2 sm:py-4 w-full overflow-hidden", className)}>
      <div className="flex w-full">
        <div
          aria-hidden="true"
          className="my-2 sm:my-4 mr-2 sm:mr-4 h-1 min-w-4 sm:min-w-6 rounded-full flex-shrink-0"
          style={{ backgroundColor: project.shadowColor }}
        />
        <div className="flex flex-col items-start transition-all duration-300 min-w-0 flex-1">
          <div className="flex items-center gap-2 sm:gap-3 w-full">
            <h3 className="text-foreground font-serif text-xl sm:text-2xl md:text-3xl font-bold transition-all duration-300 break-words">
              {project.title}
            </h3>
          </div>
          <p className="text-muted-foreground my-1.5 sm:my-2 text-sm sm:text-base font-light transition-all duration-300 w-full">
            {project.longDescription}
          </p>
          <ul className="text-accent-foreground/85 mt-2 sm:mt-4 flex flex-col gap-y-1.5 sm:gap-y-2 text-sm sm:text-base transition-all duration-300 w-full">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start text-xs sm:text-sm transition-all duration-300 w-full">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-0.5 sm:mt-1 mr-1.5 sm:mr-2 size-4 sm:size-5 shrink-0 transition-all duration-300"
    <div className={cn("py-4", className)}>
      <div className="flex">
        <div
          aria-hidden="true"
          className="my-2 sm:my-4 mr-2 sm:mr-4 h-1 min-w-4 sm:min-w-6 rounded-full flex-shrink-0"
          style={{ backgroundColor: project.shadowColor }}
        />
        <div className="flex flex-col items-start transition-all duration-300 min-w-0 flex-1">
          <div className="flex items-center gap-2 sm:gap-3 w-full">
            <h3 className="text-foreground font-serif text-xl sm:text-2xl md:text-3xl font-bold transition-all duration-300 break-words">
              {project.title}
            </h3>
          </div>
          <p className="text-muted-foreground my-1.5 sm:my-2 text-sm sm:text-base font-light transition-all duration-300 w-full">
            {project.longDescription}
          </p>
          <ul className="text-accent-foreground/85 mt-2 sm:mt-4 flex flex-col gap-y-1.5 sm:gap-y-2 text-sm sm:text-base transition-all duration-300 w-full">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start text-xs sm:text-sm transition-all duration-300 w-full">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-0.5 sm:mt-1 mr-1.5 sm:mr-2 size-4 sm:size-5 shrink-0 transition-all duration-300"
                  style={{
                    fill: project.shadowColor,
                    color: project.shadowColor,
                    backgroundColor: `${project.shadowColor}20`,
                  }}
                >
                  <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z" />
                </svg>
                <span className="flex-1 break-words">{feature}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 sm:mt-10 flex flex-wrap gap-2 sm:gap-3 text-xs transition-all duration-300 w-full">
            {project.techStack.map((tech, index) => (
              <div key={index} className="opacity-100 transition-all duration-300">
                <span className="inline-flex max-w-full items-center justify-center gap-1.5 sm:gap-2 rounded-lg border px-2 sm:px-3 py-1 text-xs font-medium text-black transition-colors dark:text-white border-gray-300 dark:bg-neutral-900 dark:border-white/[0.14] bg-white/80">
                  <img height="14" width="14" src={tech.icon} alt={tech.name} className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
                  <span className="truncate">{tech.name}</span>
                {feature}
              </li>
            ))}
          </ul>
          <div className="mt-6 sm:mt-10 flex flex-wrap gap-2 sm:gap-3 text-xs transition-all duration-300 w-full">
            {project.techStack.map((tech, index) => (
              <div key={index} className="opacity-100 transition-all duration-300">
                <span className="inline-flex max-w-full items-center justify-center gap-1.5 sm:gap-2 rounded-lg border px-2 sm:px-3 py-1 text-xs font-medium text-black transition-colors dark:text-white border-gray-300 dark:bg-neutral-900 dark:border-white/[0.14] bg-white/80">
                  <img height="14" width="14" src={tech.icon} alt={tech.name} className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
                  <span className="truncate">{tech.name}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};