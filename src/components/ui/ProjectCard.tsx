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
  url?: string; // optional project URL
}

interface ProjectCardProps {
  project: Project;
  isActive: boolean;
  onHover: () => void;
  onClick?: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isActive,
  onHover,
  onClick,
}) => {
  return (
    <div className="flex w-full flex-col lg:flex-row">
      <div className="flex w-full flex-col lg:mx-10">
        {/* Make this div clickable */}
        <div
          className="duration-300 border-white-3 group relative cursor-pointer overflow-hidden rounded-2xl border bg-[#f2f2f20c] p-1.5 shadow-2xl transition-transform dark:border-white/15 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 lg:h-[560px] lg:rounded-3xl lg:p-2"
          onMouseEnter={onHover}
          onFocusCapture={onHover}
          onClick={onClick} // <-- click works here
          role="button"
          tabIndex={0}
          onKeyPress={(e) => {
            if (e.key === 'Enter' && onClick) onClick();
          }}
        >
          <div
            className="absolute inset-x-0 top-0 h-px"
            style={{
              background:
                'linear-gradient(90deg, rgba(0, 0, 0, 0) 5%, rgba(255, 255, 255, 0.8) 35%, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0.8) 65%, rgba(0, 0, 0, 0) 95%)',
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
                background:
                  'linear-gradient(90deg, rgba(0, 0, 0, 0) 20%, rgb(255, 255, 255) 50%, rgba(0, 0, 0, 0) 80%)',
              }}
            />
            <div
              className={`hidden w-full flex-row items-center justify-between px-12 py-8 lg:flex ${project.textColor}`}
            >
              <h3 className="max-w-[90%] text-3xl font-serif tracking-wide">
                {project.description}
              </h3>
              <ArrowRight className="size-6" />
            </div>

            <div className="flex w-full flex-col gap-3 rounded-2xl bg-black/50 px-5 py-6 text-white backdrop-blur-sm lg:hidden">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-serif tracking-wide">
                  {project.title}
                </h3>
                <ArrowRight className="size-5 opacity-70" />
              </div>
              <p className="text-sm text-white/80">{project.description}</p>
            </div>
            <img
              alt={project.title}
              loading="lazy"
              width="1203"
              height="753"
              className="w-full max-w-full rounded-2xl border-[1.5px] border-white/20 object-cover transition-all duration-300 will-change-transform lg:block lg:max-w-[85%] lg:translate-y-5 lg:-rotate-3 lg:rounded-t-lg lg:group-hover:translate-y-10 lg:group-hover:-rotate-3 lg:group-hover:scale-[1.08]"
              style={{
                color: 'transparent',
                boxShadow: `0 0 30px ${project.shadowColor}`,
              }}
              src={project.image}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
