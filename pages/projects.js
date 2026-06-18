import { useState, useEffect } from 'react';

const projects = [
  {
    id: 1,
    title: 'Import/Export Trade Management System',
    description:
      'Full-stack ERP application for managing international trade with real-time shipment tracking, invoice generation, and a dual-portal architecture (admin and client) with role-based access control.',
    keyContributions: [
      'Developed responsive UI with Next.js and Tailwind CSS; implemented real-time data sync with Firebase',
      'Built secure authentication, authorization system, and RESTful API layer for cross-portal data exchange',
    ],
    techStack: 'Next.js | TypeScript | Firebase | Tailwind CSS | Shadcn UI | Figma',
    link: '#',
  },
  {
    id: 2,
    title: 'LifeLink – AI-Powered Blood Donation Management System',
    description:
      'Web-based blood donor matching platform for Sri Lanka combining ML-based donation prediction, geospatial proximity filtering, and ABO/Rh compatibility scoring for real-time hospital donor recommendations.',
    keyContributions: [
      'Built React/TypeScript frontend and FastAPI backend with role-differentiated access for donors, hospital staff, and admins',
      'Trained stacking ensemble model (XGBoost + LightGBM + Random Forest + Logistic Regression meta-learner) on RFMT donor features achieving ROC-AUC of 0.78–0.82',
      'Computed composite match score (0–100) combining ML prediction probability, blood type compatibility, geospatial proximity, and donor response history',
    ],
    techStack: 'React | TypeScript | FastAPI | Python | XGBoost | LightGBM | Random Forest | PostgreSQL | JWT',
    link: '#',
  },
  {
    id: 3,
    title: 'Adum Culture – Retail Order Management System',
    description:
      'Full-stack retail and order management platform for a clothing business featuring a point-of-sale system, inventory management, supplier and customer portals, HR module, and comprehensive business analytics.',
    keyContributions: [
      'Built React 19 frontend with Tailwind CSS, React Query, and Recharts for real-time dashboards covering sales, stock, and expenses',
      'Developed Node.js/Express REST API with Prisma ORM on PostgreSQL (Supabase); implemented JWT auth with rate limiting and role-based access',
      'Implemented POS, GRN, purchase orders, returns, cash transfers, supplier payments, and SMS notification services',
    ],
    techStack: 'React 19 | TypeScript | Tailwind CSS | Node.js | Express | Prisma | PostgreSQL | Supabase | JWT',
    link: '#',
  },
  {
    id: 4,
    title: 'Online Clothing E-Commerce Platform',
    description:
      'Full-stack clothing e-commerce solution with a customer storefront, admin panel, and integrated payment processing.',
    keyContributions: [
      'Built Next.js frontend with server-side rendering and SEO optimization; developed REST APIs for product, order, and user management',
      'Implemented admin dashboard for inventory and content management; integrated OnePay payment gateway for secure checkout',
    ],
    techStack: 'Next.js | Shadcn UI | JavaScript | Tailwind CSS | OnePay Payment Gateway',
    link: 'https://promax-advertising.vercel.app/',
  },
  {
    id: 5,
    title: 'MartialMind – AI-Powered Martial Arts Training Application',
    description:
      'Personalized martial arts training platform using federated learning, supervised learning, and reinforcement learning to generate customized nutrition plans and exercise routines based on BMI/BMR and fitness goals.',
    keyContributions: [],
    techStack: 'Python | Flutter | PostgreSQL | Flask',
    link: '#',
  },
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

              {project.keyContributions.length > 0 && (
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
