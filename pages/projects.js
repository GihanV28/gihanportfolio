import { useState, useEffect } from 'react';

const projects = [
  {
    id: 1,
    title: 'IMPORT/EXPORT TRACKING SYSTEM - (ONGOING)',
    description: 'A comprehensive web application for managing international trade operations with real-time shipment tracking and invoice generation. Features dual-portal architecture for administrators and clients with role-based access control.',
    keyContributions: [
      'UI designing using figma',
      'Developed responsive UI components using Next.js and Tailwind CSS',
      'Implemented real-time tracking features with Firebase',
      'Created a secure authentication and authorization system',
      'Built RESTful API endpoints for data exchange'
    ],
    techStack: 'Next.js | Firebase | TypeScript | Tailwind CSS | shadcn/ui | Figma',
    link: '#'
  },
  {
    id: 2,
    title: 'CRYPTO POSITION MANAGER & TRADING SIGNAL AGGREGATOR - (ONGOING)',
    description: 'A full-stack cryptocurrency trading platform that automatically aggregates trading signals from Telegram channels and provides real-time position management with P&L tracking, manual trade execution, and secure user authentication.',
    keyContributions: [
      'Developed a full-stack cryptocurrency trading platform that aggregates real-time signals from Telegram and enables position management with live P&L tracking',
      'Built modern Next.js 19 & React 19 frontend with 60+ UI components, WebSocket integration, and TypeScript; implemented Spring Boot 3.3 REST API with JWT authentication and PostgreSQL database',
      'Architected secure user authentication with role-based access control, signal filtering (by pair type/channel), manual trading capabilities, and comprehensive trade history analytics'
    ],
    techStack: 'Next.js | React 19 | TypeScript | Tailwind CSS | Spring Boot | Java 17 | PostgreSQL | JWT | WebSocket | Maven | Docker',
    link: '#'
  },
  {
    id: 3,
    title: 'MARTIALMIND - A CUSTOMIZED MARTIAL ARTS TRAINING APP',
    description: 'Developed a multiplatform app using AI-powered martial arts recommendation system that provides personalized nutrition plans and exercise routines. The system uses federated learning for data privacy, supervised learning for personalized recommendations, and reinforcement learning for engagement. Key features include BMI/BMR calculation, nutrition planning based on metabolic needs, and customized training regimens tailored to experience level and fitness goals',
    techStack: 'Python | Flutter | PostgreSQL | Flask',
    link: '#'
  },
  {
    id: 4,
    title: 'ADVERTISING SHOWCASE WEBSITE',
    description: 'Designed and developed a modern showcase website for an advertising company with dynamic content management, responsive design, and optimized performance.',
    keyContributions: [
      'Built using Next.js for server-side rendering and SEO optimization',
      'Implemented modern UI components using shadcn/ui library',
      'Created smooth animations and transitions for enhanced user experience',
      'Optimized image loading and performance'
    ],
    techStack: 'Next.js | shadcn/ui | JavaScript | Responsive Design',
    link: 'https://promax-advertising.vercel.app/'
  }
];

export default function Projects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={`fade-in ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-6xl">
        <h1 className="text-3xl mb-8" style={{ fontWeight: '400', letterSpacing: '0.02em' }}>
          Projects
        </h1>

        {projects.map((project, index) => (
          <div
            key={project.id}
            className="project-item"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="mb-6">
              {project.link !== '#' ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                >
                  <h2 className="text-xl md:text-2xl mb-4 inline-flex items-center gap-2" style={{ fontWeight: '700', letterSpacing: '0.01em' }}>
                    {project.title} <span className="text-lg">↗</span>
                  </h2>
                </a>
              ) : (
                <h2 className="text-xl md:text-2xl mb-4" style={{ fontWeight: '700', letterSpacing: '0.01em' }}>
                  {project.title}
                </h2>
              )}

              <p className="text-base mb-4 leading-relaxed" style={{ opacity: 0.85 }}>
                {project.description}
              </p>

              {project.keyContributions && (
                <div className="mb-4">
                  <p className="text-sm font-semibold mb-2">Key Contributions:</p>
                  <ul className="list-none space-y-1">
                    {project.keyContributions.map((contribution, idx) => (
                      <li key={idx} className="text-sm leading-relaxed" style={{ opacity: 0.8 }}>
                        • {contribution}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <p className="text-sm font-mono" style={{ opacity: 0.7 }}>
                {project.techStack}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
