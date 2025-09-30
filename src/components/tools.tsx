import { useState, useEffect } from 'react';
import { ExternalLink, Code2, FileText, Music } from 'lucide-react';

function Tool() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="transition-colors duration-300">
      <div className="relative mx-auto container">
        {/* Hero Section */}
        <div 
          className={`transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 
            className="relative z-2 text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-center mb-4 md:mb-8 max-w-4xl mx-auto"
            style={{
              textShadow: 'rgba(255, 255, 255, 0.05) 0px 4px 8px, rgba(255, 255, 255, 0.25) 0px 8px 30px'
            }}
          >
            <p className="mb-3 font-mono text-xs font-normal tracking-widest text-black/80 uppercase md:text-sm dark:text-white/70">
              My Site
            </p>
            <span className="font-serif">
              <span className="text-gray-900 dark:text-white">Explore, experiment</span>{' '}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent font-serif italic tracking-tight">
                && say hello
              </span>
            </span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div 
          className={`mt-20 grid grid-cols-1 gap-6 md:grid-cols-12 transition-all duration-1000 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Uses Card */}
          <div className="group relative flex flex-col justify-between rounded-xl col-span-12 h-[300px] md:col-span-12 lg:col-span-4 cursor-pointer overflow-hidden">
            <div className="group relative flex size-full flex-col justify-between overflow-hidden rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-500 transform-gpu hover:-translate-y-1">
              
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
                <div className="mt-12 flex items-center justify-center gap-4 transition-all duration-500 ease-in-out">
                  {[
                    { name: 'Code2', delay: 'delay-200', size: 'size-[90px] md:size-[100px]' },
                    { name: 'FileText', delay: 'delay-100', size: 'size-[85px] md:size-[95px]' },
                    { name: 'Code2', delay: 'delay-0', size: 'size-[100px] md:size-[110px]' },
                    { name: 'FileText', delay: 'delay-100', size: 'size-[85px] md:size-[95px]' },
                    { name: 'Music', delay: 'delay-200', size: 'size-[90px] md:size-[100px]' }
                  ].map((tool, index) => (
                    <div key={index} className="group/tool inline-block text-center">
                      <div className={`rounded-2xl border-2 border-transparent p-2 transition-all duration-500 group-hover:border-indigo-400 ${tool.size} ${tool.delay} group-hover:-translate-y-3 transform-gpu`}>
                        <div className="grid h-full place-items-center rounded-xl border-2 border-gray-100 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 shadow-inner hover:shadow-lg transition-all duration-300">
                          {tool.name === 'Code2' && <Code2 className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
                          {tool.name === 'FileText' && <FileText className="h-8 w-8 text-green-600 dark:text-green-400" />}
                          {tool.name === 'Music' && <Music className="h-8 w-8 text-purple-600 dark:text-purple-400" />}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Text Content */}
              <div className="pointer-events-none z-10 flex flex-col gap-1 p-6">
                <h3 className="font-mono text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">Uses</h3>
                <p className="text-xl font-semibold tracking-wide text-gray-700 dark:text-gray-300">
                  Check out my favorite tools and spots around the web.
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tl from-white/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>
          </div>

          {/* Guestbook Card */}
          <div className="group relative w-full col-span-12 h-[300px] md:col-span-6 lg:col-span-4 cursor-pointer">
            <div className="group relative flex size-full flex-col justify-between overflow-hidden rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-500 transform-gpu hover:-translate-y-1">
              
              {/* Hover Arrow */}
              <div className="absolute right-4 bottom-4 z-50 flex h-9 w-9 rotate-6 items-center justify-center rounded-full bg-black/15 dark:bg-white/15 opacity-0 transition-all duration-500 group-hover:translate-y-[-8px] group-hover:rotate-0 group-hover:opacity-100">
                <ExternalLink className="h-5 w-5 text-gray-700 dark:text-gray-200" />
              </div>

              {/* Background Pattern */}
              <div className="size-full relative">
                <div className="absolute bottom-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] [background-size:16px_16px] opacity-30"></div>
                
                {/* Decorative SVG Elements */}
                <div className="absolute top-0 left-4 transform -rotate-12 transition-transform duration-700 group-hover:rotate-6">
                  <div className="w-32 h-40 bg-gradient-to-br from-pink-400 to-purple-600 rounded-lg shadow-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                </div>
                
                <div className="absolute top-8 right-4 transform rotate-12 transition-transform duration-700 group-hover:-rotate-6">
                  <div className="w-36 h-44 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-lg shadow-lg opacity-15 group-hover:opacity-25 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Content */}
              <div className="pointer-events-none z-10 flex flex-col gap-1 p-6">
                <h3 className="font-mono text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">Guestbook</h3>
                <p className="text-xl font-semibold tracking-wide text-gray-700 dark:text-gray-300">
                  Let me know you were here
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tl from-white/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>
          </div>

          {/* Spotify Card */}
          <div className="group relative col-span-12 h-[300px] md:col-span-6 lg:col-span-4 cursor-pointer">
            <div className="group flex size-full flex-col justify-between overflow-hidden rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-500 transform-gpu hover:-translate-y-1">
              
              {/* Background Album Art */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-700 group-hover:opacity-20 dark:group-hover:opacity-30"
                style={{
                  backgroundImage: 'url("https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&w=600")',
                  filter: 'blur(2px)'
                }}
              ></div>

              <div className="relative h-full p-6">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Music className="w-4 h-4 text-white" />
                  </div>
                  <h2 className="font-serif text-xl font-medium tracking-wide text-gray-900 dark:text-white">
                    Recent Favorite
                  </h2>
                </div>

                {/* Track Info */}
                <div className="space-y-2">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    I'm listening to{' '}
                    <span className="font-medium text-gray-900 dark:text-white">Another Story</span>
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    by{' '}
                    <span className="font-medium text-gray-900 dark:text-white">Nicholas Hooper</span>
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    from{' '}
                    <span className="font-medium text-gray-900 dark:text-white">Harry Potter Soundtrack</span>
                  </p>
                </div>

                {/* Animated Vinyl Record */}
                <div className="absolute -bottom-0 left-1/2 -translate-x-1/2 transition-all duration-500 group-hover:bottom-8 opacity-0 group-hover:opacity-100">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full bg-gray-900 dark:bg-gray-700 shadow-xl animate-spin-slow">
                      <div className="absolute inset-2 rounded-full bg-gray-700 dark:bg-gray-600 border-2 border-gray-600 dark:border-gray-500">
                        <div className="absolute inset-4 rounded-full overflow-hidden">
                          <img 
                            src="https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&w=200" 
                            alt="Album cover"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gray-900 dark:bg-gray-800 border border-gray-600"></div>
                      </div>
                    </div>
                    {/* Light reflection */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-60"></div>
                  </div>
                </div>

                {/* Album Cover (slides up) */}
                <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 transition-all duration-700 group-hover:-bottom-20">
                  <div className="w-48 h-48 rounded-lg shadow-2xl overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&w=400" 
                      alt="Album cover"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tool;