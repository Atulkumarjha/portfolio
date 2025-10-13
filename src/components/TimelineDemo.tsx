import { MapPin, Briefcase } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface Experience {
  id: string;
  period: string;
  company: string;
  location?: string;
  type: string;
  role: string;
  achievements: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    id: '1',
    period: 'Dec 2024 - Present',
    company: 'Blowtrumpet',
    location: 'Greater Kailash-II (New Delhi), India',
    type: "On-site",
    role: 'Software developer (SDE-I)',
    achievements: [
      'Designed and developed a scalable streaming platform connecting brands with content creators, enabling seamless campaign creation, management, and analytics tracking for sponsored content.',
      'Implemented real-time analytics and reporting dashboards for streamers and brands, providing insights on views, engagement, and ad performance to optimize campaigns.',
      'Built dynamic widget system for live streams, allowing streamers to integrate brand content effortlessly with customizable overlays and interactive elements.',
      'Optimized platform performance using Next.js, React, and Tailwind CSS, ensuring smooth, low-latency streaming experiences for viewers and minimal load times for content.',
      'Integrated secure payment gateways and campaign management tools, streamlining brand payouts and automated revenue tracking for streamers.',
      'Collaborated with cross-functional teams to ensure compliance with data privacy standards and enhance user experience for both streamers and brands, while maintaining high code quality and robust backend architecture.',
    ],
    technologies: [
      'TypeScript',
      'Next.js',
      'MongoDB',
      'Redis',
      'Tailwind CSS',
      'RabbitMQ',
      'Turborepo',
      'GIT',
      'Github',
      'NextAuth',
      'Restful APIs',
      'Shadcn UI',
      'Docker',
      'Swagger',
      'PostreSQL',
      'Nest.js'
    ],
  },
  {
    id: '2',
    period: 'JAN 2025 - Present',
    company: 'Github',
    type: "Remote",
    role: 'Open Source Contributor',
    achievements: [
      'Contributed to open-source projects with early stage start-ups, improving code quality, feature implementations, and documentation.',
      'Engaged with developer communities, collaborating on innovative solutions and best practices.',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Accertinity UI', 'Nest.js'],
  },
];

export default function ExperienceTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState({ percentage: 0, offset: 0 });

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timelineRect = timelineRef.current.getBoundingClientRect();
      const timelineHeight = timelineRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      // scroll percentage from 0 (top) to 1 (bottom)
      let scrollPercentage = Math.min(Math.max(-timelineRect.top / (timelineHeight - viewportHeight), 0), 1);

      // offset in % for avatar
      const avatarOffset = scrollPercentage * 100;

      setScrollProgress({
        percentage: scrollPercentage,
        offset: avatarOffset,
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
  <div ref={timelineRef} className="mx-auto w-full max-w-6xl px-4 md:px-10 py-16 sm:py-20">
      <h2
        className="relative z-2 text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl text-center mb-4 md:mb-0 max-w-3xl mx-auto"
        style={{
          textShadow:
            'rgba(255, 255, 255, 0.05) 0px 4px 8px, rgba(255, 255, 255, 0.25) 0px 8px 30px',
        }}
      >
        <p className="mb-3 font-mono text-xs font-normal tracking-widest text-black/80 uppercase md:text-sm dark:text-white/70">
          The Experience
        </p>
        <span className="font-serif">
          <span>Experience That Brings </span>
          <span className="bg-gradient-to-r from-pink-600 via-blue-500 to-pink-600 bg-clip-text text-transparent animate-gradient-x italic pe-2">
            Ideas to Life
          </span>
        </span>
      </h2>

      <div className="relative mx-auto mt-20 mb-20 max-w-7xl">
  <div className="flex w-full flex-col gap-10 ps-12 sm:ps-14 md:ps-0 md:gap-10">
          {experiences.map((exp) => (
            <article
              key={exp.id}
              className="grid grid-cols-1 gap-6 py-10 first:pt-0 last:pb-0 md:grid-cols-[2fr_1fr_4fr]"
            >
              <div className="w-full lg:max-w-sm">
                <div className="flex flex-col items-start gap-y-3 text-sm font-light">
                  <time
                    className="text-xs font-medium tracking-wide uppercase text-neutral-500 dark:text-neutral-400"
                    dateTime={exp.period}
                  >
                    {exp.period}
                  </time>
                  <div className="flex items-center gap-2">
                    <h2 className="font-serif text-2xl font-bold text-neutral-900 md:text-3xl dark:text-neutral-100 tracking-wide">
                      {exp.company}
                    </h2>
                  </div>
                  <div className="flex flex-col gap-2">
                    {exp.location && (
                      <div className="flex items-center gap-1.5 text-neutral-500 dark:text-neutral-400">
                        <MapPin className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
                        <span className="text-xs sm:text-sm">{exp.location}</span>
                      </div>
                    )}
                    {exp.type && (
                      <div className="flex items-center gap-1.5 text-neutral-500 dark:text-neutral-400">
                        <Briefcase className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
                        <span className="text-xs font-medium sm:text-sm">
                          {exp.type === 'Remote' ? 'Remote work' : 'On-site'}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="hidden md:block"></div>

              <div className="relative w-full">
                <div className="flex flex-col gap-y-6 text-xs leading-relaxed md:text-sm">
                  <header>
                    <h3 className="font-serif text-xl font-bold text-neutral-900 sm:text-2xl md:text-3xl dark:text-neutral-100 tracking-wide">
                      {exp.role}
                    </h3>
                  </header>

                  <section aria-label="Key achievements">
                    <ul className="flex list-none flex-col gap-y-3 text-sm text-neutral-700 dark:text-neutral-300/90">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="leading-relaxed"
                          dangerouslySetInnerHTML={{
                            __html: achievement.replace(
                              /\*\*(.*?)\*\*/g,
                              '<strong class="font-semibold text-neutral-900 dark:text-neutral-200">$1</strong>'
                            ),
                          }}
                        />
                      ))}
                    </ul>
                  </section>

                  <section aria-label="Technologies used">
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex max-w-full items-center justify-center rounded-lg border px-3 py-1 text-xs font-mono bg-white text-black transition-colors dark:bg-neutral-900 border-neutral-200 dark:border-white/[0.14] dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800 sm:text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Timeline line and avatar */}
        <div className="absolute top-0 h-full w-8 max-md:ms-2 md:left-[calc(32%_-_1rem)]">
          <div className="relative h-full w-full">
            <div
              className="absolute -left-0.5 z-10 flex"
              style={{ top: 0, height: '100%', transform: `translateY(${scrollProgress.offset}%)` }}
            >
              <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white dark:border-neutral-950 shadow-md">
                <img
                  src="/assets/atulkumarjha2.jpg" // <-- replace with your image path
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute top-0 bottom-0 left-1/2 w-1.5 -translate-x-1/2 rounded-full dark:bg-neutral-800 bg-neutral-200 shadow-[inset_0_2px_1.5px_rgba(165,174,184,0.62)]">
              <div
                className="absolute inset-0 w-full origin-top rounded-full bg-gradient-to-t from-pink-600 from-[0%] via-blue-500 via-[10%] to-transparent"
                style={{ transform: `scaleY(${scrollProgress.percentage})` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
