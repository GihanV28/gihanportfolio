import { useEffect, useState } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark]   = useState(true);

  useEffect(() => {
    setMounted(true);

    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    setIsDark(current !== 'light');

    const observer = new MutationObserver(() => {
      const theme = document.documentElement.getAttribute('data-theme') || 'dark';
      setIsDark(theme !== 'light');
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`fade-in ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      <div className="home-content">
        <div className="home-image-wrap">
          <img
            src={isDark ? '/black.png' : '/white.png'}
            alt="Gihan Wanninayaka"
            className="home-image"
          />
        </div>
        <div className="bio-text">
          <p>
            Full-Stack Software Engineer specializing in scalable distributed systems,
            AI integrations, and data-driven optimization. Leveraging over 2 years of
            experience with Python, Next.js, and modern cloud infrastructures, I build
            production-ready platforms for fintech and healthcare. Passionate about
            transforming complex backend architectures and machine learning capabilities
            into seamless, high-performance web applications.
          </p>
        </div>
      </div>
    </div>
  );
}
