import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ExternalLink, Code2, FileText, Music, Satellite, Palette, NotebookPen } from 'lucide-react';
import { FaSpotify } from 'react-icons/fa';

function Tool() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const toolsShowcase = [
    {
      icon: Code2,
      label: "Primary Stack",
      description: "Next.js, TypeScript, Tailwind, and Framer Motion drive most of my shipping work.",
    },
    {
      icon: Palette,
      label: "Design Toolkit",
      description: "Figma for systems, Raycast for speed, and Notion for long-form briefs.",
    },
    {
      icon: NotebookPen,
      label: "Quality & Ops",
      description: "Linear for roadmaps, Vercel for previews, and Playwright for confidence checks.",
    },
    {
      icon: Satellite,
      label: "Inspiration",
      description: "I collect reference systems from world-class teams and publish annotated breakdowns.",
    },
  ];

  const guestbookHighlights = [
    {
      quote: "Atul shipped a production-ready experience in under two weeks—detailed documentation included.",
      name: "Jeya Prasad",
      role: "Founder, Storylens",
    },
    {
      quote: "His build quality is elite. Our marketing site finally feels fast, modular, and easy to iterate on.",
      name: "Harshita Chauhan",
      role: "Product Marketing, Clarify",
    },
  ];

  const favouritePlaylists = [
    {
      title: "Soul",
      artist: "Mixed Artists",
      origin: "Atul's playlist",
      cover: "https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      title: "Lover",
      artist: "Taylor Swift",
      origin: "R&B / Electronica",
      cover: "https://images.pexels.com/photos/1648790/pexels-photo-1648790.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  const [primaryTrack, ...additionalTracks] = favouritePlaylists;
  const trackFallback = {
    title: "Another Story",
    artist: "Nicholas Hooper",
    origin: "Harry Potter Soundtrack",
    cover: "https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&w=400",
  };
  const resolvedTrack = primaryTrack ?? trackFallback;

  return (
    <div className="transition-colors duration-300 px-4 sm:px-6 md:px-8">
      <div className="relative mx-auto flex w-full flex-col gap-8 sm:gap-10 md:gap-12">
    <div className="transition-colors duration-300">
      <div className="relative mx-auto flex w-full flex-col gap-12">
        {/* Hero Section */}
        <div
          className={`transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 
            className="relative z-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-center mb-4 sm:mb-6 md:mb-8 max-w-4xl mx-auto"
            style={{
              textShadow: 'rgba(255, 255, 255, 0.05) 0px 4px 8px, rgba(255, 255, 255, 0.25) 0px 8px 30px'
            }}
          >
              <p className="mb-2 sm:mb-3 font-mono text-xs font-normal tracking-widest text-black/80 uppercase sm:text-sm md:text-base dark:text-white/70">
                Inside the buildroom
              </p>
              <span className="font-serif">
                <span className="text-gray-900 dark:text-white">Peek inside the toolkit that keeps</span>{' '}
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent font-serif italic tracking-tight">
                  every project moving
                </span>
              </span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div
          className={`mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 transition-all duration-1000 delay-300 lg:grid-cols-3 ${
        <div 
          className={`mt-12 grid grid-cols-1 gap-6 transition-all duration-1000 delay-300 sm:mt-16 md:grid-cols-12 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Uses Card */}
          <Link
            href="/uses"
            className="group relative flex min-h-[280px] sm:min-h-[300px] md:min-h-[320px] lg:min-h-[340px] flex-col justify-between overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 sm:col-span-2 lg:col-span-1"
            className="group relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 md:col-span-12 lg:col-span-4"
          >
            <div className="group relative flex size-full flex-col justify-between overflow-hidden rounded-xl bg-transparent transition-all duration-500 transform-gpu hover:-translate-y-1">
              
              {/* Hover Arrow */}
              <div className="absolute right-4 bottom-4 z-50 flex h-9 w-9 rotate-6 items-center justify-center rounded-full bg-black/15 dark:bg-white/15 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-[-8px] group-hover:rotate-0 group-hover:opacity-100">
                <ExternalLink className="h-5 w-5 text-gray-700 dark:text-gray-200" />
              </div>

              {/* Content Area */}
              <div className="size-full relative">
                {/* Gradient Overlays */}
                <div className="absolute inset-y-0 left-0 z-20 w-1/5 bg-gradient-to-r from-white dark:from-gray-800 to-transparent group-hover:from-blue-50 dark:group-hover:from-blue-900/20 transition-all duration-500"></div>
                <div className="absolute inset-y-0 right-0 z-20 w-1/5 bg-gradient-to-l from-white dark:from-gray-800 to-transparent group-hover:from-blue-50 dark:group-hover:from-blue-900/20 transition-all duration-500"></div>
                
                {/* Tools Icons */}
                <div className="mt-6 sm:mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 transition-all duration-500 ease-in-out">
                  {[
                    { name: 'Code2', delay: 'delay-200', size: 'size-[50px] sm:size-[60px] md:size-[70px] lg:size-[80px]' },
                    { name: 'FileText', delay: 'delay-100', size: 'size-[48px] sm:size-[58px] md:size-[68px] lg:size-[75px]' },
                    { name: 'Code2', delay: 'delay-0', size: 'size-[54px] sm:size-[64px] md:size-[74px] lg:size-[85px]' },
                    { name: 'FileText', delay: 'delay-100', size: 'size-[48px] sm:size-[58px] md:size-[68px] lg:size-[75px]' },
                    { name: 'Music', delay: 'delay-200', size: 'size-[50px] sm:size-[60px] md:size-[70px] lg:size-[80px]' }
                  ].map((tool, index) => (
                    <div key={index} className="group/tool inline-block text-center">
                      <div className={`rounded-lg sm:rounded-xl border-2 border-transparent p-1 sm:p-1.5 md:p-2 transition-all duration-500 group-hover:border-indigo-400 ${tool.size} ${tool.delay} group-hover:-translate-y-2 sm:group-hover:-translate-y-3 transform-gpu`}>
                        <div className="grid h-full place-items-center rounded-md sm:rounded-lg border-2 border-gray-100 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 shadow-inner hover:shadow-lg transition-all duration-300">
                          {tool.name === 'Code2' && <Code2 className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-blue-600 dark:text-blue-400" />}
                          {tool.name === 'FileText' && <FileText className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-green-600 dark:text-green-400" />}
                          {tool.name === 'Music' && <Music className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-purple-600 dark:text-purple-400" />}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Text Content */}
              <div className="pointer-events-none z-10 flex flex-col gap-1.5 sm:gap-2 md:gap-3 p-3 sm:p-4 md:p-5">
                <h3 className="font-mono text-xs sm:text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">Uses</h3>
                <p className="text-base sm:text-lg md:text-xl font-semibold tracking-wide text-gray-700 dark:text-gray-300 leading-tight">
                  Dive into the exact hardware, software, and rituals I rely on every week.
                </p>
                <ul className="space-y-0.5 sm:space-y-1 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  {toolsShowcase.slice(0, 3).map(({ label, description }) => (
                    <li key={label} className="flex items-start gap-1.5 sm:gap-2">
                      <span className="mt-1 h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-indigo-400/80 flex-shrink-0" />
                      <span className="leading-snug text-xs sm:text-sm">
                        <span className="font-medium text-gray-700 dark:text-gray-200">{label}:</span> {description}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tl from-white/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>
          </Link>

          {/* Guestbook Card */}
          <Link
            href="/guestbook"
            className="group relative flex min-h-[280px] sm:min-h-[300px] md:min-h-[320px] lg:min-h-[340px] w-full cursor-pointer flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
            className="group relative col-span-12 flex min-h-[280px] w-full cursor-pointer flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 md:col-span-6 lg:col-span-4"
          >
            <div className="group relative flex size-full flex-col justify-between overflow-hidden rounded-xl bg-transparent transition-all duration-500 transform-gpu hover:-translate-y-1">
              
              {/* Hover Arrow */}
              <div className="absolute right-4 bottom-4 z-50 flex h-9 w-9 rotate-6 items-center justify-center rounded-full bg-black/15 dark:bg-white/15 opacity-0 transition-all duration-500 group-hover:translate-y-[-8px] group-hover:rotate-0 group-hover:opacity-100">
                <ExternalLink className="h-5 w-5 text-gray-700 dark:text-gray-200" />
              </div>

              {/* Background Pattern */}
              <div className="size-full relative">
                <div className="absolute bottom-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] [background-size:16px_16px] opacity-30"></div>
                
                {/* Decorative SVG Elements */}
                <div className="absolute top-0 left-2 sm:left-4 transform -rotate-12 transition-transform duration-700 group-hover:rotate-6">
                  <div className="w-24 h-32 sm:w-28 sm:h-36 md:w-32 md:h-40 bg-gradient-to-br from-pink-400 to-purple-600 rounded-lg shadow-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                </div>
                
                <div className="absolute top-6 sm:top-8 right-2 sm:right-4 transform rotate-12 transition-transform duration-700 group-hover:-rotate-6">
                  <div className="w-28 h-36 sm:w-32 sm:h-40 md:w-36 md:h-44 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-lg shadow-lg opacity-15 group-hover:opacity-25 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Content */}
              <div className="pointer-events-none z-10 flex flex-col gap-1.5 sm:gap-2 md:gap-3 p-3 sm:p-4 md:p-5">
                <h3 className="font-mono text-xs sm:text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">Guestbook</h3>
                <p className="text-base sm:text-lg md:text-xl font-semibold tracking-wide text-gray-700 dark:text-gray-300 leading-tight">
                  Leave a note or read what collaborators are saying.
                </p>
                <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  {guestbookHighlights.map(({ quote, name, role }, index) => (
                    <blockquote key={index} className="rounded-md sm:rounded-lg border border-gray-200/60 dark:border-gray-700/60 bg-white/50 dark:bg-gray-800/40 p-2 sm:p-2.5 md:p-3 shadow-sm">
                      <p className="italic leading-relaxed text-gray-700 dark:text-gray-200 text-xs sm:text-sm line-clamp-2">"{quote}"</p>
                      <p className="mt-1 sm:mt-1.5 text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gray-400 dark:text-gray-500 truncate">
                        {name} · {role}
                      </p>
                    </blockquote>
                  ))}
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tl from-white/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>
          </Link>

          {/* Spotify Card */}
          <a
            href="https://open.spotify.com/playlist/4u4aNv2oc6YOFObfqAUSK0"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex min-h-[280px] sm:min-h-[300px] md:min-h-[320px] lg:min-h-[340px] cursor-pointer flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
            className="group relative col-span-12 flex min-h-[280px] cursor-pointer flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 md:col-span-6 lg:col-span-4"
          >
            <div className="group flex size-full flex-col justify-between overflow-hidden rounded-xl bg-transparent transition-all duration-500 transform-gpu hover:-translate-y-1">
              
              {/* Background Accent */}
              <div 
                className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-25"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/25 via-emerald-400/10 to-emerald-600/20 blur-3xl" />
                <div className="absolute inset-0 flex items-center justify-center text-emerald-400/40">
                  <FaSpotify className="h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40" />
                </div>
              </div>

              <div className="relative h-full p-3 sm:p-4 md:p-5">
                {/* Header */}
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Music className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                  </div>
                   <h2 className="font-serif text-base sm:text-lg md:text-xl font-medium tracking-wide text-gray-900 dark:text-white">
                    Currently looping
                  </h2>
                </div>

                {/* Track Info */}
                <div className="space-y-1 sm:space-y-1.5">
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-tight">
                    I'm listening to{' '}
                    <span className="font-medium text-gray-900 dark:text-white">{resolvedTrack.title}</span>
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-tight">
                    by{' '}
                    <span className="font-medium text-gray-900 dark:text-white">{resolvedTrack.artist}</span>
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-tight">
                    from{' '}
                    <span className="font-medium text-gray-900 dark:text-white">{resolvedTrack.origin}</span>
                  </p>
                  {additionalTracks.length > 0 && (
                    <div className="pt-1.5 sm:pt-2">
                      <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.35em] text-gray-400 dark:text-gray-500">
                        Also on rotation
                      </p>
                      <div className="mt-1 sm:mt-1.5 flex flex-wrap gap-1 sm:gap-1.5">
                        {additionalTracks.map(({ title, artist }) => (
                          <span
                            key={`${title}-${artist}`}
                            className="rounded-full border border-gray-200/70 px-2 sm:px-2.5 py-0.5 text-[10px] sm:text-xs font-medium text-gray-500 transition group-hover:border-gray-300 dark:border-gray-700 dark:text-gray-300 truncate max-w-[120px] sm:max-w-none"
                          >
                            {title} · {artist}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Animated Vinyl Record */}
                <div className="absolute -bottom-0 left-1/2 hidden -translate-x-1/2 transition-all duration-500 opacity-0 group-hover:bottom-4 sm:group-hover:bottom-6 md:group-hover:bottom-8 group-hover:opacity-100 sm:block">
                  <div className="relative">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-gray-900 dark:bg-gray-700 shadow-xl animate-spin-slow">
                      <div className="absolute inset-1.5 sm:inset-2 rounded-full bg-gray-700 dark:bg-gray-600 border-2 border-gray-600 dark:border-gray-500">
                        <div className="absolute inset-2.5 sm:inset-3 md:inset-4 flex items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-500">
                          <FaSpotify className="h-6 w-6 sm:h-8 sm:w-8 md:h-9 md:w-9 text-white" />
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-gray-900 dark:bg-gray-800 border border-gray-600"></div>
                      </div>
                    </div>
                    {/* Light reflection */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-60"></div>
                  </div>
                </div>

                {/* Album Cover (slides up) */}
                <div className="absolute -bottom-20 sm:-bottom-24 md:-bottom-28 left-1/2 hidden -translate-x-1/2 transition-all duration-700 group-hover:-bottom-14 sm:group-hover:-bottom-16 md:group-hover:-bottom-20 sm:block">
                  <div className="flex h-28 w-28 sm:h-32 sm:w-32 md:h-36 md:w-36 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 shadow-2xl">
                    <FaSpotify className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 text-white" />
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>
          </a>
        </div>

      </div>
    </div>
  );
}

export default Tool;