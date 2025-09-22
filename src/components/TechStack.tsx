import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface TechButton {
  name: string;
  url: string;
  color: string;
  bgColor: string;
}

const techStack: TechButton[] = [
  { name: 'Next.js', url: 'https://nextjs.org/docs', color: 'text-gray-300', bgColor: 'bg-gray-600/10 hover:bg-gray-600/20' },
  { name: 'Nest.js', url: 'https://docs.nestjs.com', color: 'text-gray-300', bgColor: 'bg-gray-600/10 hover:bg-gray-600/20' },
  { name: 'MongoDB', url: 'https://docs.mongodb.com', color: 'text-gray-300', bgColor: 'bg-gray-600/10 hover:bg-gray-600/20' },
  { name: 'Redis', url: 'https://redis.io/docs', color: 'text-gray-300', bgColor: 'bg-gray-600/10 hover:bg-gray-600/20' },
  { name: 'RabbitMQ', url: 'https://www.rabbitmq.com/documentation.html', color: 'text-gray-300', bgColor: 'bg-gray-600/10 hover:bg-gray-600/20' },
  { name: 'Turbo-Repo', url: 'https://turbo.build/repo/docs', color: 'text-gray-300', bgColor: 'bg-gray-600/10 hover:bg-gray-600/20' },
  { name: 'Tailwind CSS', url: 'https://tailwindcss.com/docs', color: 'text-gray-300', bgColor: 'bg-gray-600/10 hover:bg-gray-600/20' },
  { name: 'Git', url: 'https://git-scm.com/doc', color: 'text-gray-300', bgColor: 'bg-gray-600/10 hover:bg-gray-600/20' },
  { name: 'GitHub', url: 'https://docs.github.com', color: 'text-gray-300', bgColor: 'bg-gray-600/10 hover:bg-gray-600/20' },
  { name: 'TypeScript', url: 'https://www.typescriptlang.org/docs', color: 'text-gray-300', bgColor: 'bg-gray-600/10 hover:bg-gray-600/20' },
  { name: 'NextAuth', url: 'https://next-auth.js.org/getting-started/introduction', color: 'text-gray-300', bgColor: 'bg-gray-600/10 hover:bg-gray-600/20' },
  { name: 'RESTful APIs', url: 'https://restfulapi.net', color: 'text-gray-300', bgColor: 'bg-gray-600/10 hover:bg-gray-600/20' },
  { name: 'Shadcn UI', url: 'https://ui.shadcn.com/docs', color: 'text-gray-300', bgColor: 'bg-gray-600/10 hover:bg-gray-600/20' },
  { name: 'Docker', url: 'https://docs.docker.com', color: 'text-gray-300', bgColor: 'bg-gray-600/10 hover:bg-gray-600/20' },
  { name: 'Swagger', url: 'https://swagger.io/docs', color: 'text-gray-300', bgColor: 'bg-gray-600/10 hover:bg-gray-600/20' },
  { name: 'PostgreSQL', url: 'https://www.postgresql.org/docs', color: 'text-gray-300', bgColor: 'bg-gray-600/10 hover:bg-gray-600/20' },
  { name: 'React.js', url: 'https://reactjs.org/docs', color: 'text-gray-300', bgColor: 'bg-gray-600/10 hover:bg-gray-600/20' },
  { name: 'Node.js', url: 'https://nodejs.org/en/docs', color: 'text-gray-300', bgColor: 'bg-gray-600/10 hover:bg-gray-600/20' },
  { name: 'Express.js', url: 'https://expressjs.com/en/4x/api.html', color: 'text-gray-300', bgColor: 'bg-gray-600/10 hover:bg-gray-600/20' },
  { name: 'Zod', url: 'https://zod.dev', color: 'text-gray-300', bgColor: 'bg-gray-600/10 hover:bg-gray-600/20' },
];

const TechButton: React.FC<{ tech: TechButton }> = ({ tech }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative">
      <button
        className={`
          group relative flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-700/50
          ${tech.bgColor} ${tech.color} w-full h-12 min-w-[140px]
          transition-all duration-300 ease-out
          hover:border-gray-600/70 hover:scale-105 hover:shadow-lg hover:shadow-gray-900/20
          backdrop-blur-sm
        `}
        onClick={() => window.open(tech.url, '_blank')}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <span className="text-sm font-medium text-center truncate">{tech.name}</span>
        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-70 transition-opacity duration-200" />
        
        {showTooltip && (
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900/95 text-white text-xs rounded-lg border border-gray-700 whitespace-nowrap z-10 backdrop-blur-sm">
            <div className="font-medium mb-1">{tech.name} Documentation</div>
            <div className="text-gray-300 text-xs">{tech.url}</div>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-700"></div>
          </div>
        )}
      </button>
    </div>
  );
};

const TechStack: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center p-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">
            MY SKILLS
          </h2>
          <h1 className="text-6xl md:text-7xl font-light text-white mb-2">
            The Secret <span className="text-purple-400 italic">Sauce</span>
          </h1>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {techStack.map((tech, index) => (
            <TechButton key={index} tech={tech} />
          ))}
        </div>

        {/* Footer */}
        <p className="text-gray-500 text-sm mt-12 max-w-2xl mx-auto">
          Click any button to explore the official documentation and discover the tools that power modern web development.
        </p>
      </div>
    </section>
  );
};

export default TechStack;