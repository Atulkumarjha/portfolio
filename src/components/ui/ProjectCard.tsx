import React from 'react';
import { ArrowRight } from 'lucide-react';

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

interface ProjectCardProps {
  project: Project;
  isActive: boolean;
  onHover: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, isActive, onHover }) => {
  return (
    <div className="flex w-full flex-row will-change-auto">
      <div className="flex flex-col lg:mx-10 lg:w-full">
        <div
          className="border-white-3 relative cursor-pointer overflow-hidden rounded-2xl border bg-[#f2f2f20c] p-1.5 shadow-2xl lg:h-[560px] lg:rounded-3xl lg:p-2 dark:border-white/15"
          onMouseEnter={onHover}
        >
          <div
            className="absolute inset-x-0 top-0 h-px"
            style={{
              background: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 5%, rgba(255, 255, 255, 0.8) 35%, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0.8) 65%, rgba(0, 0, 0, 0) 95%)'
            }}
          />
          <div className="group relative flex size-full flex-col items-center justify-between overflow-hidden rounded-xl lg:rounded-2xl from-black/40 to-transparent transition-all duration-300 dark:bg-linear-to-b">
            <div
              style={{ background: project.gradient }}
              className="absolute inset-0 -z-1"
            />
            <div
              className="absolute inset-x-0 top-px z-10 h-[0.8px] opacity-70"
              style={{
                background: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 20%, rgb(255, 255, 255) 50%, rgba(0, 0, 0, 0) 80%)'
              }}
            />
            <div className={`hidden w-full flex-row items-center justify-between px-12 py-8 lg:flex ${project.textColor}`}>
              <h3 className="max-w-[90%] text-3xl font-serif tracking-wide">
                {project.description}
              </h3>
              <ArrowRight className="size-6" />
            </div>
            <img
              alt={project.title}
              loading="lazy"
              width="1203"
              height="753"
              className="lg:group-hover:translate-y-10 w-full max-w-[85%] translate-y-5 -rotate-3 rounded-t-lg border-[1.5px] border-white/20 transition-all duration-300 will-change-transform lg:block lg:rotate-0 lg:group-hover:scale-[1.08] lg:group-hover:-rotate-3"
              style={{ 
                color: 'transparent',
                boxShadow: `0 0 30px ${project.shadowColor}`
              }}
              src={project.image}
            />
          </div>
        </div>
      </div>
    </div>
  );
};