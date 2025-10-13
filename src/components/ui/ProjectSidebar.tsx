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
    <div className={cn("py-4", className)}>
      <div className="flex">
        <div
          aria-hidden="true"
          className="my-4 mr-4 h-1 min-w-6 rounded-full"
          style={{ backgroundColor: project.shadowColor }}
        />
        <div className="flex flex-col items-start transition-all duration-300">
          <div className="flex items-center gap-3">
            <h3 className="text-foreground font-serif text-3xl font-bold transition-all duration-300">
              {project.title}
            </h3>
          </div>
          <p className="text-muted-foreground my-2 text-base font-light transition-all duration-300">
            {project.longDescription}
          </p>
          <ul className="text-accent-foreground/85 mt-4 flex flex-col gap-y-2 text-base transition-all duration-300">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm transition-all duration-300">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-1 mr-2 size-5 shrink-0 transition-all duration-300"
                  style={{
                    fill: project.shadowColor,
                    color: project.shadowColor,
                    backgroundColor: `${project.shadowColor}20`,
                  }}
                >
                  <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-3 text-sm transition-all duration-300">
            {project.techStack.map((tech, index) => (
              <div key={index} className="opacity-100 transition-all duration-300">
                <span className="inline-flex items-center justify-center rounded-lg border px-3 py-1 text-sm w-fit whitespace-nowrap shrink-0 gap-2 text-black dark:text-white border-gray-300 dark:bg-neutral-900 dark:border-white/[0.14] bg-white/80">
                  <img height="16" width="16" src={tech.icon} alt={tech.name} />
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};