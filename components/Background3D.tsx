import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

interface ParticleType {
  left: number;
  top: number;
  delay: number;
  duration: number;
}

const Background3D: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const [particles, setParticles] = useState<Array<ParticleType>>([]);

  useEffect(() => {
    // Faqat clientda random yoki vaqtga bog‘liq qiymatlarni generatsiya qilamiz
    const generatedParticles = Array.from({ length: 20 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 20,
      duration: 20 + Math.random() * 20,
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden -z-10">
      {/* Main Background Gradient */}
      <div className={`absolute inset-0 transition-all duration-1000 ${
        resolvedTheme === 'dark'
          ? 'bg-gradient-to-br from-slate-950 via-gray-900 to-black' 
          : 'bg-gradient-to-br from-gray-50 via-white to-blue-50/30'
      }`} />
      
      {/* Animated Mesh Overlay */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${
        resolvedTheme === 'dark'
          ? 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-purple-900/20' 
          : 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-purple-100/30'
      }`} />
      
      {/* Floating Tech Icons */}
      <div className="absolute inset-0">
        {[
          { text: 'React', x: '15%', y: '20%', delay: '0s', size: 'text-sm' },
          { text: 'TypeScript', x: '85%', y: '25%', delay: '1s', size: 'text-xs' },
          { text: 'Next.js', x: '10%', y: '70%', delay: '2s', size: 'text-sm' },
          { text: 'Node.js', x: '90%', y: '60%', delay: '3s', size: 'text-xs' },
          { text: 'MongoDB', x: '20%', y: '45%', delay: '4s', size: 'text-xs' },
          { text: 'Tailwind', x: '80%', y: '80%', delay: '5s', size: 'text-sm' },
          { text: 'GraphQL', x: '25%', y: '85%', delay: '6s', size: 'text-xs' },
          { text: 'Docker', x: '75%', y: '15%', delay: '7s', size: 'text-xs' },
        ].map((item, i) => (
          <div
            key={`tech-${i}`}
            className={`absolute font-mono ${item.size} opacity-30 animate-tech-float transition-colors duration-1000 ${
              resolvedTheme === 'dark' ? 'text-blue-400' : 'text-blue-600'
            }`}
            style={{
              left: item.x,
              top: item.y,
              animationDelay: item.delay,
              animationDuration: '12s'
            }}
          >
            {item.text}
          </div>
        ))}
      </div>
      
      {/* Advanced Geometric Network */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-20" viewBox="0 0 1200 800">
          {/* Dynamic Connection Lines */}
          {Array.from({ length: 15 }).map((_, i) => {
            const x1 = (i * 80) % 1200;
            const y1 = (i * 60) % 800;
            const x2 = ((i + 3) * 90) % 1200;
            const y2 = ((i + 2) * 70) % 800;
            
            return (
              <g key={`connection-${i}`}>
                <line
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={resolvedTheme === 'dark' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.4)'}
                  strokeWidth="1"
                  className="animate-line-pulse"
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
                <circle
                  cx={x1}
                  cy={y1}
                  r="2"
                  fill={resolvedTheme === 'dark' ? 'rgba(147, 51, 234, 0.5)' : 'rgba(147, 51, 234, 0.7)'}
                  className="animate-dot-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              </g>
            );
          })}
          
          {/* Animated Polygons */}
          {Array.from({ length: 6 }).map((_, i) => (
            <polygon
              key={`poly-${i}`}
              points={`${200 + i * 150},${100 + i * 80} ${250 + i * 150},${150 + i * 80} ${200 + i * 150},${200 + i * 80} ${150 + i * 150},${150 + i * 80}`}
              fill="none"
              stroke={resolvedTheme === 'dark' ? 'rgba(34, 197, 94, 0.2)' : 'rgba(34, 197, 94, 0.3)'}
              strokeWidth="1"
              className="animate-polygon-rotate"
              style={{ 
                animationDelay: `${i * 0.5}s`,
                transformOrigin: `${200 + i * 150}px ${150 + i * 80}px`
              }}
            />
          ))}
        </svg>
      </div>
      
      {/* 3D Floating Cards */}
      <div className="absolute inset-0 perspective-1000">
        {[
          { title: 'Frontend', x: '20%', y: '30%', delay: '0s', tech: ['React', 'Vue', 'Angular'] },
          { title: 'Backend', x: '70%', y: '40%', delay: '2s', tech: ['Node.js', 'Python', 'Go'] },
          { title: 'Database', x: '15%', y: '65%', delay: '4s', tech: ['MongoDB', 'PostgreSQL'] },
          { title: 'DevOps', x: '75%', y: '70%', delay: '6s', tech: ['Docker', 'AWS', 'CI/CD'] },
        ].map((card, i) => (
          <div
            key={`card-${i}`}
            className={`absolute w-48 h-32 rounded-xl backdrop-blur-sm border transition-all duration-1000 animate-card-3d shadow-2xl ${
              resolvedTheme === 'dark'
                ? 'bg-gray-900/40 border-gray-700/30' 
                : 'bg-white/50 border-gray-200/40'
            }`}
            style={{
              left: card.x,
              top: card.y,
              animationDelay: card.delay
            }}
          >
            <div className="p-4 h-full flex flex-col justify-center">
              <h3 className={`font-semibold text-lg mb-2 transition-colors duration-1000 ${
                resolvedTheme === 'dark' ? 'text-blue-400' : 'text-blue-600'
              }`}>
                {card.title}
              </h3>
              <div className="space-y-1">
                {card.tech.map((tech, j) => (
                  <div key={j} className={`text-xs transition-colors duration-1000 ${
                    resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Advanced Particle System */}
      <div className="absolute inset-0">
        {particles.map((p, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-particle-float transition-colors duration-1000 ${
              resolvedTheme === 'dark' ? 'bg-blue-500/20' : 'bg-blue-600/30'
            } ${
              i % 5 === 0 ? 'w-3 h-3' : 
              i % 5 === 1 ? 'w-2 h-2' : 
              i % 5 === 2 ? 'w-1.5 h-1.5' : 
              i % 5 === 3 ? 'w-1 h-1' : 'w-0.5 h-0.5'
            }`}
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`
            }}
          />
        ))}
      </div>
      
      {/* Glowing Orbs with Blur */}
      <div className="absolute inset-0">
        <div className={`absolute top-1/6 right-1/5 w-96 h-96 rounded-full blur-3xl animate-orb-pulse transition-colors duration-1000 ${
          resolvedTheme === 'dark' ? 'bg-blue-500/10' : 'bg-blue-500/15'
        }`} />
        <div className={`absolute bottom-1/5 left-1/6 w-80 h-80 rounded-full blur-3xl animate-orb-pulse transition-colors duration-1000 ${
          resolvedTheme === 'dark' ? 'bg-purple-500/10' : 'bg-purple-500/15'
        }`} style={{ animationDelay: '3s' }} />
        <div className={`absolute top-1/2 right-1/3 w-64 h-64 rounded-full blur-3xl animate-orb-pulse transition-colors duration-1000 ${
          resolvedTheme === 'dark' ? 'bg-teal-500/10' : 'bg-teal-500/15'
        }`} style={{ animationDelay: '6s' }} />
      </div>
      
      {/* Rotating Ring System */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2">
        <div className={`absolute inset-0 rounded-full border transition-colors duration-1000 animate-ring-rotate ${
          resolvedTheme === 'dark' ? 'border-blue-500/15' : 'border-blue-500/25'
        }`} />
        <div className={`absolute inset-12 rounded-full border transition-colors duration-1000 animate-ring-reverse ${
          resolvedTheme === 'dark' ? 'border-purple-500/15' : 'border-purple-500/25'
        }`} />
        <div className={`absolute inset-24 rounded-full border transition-colors duration-1000 animate-ring-rotate ${
          resolvedTheme === 'dark' ? 'border-teal-500/15' : 'border-teal-500/25'
        }`} />
      </div>
      
      {/* Code Matrix Effect */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`matrix-${i}`}
            className={`absolute font-mono text-xs animate-matrix-fall transition-colors duration-1000 ${
              resolvedTheme === 'dark' ? 'text-green-400' : 'text-green-600'
            }`}
            style={{
              left: `${i * 5}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${10 + Math.random() * 5}s`
            }}
          >
            {Array.from({ length: 15 }).map((_, j) => (
              <div key={j} className="mb-3">
                {Math.random() > 0.5 ? '1' : '0'}
              </div>
            ))}
          </div>
        ))}
      </div>
      
      {/* Hexagonal Grid */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={`hex-${i}`}
            className={`absolute w-20 h-20 border transition-all duration-1000 animate-hex-spin ${
              resolvedTheme === 'dark' ? 'border-blue-400' : 'border-blue-600'
            }`}
            style={{
              left: `${15 + (i % 4) * 20}%`,
              top: `${20 + Math.floor(i / 4) * 25}%`,
              clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
              animationDelay: `${i * 0.4}s`
            }}
          />
        ))}
      </div>
      
      {/* Scanning Beam Effects */}
      <div className="absolute inset-0">
        <div className={`absolute top-0 left-0 w-full h-1 animate-scan-h transition-colors duration-1000 ${
          resolvedTheme === 'dark' ? 'bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent' : 'bg-gradient-to-r from-transparent via-cyan-600/50 to-transparent'
        }`} />
        <div className={`absolute top-0 left-0 w-1 h-full animate-scan-v transition-colors duration-1000 ${
          resolvedTheme === 'dark' ? 'bg-gradient-to-b from-transparent via-pink-400/40 to-transparent' : 'bg-gradient-to-b from-transparent via-pink-600/50 to-transparent'
        }`} />
      </div>
      
      {/* Dynamic Grid Lines */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${resolvedTheme === 'dark' ? 'opacity-5' : 'opacity-10'}`}>
        {/* Vertical Grid */}
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={`grid-v-${i}`}
            className={`absolute top-0 bottom-0 w-px transition-colors duration-1000 animate-grid-pulse ${
              resolvedTheme === 'dark' ? 'bg-gradient-to-b from-transparent via-blue-500/20 to-transparent' : 'bg-gradient-to-b from-transparent via-gray-400/30 to-transparent'
            }`}
            style={{ 
              left: `${i * 4}%`,
              animationDelay: `${i * 0.05}s`
            }}
          />
        ))}
        
        {/* Horizontal Grid */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`grid-h-${i}`}
            className={`absolute left-0 right-0 h-px transition-colors duration-1000 animate-grid-pulse ${
              resolvedTheme === 'dark' ? 'bg-gradient-to-r from-transparent via-purple-500/20 to-transparent' : 'bg-gradient-to-r from-transparent via-gray-400/30 to-transparent'
            }`}
            style={{ 
              top: `${i * 5}%`,
              animationDelay: `${i * 0.05}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Background3D;